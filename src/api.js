import axios from "axios";

const request = async (path, method, data) => {
    const response = await axios({
        method: method,
        url: `http://localhost:3001${path}`,
        params: data,
    });
    return response.data;
};

export const Test = async () => {
    const row = await request("/test", "GET");
    return row[0].id;
}

export const serchId = async (userId) => {
    const data = {
        id: userId
    }
    const row = await request("/serch-id", "GET", data);
    return row[0].id;
}

export const getLogin = async (userId, password) => {
    const data = {
        id: userId,
        password: password
    }
    return await request("/getLogin", "GET", data);
};
