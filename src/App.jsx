import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {List} from './components/List';
import {Create} from './components/Create';
import {Edit} from './components/Edit';
import {Delete} from './components/Delete';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/login" element={
                        <Login
                            setUserId={setUserId}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    } />
                    <Route path="/register" element={
                        <Register
                            setUserId={setUserId}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    } />
                    <Route path="/home" element={<Navigate to="/home/list" />} />
                    <Route path="/home/list" element={<List
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        userId={userId}
                    />} />
                    <Route path="/home/create" element={<Create
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        userId={userId}
                    />} />
                    <Route path="/home/edit" element={<Edit
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        userId={userId}
                    />} />
                    <Route path="/home/delete" element={<Delete
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        userId={userId}
                    />} />
                </Routes>
            </BrowserRouter>
        </div >
    );
}

export default App;
