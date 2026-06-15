export function generateThaiCitizenId(cid) {
    // cid ต้องเป็นเลข 12 หลัก
    const startSeq = BigInt(cid);

    // เพิ่มตาม VU และ ITER
    const sequence =
        startSeq +
        BigInt((__VU - 1) * 100000000 + __ITER);

    // แปลงเป็น 12 หลัก
    const base = sequence.toString().padStart(12, '0');

    // คำนวณ Check Digit
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += Number(base[i]) * (13 - i);
    }

    const checkDigit = (11 - (sum % 11)) % 10;
    console.log(base + checkDigit);
    return base + checkDigit;
}