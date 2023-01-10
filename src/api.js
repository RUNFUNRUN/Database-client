import axios from "axios";

const request = async (path, method, data) => {
    const response = await axios({
        method: method,
        url: `${process.env.REACT_APP_API_ENDPOINT}${path}`,
        params: data,
    });
    return response.data;
};

export const getLogin = async (userId, password) => {
    const data = {
        id: userId,
        password: password
    }
    return await request("/login", "GET", data);
};

export const createAccount = async (userId, password) => {
    const data = {
        id: userId,
        password: password
    }
    return await request("/create-account", "POST", data);
};

export const createIssue = async (userId, title, discription, startline, deadline, state) => {
    const data = {
        id: userId,
        title: title,
        discription: discription,
        startline: startline,
        deadline: deadline,
        state: state
    }
    return await request("/create-issue", "POST", data);
}

export const editIssue = async (userId, title, discription, startline, deadline, state) => {
    const data = {
        id: userId,
        title: title,
        discription: discription,
        startline: startline,
        deadline: deadline,
        state: state
    }
    return await request("/edit-issue", "PUT", data);
}

export const deleteIssue = async (userId, title) => {
    const data = {
        id: userId,
        title: title
    }
    return await request("/delete-issue", "DELETE", data);
}

export const getIssueList = async (userId) => {
    const data = {
        id: userId
    }
    return await request("/get-issue-list", "GET", data);
}
