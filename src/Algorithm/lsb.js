const CHAR_SIZE = 16;
export async function encode(message, url) {
    const bin = stringToBinary(message);
    const message1 = binaryToString(bin);
    return modifyBmp(url, bin);
}

export async function decode(url, log) {
    //TODO
}

// TODO обозначить конец сообщения
// TODO ?пустить запись по второму биту?
async function modifyBmp(url, message) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const dataView = new DataView(buffer);
    const OFFSET = 54; // отступ до пикселей
    for (let i = 0; i < dataView.byteLength - OFFSET; i++) {
        let byteValue = dataView.getUint8(OFFSET + i);
        if (i < message.length) {
            console.log(i, "байт    до правки:", byteValue);
            byteValue = byteValue & 0xfe; // сбросить последний бит
            byteValue = byteValue | (+message[i] ? 0x01 : 0x00);
            console.log(i, "байт после правки:", byteValue);
            dataView.setUint8(OFFSET + i, byteValue);
        } else {
            break;
        }
    }

    const blob = new Blob([buffer], { type: "image/bmp" });
    const modifiedUrl = URL.createObjectURL(blob);
    return modifiedUrl;
}

function stringToBinary(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        let binaryCode = charCode.toString(2);
        result += binaryCode.padStart(CHAR_SIZE, "0");
    }
    return result;
}

function binaryToString(str) {
    let result = "";
    for (let i = 0; i < str.length / CHAR_SIZE; i++) {
        let binaryCode = str.slice(i * CHAR_SIZE, (i + 1) * CHAR_SIZE);
        let charCode = parseInt(binaryCode, 2);
        let char = String.fromCharCode(charCode);
        result += char;
    }
    return result;
}
