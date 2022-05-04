import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth-services";

function Login() {
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await authService.login(email.current.value, password.current.value)
        navigate("/task");
        window.location.reload();
    }

    return (
        <div className="container">
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <input
                    ref={email}
                    type="text"
                    placeholder="email"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="password"
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default Login;