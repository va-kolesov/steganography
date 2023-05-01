const CHAR_SIZE = 16; // Размер символа в кодировке utf-16
const BMP_OFFSET = 54; // отступ до пикселей в bmp 24-bit.
const BM_SIGNATURE = 0x4d42; // Сигнатура формата bmp, отличающая его от других форматов
const MESSAGE_ENGING = "0000000000000000"; // Окончание сообщения

/**
 * Функция для кодирования сообщения в BMP-изображение с использованием стеганографии
 *
 * @param {string} message - Сообщение, которое нужно закодировать
 * @param {string} url - URL адрес изображения, в котором будет закодировано сообщение
 * @returns {Promise<string>} URL изображения с закодированны сообщением
 */
export async function encode(message, url) {
    const bin = stringToBinary(message);
    return putMessageInLSB(url, bin);
}

/**
 * Функция для извлечения закодированного сообщения из BMP-изображения с использованием стеганографии
 *
 * @param {string} url - URL адрес изображения, из которого нужно декодировать сообщение
 * @returns {Promise<string>} - сообщение, извлеченное из изображения.
 */
export async function excract(url) {
    try {
        const bin = await getMessageFromLSB(url);
        const message = binaryToString(bin);
        return message;
    } catch (error) {
        throw error;
    }
}

/**
 * Функция замещает последние байты 
 * @param {string} url - URL адрес изображения
 * @param {string} message - двоичный код сообщения
 * @returns URL изображения с закодированны сообщением
 */
async function putMessageInLSB(url, message) {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    if (!isBMP(buffer)) {
        throw {code: 1, message: "Ошибка: переданный файл не является bmp-изображением."};
    }
    const dataView = new DataView(buffer);
    const availableSize = dataView.byteLength - BMP_OFFSET;
    if (availableSize < message.length) {
        throw {code: 2, message: "Сообщение слишком длинное для этого изображения."};
    }
    // шестнадцатью нулями обозначаем конец сообщения.
    const messageWithEnding = message + MESSAGE_ENGING;
    for (let i = 0; i < availableSize; i++) {
        let byteValue = dataView.getUint8(BMP_OFFSET + i);
        if (i < messageWithEnding.length) {
            byteValue =
                (byteValue & 0xfe) | (+messageWithEnding[i] ? 0x01 : 0x00);
            dataView.setUint8(BMP_OFFSET + i, byteValue);
        } else {
            break;
        }
    }

    const blob = new Blob([buffer], { type: "image/bmp" });
    const modifiedUrl = URL.createObjectURL(blob);
    return modifiedUrl;
}

/**
 * Проверка ?><M
 * @param {ArrayBuffer} buffer 
 * @returns 
 */
function isBMP(buffer) {
    // Если содержимое меньше 2 байт, то это не может быть BMP-изображением
    if (buffer.byteLength < 2) {
        return false;
    }
    // Проверить, что первые два байта соответствуют сигнатуре BMP-изображения
    const view = new DataView(buffer, 0, 2);
    const signature = view.getUint16(0, true);
    return signature === BM_SIGNATURE;
}

async function getMessageFromLSB(imageUrl) {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    if (!isBMP(buffer)) {
        throw {code: 1, message: "Ошибка: переданный файл не является bmp-изображением."};
    }
    const dataView = new DataView(buffer);
    let message = "";
    let byte = "";
    for (let i = 0; i < dataView.byteLength - BMP_OFFSET; i++) {
        let byteValue = dataView.getUint8(BMP_OFFSET + i);
        // получение последнего бита байта и добавление его в сообщение
        byte += (byteValue & 0x01).toString();
        if (byte.length === CHAR_SIZE) {
            // Дошли до конца сообщения
            if (byte === MESSAGE_ENGING) {
                break;
            }
            message += byte;
            byte = "";
        }
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
