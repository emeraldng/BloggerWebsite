
import React from 'react';
import {Routes, Route } from "react-router-dom";

// Views
import { Home } from '../posts/pages/Home';
import { Login } from '../auth/pages/Login';
import { Lifestyle } from '../posts/pages/Lifestyle';
import { Travel } from '../posts/pages/Travel';
import { CustomNavabar } from '../UI/components/CustomNavabar';
import { PostView } from '../posts/pages/PostView';


export const AppRouter = () => {
    return (
        <>
            <CustomNavabar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='login' element={<Login/>} />
                <Route path="lifestyle" element={<Lifestyle />} />
                <Route path='travel' element={<Travel/>} />
                <Route path="post/:id" element={<PostView />}/>
            </Routes>
        </>
    )
}



