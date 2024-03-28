import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

function Add() {

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
                    <div className='w-full max-w-screen-xl py-16 px-4  md:px-20 content'>
                        <h1 className='text-center pb-6 text-3xl font-bold'>Add New Product</h1>
                        <form action="#">
                            {/* Form fields */}
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="w-full">
                                    <label for="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Id</label>
                                    <input type="text" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product id" required="" />
                                </div>
                                <div className="w-full">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product name" required="" />
                                </div>

                                <div className="w-full">
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>

                                <div>
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="TV">Mens</option>
                                        <option value="PC">Womens</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <select id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select type</option>
                                        <option value="TV"></option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock Status</label>
                                    <select id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select stock</option>
                                        <option value="TV">In Stock</option>
                                        <option value="PC">Stock Out</option>
                                    </select>
                                </div>

                                <div className="w-full">
                                    <label for="image1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="text" name="image1" id="image1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product image url" required="" />
                                </div>

                                <div className="w-full">
                                    <label for="image2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="text" name="image2" id="image2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product image url" required="" />
                                </div>

                                <div className="w-full">
                                    <label for="image3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="text" name="image3" id="image3" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product image url" required="" />
                                </div>

                                <div className="w-full">
                                    <label for="image4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="text" name="image4" id="image4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product image url" required="" />
                                </div>

                                <div className="sm:col-span-2">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                                </div>

                            </div>
                            {/* Your form fields here */}

                        </form>
                        <div className=' pt-4 flex  justify-end'>
                            <a
                                className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                href="#"
                            >
                                Add Product
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

  )
}

export default Add