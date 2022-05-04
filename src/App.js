import React, {useState} from "react";
import {Link, Route, Routes, BrowserRouter as Router} from "react-router-dom";

import {AuthProvider} from "./components/auth";

import Board from './board/Board';
import {fetch_login} from "./fetch_login";
import LogoutButton from "./LogoutButton";
import Login from "./components/Login"
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";

export const App = () => {
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({id, pwd}) => setUser(fetch_login(id, pwd));
    const logout = () => setUser(null);

    return(
        <AuthProvider>
            <Router>
                <header>
                    <Link to="/Board">
                        <button>Board</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                    <Link to="/profile">
                        <button>profile</button>
                    </Link>
                </header>
                <hr/>
                <main>
                    <Routes>
                        <Route path="/profile" element={
                            <RequireAuth>
                                <Profile/>
                            </RequireAuth>
                        }/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/Board" element={<Board/>}/>
                    </Routes>
                </main>
            </Router>
        </AuthProvider>
    )
}