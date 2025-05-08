import React from 'react'

const NavItem = ({ items }) => {
    return (
        <div>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {
                    items.map((item, index) => (
                        <li key={index}>
                            <a href="#"
                                className={item.className}
                                aria-current="page">{item.item}</a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default NavItem