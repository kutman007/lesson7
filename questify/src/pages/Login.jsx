// Login.jsx
import { Button, Card, Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/userSlice";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login({ username, password }));
        navigate("/quests");
    };

    return (
        <div>
            <Card title="Login">
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input.Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Login</Button>
            </Card>
        </div>
    );
};

export default Login;
