const CHAR_SIZE = 16; // Размер символа в кодировке utf-16
const BMP_OFFSET = 54; // отступ до пикселей в bmp 24-bit.

export async function encode(message, url) {
    const bin = stringToBinary(message);
    return putMessageInLSB(url, bin);
}

export async function decode(url) {
    const bin = await getMessageFromLSB(url);
    const message = binaryToString(bin);
    return message;
}

// TODO обозначить конец сообщения
// TODO ?пустить запись по второму биту?
async function putMessageInLSB(url, message) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const dataView = new DataView(buffer);
    for (let i = 0; i < dataView.byteLength - BMP_OFFSET; i++) {
        let byteValue = dataView.getUint8(BMP_OFFSET + i);
        if (i < message.length) {
            byteValue = (byteValue & 0xfe) | (+message[i] ? 0x01 : 0x00);
            dataView.setUint8(BMP_OFFSET + i, byteValue);
        } else {
            break;
        }
    }

    const blob = new Blob([buffer], { type: "image/bmp" });
    const modifiedUrl = URL.createObjectURL(blob);
    return modifiedUrl;
}

async function getMessageFromLSB(imageUrl) {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const dataView = new DataView(buffer);
    const BMP_OFFSET = 54; // отступ до пикселей
    let message = "";
    for (let i = 0; i < dataView.byteLength - BMP_OFFSET; i++) {
        let byteValue = dataView.getUint8(BMP_OFFSET + i);
        // получение последнего бита байта и добавление его в сообщение
        message += (byteValue & 0x01).toString();
    }
    return message;
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
        if (parseInt(binaryCode, 2) > 0) {
            let charCode = parseInt(binaryCode, 2);
            let char = String.fromCharCode(charCode);
            result += char;
        }
    }
    return result;
}
