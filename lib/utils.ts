export function concatArrayBuffer(...arrays: ArrayBuffer[]): ArrayBuffer {
    if (!arrays.length) {
        return null;
    }
    let u8buf: Uint8Array = null;
    let totalLen = arrays.reduce((acc, value) => acc + value.byteLength, 0);
    let result = new Uint8Array(totalLen);
    let length = 0;
    for (let array of arrays) {
        u8buf = new Uint8Array(array);
        result.set(u8buf, length);
        length += array.byteLength;
    }
    return result.buffer;
} 