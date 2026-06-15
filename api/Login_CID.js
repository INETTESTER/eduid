import http from 'k6/http';

export function Login_CID() {
    const url = 'https://edu.id.th/api/v1/auth/login/cid';

    const payload = JSON.stringify({
        id_card: '1104300332077',
        pin: '332077',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhOTE2NWVhYzFjNGMyM2UwZjY1Njk0YTMyM2YzNmI3IiwidHlwIjoiSldUIn0.eyJsb2dpbl90eXBlIjoic2VsZi1sb2dpbiIsImF1ZCI6IjQxMzA1MTExLTJlMWMtNGVmMy1iY2NiLWI3OTY0Yzc4NTRjYSIsImlzcyI6Imh0dHBzOi8vZWR1LmlkLnRoIiwic3ViIjoiMDE5ZWMwZmYtYmUwZC03NjYzLWI1YzYtZDE5ZWQ5MTcyM2Q1IiwiZXhwIjoxNzgxNjA1MjU2LCJuYmYiOjE3ODE1MTg4NTYsImlhdCI6MTc4MTUxODg1NiwianRpIjoiMzMzNzY1NjY2MzM1NjMzNjJkMzIzMTM0MzEyZDM0MzgzODYzMmQ2MjMxNjE2MTJkMzIzNjM1NjU2MTMxMzIzNDYzMzEzODYzIn0.aF0DFJhLZbhvI540fXSLUJuMhmLVL-HvZ1XVzqHqR6M2gtsC6D4vrGwYnP-JfcJSBFFqW7oCrwaWqMXjN3XKhpUNDTHUuonjOA8ble4NNynJ2wCNL3TqUUVhg3ujyc6rF1FDGvcmP8u8gnsAONuXQwHmMLdi0P4P00FvmlntG_rRiHkeMvuMRZWmR0UAEwfBM4s88c7Ipi6Z7JQgnP7M_NxqVWDlHfUKXk9VhLbYjnPOsCyy535omSiIXT-LJZU5btPX4eb-33CO6iVdB7vUIxC39cNQXr0uhvsHNRUyOVLU_A6dqdrpKthRdyPaeQqT6oxUIWmXRo2GOicUMmqy5A',
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}