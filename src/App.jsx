import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login.jsx";
import Cliker from "./pages/Cliker.jsx";
import Register from "./pages/Register.jsx";

function App() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/clicker" element={<Cliker />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        )
}

export default App;