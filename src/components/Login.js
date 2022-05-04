import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./auth";

const Login = () => {
    const [user, setUser] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(user);
        navigate('/');
    };

    return (
        <div className="p-3 h-screen">
            <div className="font-bold flex justify-center h-1/3
            items-center text-3xl">
                <h1>접속하기 위해서 로그인을 해주세요</h1>
            </div>
            <div className="bg-green-300 bg-opacity-25">
                <div className="p-1 flex justify-center">
                    <input id="id" name="id" placeholder="Type ID"
                           onChange={(e) => setUser(e.target.value)}
                           className="border-2 border-gray-10 w-1/3"/>
                </div>
                <div className="p-1 flex justify-center">
                    <button className="bg-blue-400 hover:bg-blue-700
                    rounded w-1/3 py-1.3 text-white font-bold"
                            onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;