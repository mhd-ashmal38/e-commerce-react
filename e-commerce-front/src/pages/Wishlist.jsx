import React from 'react'

function Wishlist() {
    return (
        <div>

            <div className="relative overflow-x-auto  p-2 py-10 md:p-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="md:px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="ps-16 md:px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="pe-5 md:px-6 py-4  dark:text-white flex items-center gap-x-4">
                                <img className="flex-shrink-0 size-[50px] rounded-lg" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5aedb4298c0b4049ba0bc028050bd9b9_9366/Samba_OG_Shoes_Black_IE8128_01_standard.jpg" alt="Image Description" />
                                <div>
                                    <span className="font-semibold text-gray-900">SAMBA OG SHOES</span>
                                </div>
                            </td>
                            <td className="ps-16 md:px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $999
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                <a className="text-green-400">In Stock</a>
                            </td>
                            <td className="md:px-6 py-4">
                                <a href="#"
                                    className=" w-full text-black bg-white border-2 border-black hover:bg-black hover:text-white font-medium  text-sm px-1 md:px-3 py-2 text-center transition">Add
                                    to cart</a>
                            </td>
                            <td className="px-6 py-4">
                            <button className="text-gray-600 transition hover:text-red-600">
                                            <span className="sr-only">Remove item</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-6 w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Wishlist