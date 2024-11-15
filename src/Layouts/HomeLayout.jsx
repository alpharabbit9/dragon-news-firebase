import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div  className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto py-3'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto grid md:grid-cols-12'>
                <aside className='left-aside col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <div className="main-section col-span-6">
                    <Outlet></Outlet>
                </div>
                <aside className='right-aside col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;