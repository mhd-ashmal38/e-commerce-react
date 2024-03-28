import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

function View() {

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

                        <div class="overflow-x-auto pb-8">
                            <table class="min-w-full bg-white font-[sans-serif]">
                                <thead class="bg-gray-100 whitespace-nowrap">
                                    <tr>
                                        <th class="px-6 py-5 text-left text-sm font-semibold text-black">
                                            Product
                                        </th>
                                        <th class="px-6 py-5 text-left text-sm font-semibold text-black">
                                            Price
                                        </th>
                                        <th class="px-6 py-5 text-left text-sm font-semibold text-black">
                                            In stock
                                        </th>
                                        <th class="px-6 py-5 text-left text-sm font-semibold text-black">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="whitespace-nowrap divide-y divide-gray-200">
                                <tr>
                                        <td class="px-6 py-3 text-sm">
                                            <div class="flex items-center cursor-pointer">
                                                <img src='https://readymadeui.com/product_img_1.webp' class="w-10 h-10 p-1.5 shrink-0 bg-gray-100" />
                                                <div class="ml-4">
                                                    <p class="text-sm text-black">Light Gray T-Shirt</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-sm">
                                            $25.00
                                        </td>
                                        <td class="px-6 py-3">
                                            90
                                        </td>
                                        <td class="px-6 py-3">
                                            <button class="mr-4" title="Edit">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                                                    viewBox="0 0 348.882 348.882">
                                                    <path
                                                        d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                                        data-original="#000000" />
                                                    <path
                                                        d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                            <button class="mr-4" title="Delete">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                                    <path
                                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                        data-original="#000000" />
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px-6 py-3 text-sm">
                                            <div class="flex items-center cursor-pointer">
                                                <img src='https://readymadeui.com/product_img_1.webp' class="w-10 h-10 p-1.5 shrink-0 bg-gray-100" />
                                                <div class="ml-4">
                                                    <p class="text-sm text-black">Light Gray T-Shirt</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-sm">
                                            $25.00
                                        </td>
                                        <td class="px-6 py-3">
                                            90
                                        </td>
                                        <td class="px-6 py-3">
                                            <button class="mr-4" title="Edit">
                                                <Link to={'/admin/edit/:id'}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                                                        viewBox="0 0 348.882 348.882">
                                                        <path
                                                            d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                                            data-original="#000000" />
                                                        <path
                                                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                                            data-original="#000000" />
                                                    </svg>
                                                </Link>
                                            </button>
                                            <button class="mr-4" title="Delete">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                                    <path
                                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                        data-original="#000000" />
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px-6 py-3 text-sm">
                                            <div class="flex items-center cursor-pointer">
                                                <img src='https://readymadeui.com/product_img_1.webp' class="w-10 h-10 p-1.5 shrink-0 bg-gray-100" />
                                                <div class="ml-4">
                                                    <p class="text-sm text-black">Light Gray T-Shirt</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-sm">
                                            $25.00
                                        </td>
                                        <td class="px-6 py-3">
                                            90
                                        </td>
                                        <td class="px-6 py-3">
                                            <button class="mr-4" title="Edit">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                                                    viewBox="0 0 348.882 348.882">
                                                    <path
                                                        d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                                        data-original="#000000" />
                                                    <path
                                                        d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                            <button class="mr-4" title="Delete">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                                    <path
                                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                        data-original="#000000" />
                                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                            <div class="md:flex mt-4 pt-4 px-6 border-t border-gray-100">
                                <p class="text-sm text-gray-400 flex-1">Showind 1 to 5 of 100 entries</p>
                                <div class="flex items-center max-md:mt-4">
                                    <ul class="flex space-x-1 ml-2">
                                        <li class="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
                                                <path
                                                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                                    data-original="#000000" />
                                            </svg>
                                        </li>
                                        <li class="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                            1
                                        </li>
                                        <li class="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                                            2
                                        </li>
                                        <li class="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                            3
                                        </li>
                                        <li class="flex items-center justify-center cursor-pointer text-sm w-7 h-7 rounded">
                                            4
                                        </li>
                                        <li class="flex items-center justify-center cursor-pointer bg-gray-300 w-7 h-7 rounded">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
                                                <path
                                                    d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                                    data-original="#000000" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default View