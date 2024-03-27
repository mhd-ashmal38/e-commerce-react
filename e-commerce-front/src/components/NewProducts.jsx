import React from 'react'
import { Link } from 'react-router-dom'

function NewProducts() {
    
    return (
        <div>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Arrivals</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <Link to={'/view/:id'} className="group block overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </Link>
                                <div className="relative bg-white pt-3">

                                    <div className='flex justify-between pb-2'>

                                    <span className="tracking-wider text-gray-900"> £24.00 GBP </span>

                                        <a href=""><i className="fa-regular fa-heart fa-lg"></i></a>

                                    </div>

                                    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 pb-2">
                                        Basic Tee
                                    </h3>
                                    <div>
                                        <a href="#"
                                            className="block w-full text-black bg-white border-2 border-black hover:bg-black hover:text-white  focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center transition">Add
                                            to cart</a>
                                    </div>
                                </div>
                            
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Basic Tee
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Basic Tee
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                        Basic Tee
                                    </h3>

                                    <p className="mt-2">
                                        <span className="sr-only"> Regular Price </span>

                                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default NewProducts