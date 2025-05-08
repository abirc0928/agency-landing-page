import React from 'react'
import NavItem from './NavItem'
import Button from './Button'

const navItem = [
    {
        item: 'Home',
        className: 'nav-item-home'
    },
    {
        item: 'Company',
        className: 'nav-item'
    },
    {
        item: 'Marketplace',
        className: 'nav-item'
    },
    {
        item: 'Features',
        className: 'nav-item'
    },
    {
        item: 'Team',
        className: 'nav-item'
    },
    {
        item: 'Contact',
        className: 'nav-item'
    }
]

const Navbar = () => {
    return (

        <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
            <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
                <a href="#" className="flex items-center">
                    <img src="logo.svg" className="h-6 mr-3 sm:h-9"
                        alt="Landwind Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Learn with
                        Sumit</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <Button name='Download' className='btn-download' ></ Button>
                </div>

                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <NavItem items={navItem}></NavItem>
                </div>

            </div>
        </nav>
    )
}

export default Navbar