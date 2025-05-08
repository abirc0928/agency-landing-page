import React from 'react'

const FooterIconItem = ({ item }) => {
    console.log(item)
    return (

        <>
            {
                item.map(({ Component }, index) => (
                    <li>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <Component></Component>
                        </a>
                    </li>
                ))
            }
        </>

    )
}

export default FooterIconItem