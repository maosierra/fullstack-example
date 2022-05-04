import axios from "axios";

const API_URL = "http://localhost:3001/api/task";
const token = localStorage.getItem("user");

const getAllTasks = () => {
    return axios.get(API_URL, {
        headers: {
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    });
}

const createTask = (description) => {
    return axios.post(API_URL, {
        headers: {
            "Authorization": "Bearer " + token.replaceAll('"', '')
        }
    }, { description })
}

const taskServices = {
    getAllTasks,
    createTask
}

export default taskServices;