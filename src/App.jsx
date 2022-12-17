import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './components/Login';
import {Home} from './components/Home';
import {Register} from './components/Register';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='App'>
            < BrowserRouter >
                <Routes>
                    <Route path="/login" element={
                        <Login
                            setUserId={setUserId}
                            setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    } />
                    <Route path="/register" element={
                        <Register
                            setUserId={setUserId}
                            setPassword={setPassword}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    } />
                    <Route path="/" element={
                        isLoggedIn ? <Home
                            isLoggedIn={isLoggedIn}
                            userId={userId}
                            password={password}
                        /> : <Navigate replace to="/login" />
                    } />
                </Routes>
            </BrowserRouter >
        </div >
    );
}

export default App;
