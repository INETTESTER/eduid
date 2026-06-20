import http from 'k6/http';
import { token } from './env.js';

export function Get_Account_Profile() {
    const url = 'https://edu.id.th/api/v1/accounts/profile';

    const params = {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Cookie': 'access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhOTE2NWVhYzFjNGMyM2UwZjY1Njk0YTMyM2YzNmI3IiwidHlwIjoiSldUIn0.eyJsb2dpbl90eXBlIjoic2VsZi1sb2dpbiIsImF1ZCI6IjQxMzA1MTExLTJlMWMtNGVmMy1iY2NiLWI3OTY0Yzc4NTRjYSIsImlzcyI6Imh0dHBzOi8vZWR1LmlkLnRoIiwic3ViIjoiMDE5ZWU1MjQtNzY3MS03ZTY3LWI3MDUtYTQ5YzliNzM0MmVkIiwiZXhwIjoxNzgyMDQ3MjMyLCJuYmYiOjE3ODE5NjA4MzIsImlhdCI6MTc4MTk2MDgzMiwianRpIjoiMzAzMTM5NjU2NTM1MzIzNDJkMzczNjM3MzQyZDM3NjEzMjY2MmQzOTYxMzEzOTJkNjIzNDY2NjY2NTM4NjUzMDYxMzgzMTMxIn0.Wfg2VhsuSp0ljTQtVypOwOLJ1Orsja1KJfHhHXeZjVD2ChYo1yJ3fzh7NEvn_SZofdR7Lfk7EiSDlYulI_9DN6D1yqSuJjQ5srv16hi1AqMYKJSaZhxsWauopecqXUiZlvdl_Z8m0aNkXS2j7ijp1WtM_JkOhZC5Z348X7vgtJj6PU_jJPcbQdgGDK4F5VbtzxFJJcem8EAi68jBY-RjwbaXrsgpuBGQNYb49_cAJl6iNS-z1IMvYS1MPhc6lvzbd9EX62vGHvseM3YoPt3YCTb58YA-RR_s8cZF_s3dYIqEva2HYvxQ5s47rhmtai41TSBsDnm--Qbq7CnJhvqqag',
        },
    };

    const response = http.get(url, params);

    //console.log('Response body:', response.body);

    return response;
}