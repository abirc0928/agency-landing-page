import React from 'react'

const FooterList = ({item}) => {
    return (
        <li className="mb-4">
            <a href="#" className=" hover:underline">{item}</a>
        </li>
    )
}

export default FooterList