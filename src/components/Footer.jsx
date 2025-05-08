import React from 'react'

import InstragramSVG from './SVG/InstragramSVG'
import FacebookSVG from './SVG/FacebookSVG'
import TwiterSVG from './SVG/TwiterSVG'
import GitHub2SVG from './SVG/GitHub2SVG'
import EarthSVG from './SVG/EarthSVG'
import FooterList from './FooterList'
import FooterCategory from './FooterCategory'

import FooterIconItem from './FooterIconItem'

const company = ['About', 'Careers', 'Brand Center', 'Blog',]
const help_center = ['Discord Server', 'Twitter', 'Facebook', 'Contact Us']
const legal = ['Privacy Policy', 'Licensing', 'Terms']
const download = ['iOS', 'Android', 'Windows', 'MacOS']

const icon = [
    { Component: FacebookSVG },
    { Component: InstragramSVG },
    { Component: TwiterSVG },
    { Component: GitHub2SVG },
    { Component: EarthSVG },
]


const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">

                {/* <!-- Sub Footer 1 --> */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    <FooterCategory titel='Company' list={company} ></FooterCategory>
                    <FooterCategory titel='Help center' list={help_center} ></FooterCategory>
                    <FooterCategory titel='Legal' list={legal} ></FooterCategory>
                    <FooterCategory titel='Company' list={company} ></FooterCategory>
                    <FooterCategory titel='Download' list={download} ></FooterCategory>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                {/* <!-- Sub Footer 2 -->  */}
                <div className="text-center">
                    <a href="#"
                        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img src="logo.svg" className="h-6 mr-3 sm:h-9" alt="Learn with Sumit Logo" />Learn with Sumit </a>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Learn with Sumit. All Rights Reserved. Built with <a href="#" target="_blank"
                        className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="#"
                            className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                    </span>
                    <ul class="flex justify-center mt-5 space-x-5">
                        <FooterIconItem item={icon}></FooterIconItem>
                    </ul>

                    
                </div>
            </div>
        </footer>
    )
}

export default Footer