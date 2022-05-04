import axios from "axios";

const API_URL = "http://localhost:3001/api/user";

const login = async (email, password) => {
    try {
        const token = await axios.post(API_URL + '/login', {
            email,
            password
        });
        if (token.data) {
            localStorage.setItem('user', JSON.stringify(token.data));
        }
    } catch (error) {
        console.error(error);
    }
}

const getCurrentUser = () => {
    return localStorage.getItem('user');
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    login,
    getCurrentUser,
    logout
}

export default authService;