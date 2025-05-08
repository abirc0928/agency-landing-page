import React from 'react'
import FooterList from './FooterList'

const FooterCategory = ({ titel, list }) => {
    console.log(list)
    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{titel}</h3>
            <ul className="text-gray-500 dark:text-gray-400">
                {
                    list.map((item) => <FooterList item={item}></FooterList>)
                }
            </ul>
        </div>
    )
}

export default FooterCategory