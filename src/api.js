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
        userId: userId,
        password: password
    }
    return await request("/login", "GET", data);
};

export const createAccount = async (userId, password) => {
    const data = {
        userId: userId,
        password: password
    }
    return await request("/create-account", "POST", data);
};

export const createIssue = async (data) => {
    return await request("/create-issue", "POST", data);
}

export const editIssueState = async (userId, title, state) => {
    const data = {
        userId: userId,
        title: title,
        state: state
    }
    return await request("/edit-issue-state", "PUT", data);
}

export const deleteIssue = async (userId, title) => {
    const data = {
        userId: userId,
        title: title
    }
    return await request("/delete-issue", "DELETE", data);
}

export const getIssuesList = async (userId) => {
    const data = {
        userId: userId
    }
    return await request("/issues-list", "GET", data);
}
