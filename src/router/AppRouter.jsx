
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Views
import { Home } from '../posts/pages/Home';
import { Login } from '../auth/pages/Login';
import { Lifestyle } from '../posts/pages/Lifestyle';
import { Travel } from '../posts/pages/Travel';
import {Business} from "../posts/pages/Business";
import {Food} from "../posts/pages/Food";
import {Work} from "../posts/pages/Work";
// import { CustomNavabar } from '../UI/components/CustomNavabar';
import { PostView } from '../posts/pages/PostView';
import { Footer } from '../UI/components/Footer';


export const AppRouter = () => {
    return (
        <>

            <Routes>
                {/* <CustomNavabar /> */}
                <Route path="/" element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path="lifestyle" element={<Lifestyle />} />
                <Route path='travel' element={<Travel />} />
                <Route path='business' element={<Business />} />
                <Route path='food' element={<Food />} />
                <Route path='work' element={<Work />} />
                <Route path="post/:id" element={<PostView />} />
            </Routes>
            <Footer/>
        </>
    )
}



