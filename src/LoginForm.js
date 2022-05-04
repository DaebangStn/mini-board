import React, {useState} from "react";
import {Navigate} from "react-router-dom";

const LoginForm = ({authenticated, login, location}) => {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const handleClick = () => {
        try{
            login({id, pwd});
        }catch (e){
            alert("Failed to Login");
            setId("");
            setPwd("");
        }
    };

    const {from} = location.state || {from: {pathname:"/"}};
    if(authenticated) return  <Navigate to={from}/>;

    return (
        <div className="p-3 h-screen">
            <div className="font-bold flex justify-center h-1/3
            items-center text-3xl">
                <h1>접속하기 위해서 로그인을 해주세요</h1>
            </div>
            <div className="bg-green-300 bg-opacity-25">
                <div className="p-1 flex justify-center">
                    <input id="id" name="id" placeholder="Type ID"
                           value={id} onChange={({target: {value}}) => setId(value)}
                           className="border-2 border-gray-10 w-1/3"/>
                </div>
                <div className="p-1 flex justify-center">
                    <input id="pwd" name="pwd" type="password"
                           value={pwd} onChange={({target: {value}}) => setPwd(value)}
                           className="border-2 border-gray-10 w-1/3"
                           placeholder="Type password"/>
                </div>
                <div className="p-1 flex justify-center">
                    <button className="bg-blue-400 hover:bg-blue-700
                    rounded w-1/3 py-1.3 text-white font-bold"
                            onClick={handleClick}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;