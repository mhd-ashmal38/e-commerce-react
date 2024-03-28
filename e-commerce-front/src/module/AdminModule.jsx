import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import Add from './Add';

function AdminModule() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="md:hidden border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="text-teal-600">
                        <span className="sr-only">Home</span>
                        <img src="https://imgs.search.brave.com/L3-jgy2iF-b5O3Z69jkR9cRevYpMjosIEYZNSzy9yZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmFtb3Vz/LXN0YXJzLXN0cmFw/cy1sb2dvLTVFNTcz/NEYxNzQtc2Vla2xv/Z28uY29tLnBuZw" alt="" className='sm:size-12 size-10' />
                    </Link>
                    <button onClick={toggleSidebar} type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>

            <div className="flex">
                {/* Sidebar */}
                <div className={`max-md:relative h-svh ${!sidebarOpen ? 'md:translate-x-0' : 'md:-translate-x-full'}`}>
                    <Sidebar aria-label="Sidebar with logo branding example" className={`h-screen ${sidebarOpen ? 'transform translate-x-0 transition-transform' : 'transform -translate-x-full transition-transform'} md:translate-x-0 md:static md:block`}>
                        {/* Sidebar content */}
                        <div className='hidden md:block py-4'>
                            <Link to={'/'} className="inline-flex gap-4" href="#">
                                <img src="https://imgs.search.brave.com/L3-jgy2iF-b5O3Z69jkR9cRevYpMjosIEYZNSzy9yZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmFtb3Vz/LXN0YXJzLXN0cmFw/cy1sb2dvLTVFNTcz/NEYxNzQtc2Vla2xv/Z28uY29tLnBuZw" alt="" className='s size-12' />
                                <span className="text-lg font-semibold pt-2">Stars & Straps</span>
                            </Link>
                        </div>
                        {/* Sidebar items */}
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item href="#" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    <Link to={'/admin/view'}>Products</Link>
                                </Sidebar.Item>
                                <Sidebar.Item icon={HiViewBoards}>
                                    <Link to={'/admin/add'}>Add Product</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                {/* Content */}
                <div className={`max-md:absolute max-md:left-0 w-full max-md:h-full ${sidebarOpen ? 'hidden md:block' : 'md:block'}`}>

                </div>
            </div>
        </div>
    )
}

export default AdminModule;
