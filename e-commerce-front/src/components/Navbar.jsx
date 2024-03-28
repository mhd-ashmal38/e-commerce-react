import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


    return (
        <div>


            <header className="bg-white">
                <div className="mx-auto max-w-screen-xl py-2 px-4 sm:px-6 lg:px-6">
                    <div className="flex h-14 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <Link to={'/'} className="block text-teal-600" href="#">
                                <span className="sr-only">Home</span>
                                <img src="https://imgs.search.brave.com/L3-jgy2iF-b5O3Z69jkR9cRevYpMjosIEYZNSzy9yZE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmFtb3Vz/LXN0YXJzLXN0cmFw/cy1sb2dvLTVFNTcz/NEYxNzQtc2Vla2xv/Z28uY29tLnBuZw" alt="" className='sm:size-12 size-10' />
                            </Link>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a className="text-black font-bold transition hover:text-gray-700/75" href="#"> MEN </a>
                                    </li>

                                    <li>
                                        <a className="text-black font-bold transition hover:text-gray-700/75" href="#"> WOMEN </a>
                                    </li>

                                    <li>
                                        <a className="text-black font-normal transition hover:text-gray-700/75" href="#"> SALE </a>
                                    </li>

                                    <li>
                                        <a className="text-black font-normal transition hover:text-gray-700/75" href="#"> ABOUT </a>
                                    </li>

                                    <li>
                                        <a className="text-black font-normal transition hover:text-gray-700/75" href="#"> CONTACT </a>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                        <div className="flex gap-4">

                            <Link to={'/wishlist'} type="button"
                                className="relative inline-flex items-center p-1 text-sm font-medium text-center">
                                <i className="fa-regular fa-heart fa-xl"></i>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full sm:-top-5 sm:-end-2 -top-2 -end-2 dark:border-gray-900">
                                    2</div>
                            </Link>
                            <Link to={'/cart'} type="button"
                                className="relative inline-flex items-center p-1 text-sm font-medium text-center">
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                                <div
                                    className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full sm:-top-5 sm:-end-2 -top-2 -end-2 dark:border-gray-900">
                                    2</div>
                            </Link>
                            <Link to={'/admin-login'} type="button"
                                className="relative inline-flex items-center p-1 text-sm font-medium text-center">
                                <i className="fa-regular fa-user fa-xl"></i>
                            </Link>
                            

                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar