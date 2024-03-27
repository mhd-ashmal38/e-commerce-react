import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ProductView() {

    const [mainImage, setMainImage] = useState('https://readymadeui.com/images/product2.webp');
    const [selectedSize, setSelectedSize] = useState('');

    const handleImageClick = (newImage) => {
        setMainImage(newImage);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <div>

            <nav aria-label="Breadcrumb" className='p-2 lg:max-w-6xl max-w-2xl mx-auto'>
                <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <Link to={'/'} className="block transition hover:text-gray-700">
                            <span className="sr-only"> Home </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </Link>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> Plain Tee </a>
                    </li>
                </ol>
            </nav>

            <div className="font-[sans-serif]">
                <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="w-full lg:sticky top-0 sm:flex gap-2">
                            <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                                {/* Side Images */}
                                <img
                                    onClick={() => handleImageClick('https://readymadeui.com/images/product1.webp')}
                                    src="https://readymadeui.com/images/product1.webp"
                                    alt="Product1"
                                    className="w-full cursor-pointer"
                                />
                                <img
                                    onClick={() => handleImageClick('https://readymadeui.com/images/product6.webp')}
                                    src="https://readymadeui.com/images/product6.webp"
                                    alt="Product2"
                                    className="w-full cursor-pointer"
                                />
                                <img
                                    onClick={() => handleImageClick('https://readymadeui.com/images/product7.webp')}
                                    src="https://readymadeui.com/images/product7.webp"
                                    alt="Product3"
                                    className="w-full cursor-pointer"
                                />
                                <img
                                    onClick={() => handleImageClick('https://readymadeui.com/images/product3.webp')}
                                    src="https://readymadeui.com/images/product3.webp"
                                    alt="Product4"
                                    className="w-full cursor-pointer"
                                />
                            </div>
                            <img src={mainImage} alt="Product" className="w-4/5 rounded object-cover" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-800">Adjective Attire | T-shirt</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <p className="text-gray-800 text-xl font-bold">$12</p>
                                <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-400 font-bold text-sm rounded-full flex items-center justify-center shrink-0" onClick={() => handleSizeSelect('S')}
                                        style={{ outline: selectedSize === 'S' ? '2px solid black' : 'none' }}>S</button>
                                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-400 font-bold text-sm rounded-full flex items-center justify-center shrink-0" onClick={() => handleSizeSelect('M')}
                                        style={{ outline: selectedSize === 'M' ? '2px solid black' : 'none' }}>M</button>
                                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-400 font-bold text-sm rounded-full flex items-center justify-center shrink-0" onClick={() => handleSizeSelect('L')}
                                        style={{ outline: selectedSize === 'L' ? '2px solid black' : 'none' }}>L</button>
                                    <button type="button" className="w-12 h-12 border-2 hover:border-gray-400 font-bold text-sm rounded-full flex items-center justify-center shrink-0" onClick={() => handleSizeSelect('XL')}
                                        style={{ outline: selectedSize === 'XL' ? '2px solid black' : 'none' }}>XL</button>
                                </div>
                                <div className="flex gap-6 mt-5">
                                    <button type="button"
                                        className="inline-flex justify-center gap-3 w-2/3 items-center text-white bg-black focus:outline-none hover:text-gray-500 focus:ring-4 focus:ring-gray-200 font-medium  text-sm px-4 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">ADD TO CART
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                    <a href=""><i className="fa-regular fa-heart fa-xl"></i></a>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-gray-800">About the item</h3>
                                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                    <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                                    <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                                    <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                                    <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductView