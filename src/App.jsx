import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './components/Login';
import {Home} from './components/Home';
import {Register} from './components/Register';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userId = useRef(null);
    const password = useRef(null);

    return (
        <div className='App'>
            < BrowserRouter >
                <Routes>
                    <Route path="/login" element={
                        <Login
                            userId={userId}
                            password={password}
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                        />
                    } />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={
                        isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <Navigate replace to="/login" />
                    } />
                </Routes>
            </BrowserRouter >
        </div >
    );
}

export default App;
