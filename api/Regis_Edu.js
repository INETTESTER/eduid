import http from 'k6/http';

export function Regis_Edu(cid) {
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
    //console.log(base + checkDigit);
    const url = 'https://edu.id.th/api/v1/auth/register-cid';

    const payload = JSON.stringify({
        id_card: '' + base + checkDigit,
        birth_date: '2000-01-01',
        passport_no: '',
        title_th: 'นาย',
        title_en: 'Mr.',
        first_name_th: 'สมชาย',
        first_name_en: 'somchai',
        last_name_th: 'สายชล',
        last_name_en: 'saichon',
        affiliation_id: '88099ef3-a308-4d4d-83b9-f38752ea2231',
        person_type: 'student',
        gender: 'ชาย',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhOTE2NWVhYzFjNGMyM2UwZjY1Njk0YTMyM2YzNmI3IiwidHlwIjoiSldUIn0.eyJsb2dpbl90eXBlIjoic2VsZi1sb2dpbiIsImF1ZCI6IjQxMzA1MTExLTJlMWMtNGVmMy1iY2NiLWI3OTY0Yzc4NTRjYSIsImlzcyI6Imh0dHBzOi8vZWR1LmlkLnRoIiwic3ViIjoiMDE5ZWNiMTQtYjVkNi03Nzk4LWFkYjctZDAwNmNjYmExMzdhIiwiZXhwIjoxNzgxNjA5OTkyLCJuYmYiOjE3ODE1MjM1OTIsImlhdCI6MTc4MTUyMzU5MiwianRpIjoiNjQzODM1MzQ2NTY1MzczNzJkMzMzMDM5MzYyZDM0NjU2MTM4MmQzODY1MzA2MjJkMzI2NDM5Mzk2MjMyMzE2NDM3NjUzOTY2In0.f2CSBv5qyL1mBW2e2hK3NAR6WMS0NZX0PRyAuWGWwDSyUsBzOKeaP1kUiihGlT1chSAuZ3e3RGE4yGF_YgdTu-1Fb2JbeAqACfWojdLHHmCtdPLkbAGFucLxSfZEem5do3YxMcQGCGmFMX4vx1wV53_YXZxQHRK4cUzMNSYeVT4iCgvtOsOl-Hg6RN0lNDySlRz6RoekZTWgMNqrxTXyFJ9Sv0rl23T3xExeoSuAcwG2FKjlvfGb2KqdcmYtXnMF19ptRgQai9QqaiciZ5FV6UbZq9mxqZUQiZT_wei8hMvRZf_6DGoEqIlcHGrBv1bDMGx-oMa5Imm8UzzxArMrWw',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}