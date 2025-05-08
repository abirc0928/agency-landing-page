import React from 'react'

const Company = ({ companies }) => {
    return (
        <>
            {companies.map(({ Component }, index) => (
                <a key={index} href="#" className="flex items-center lg:justify-center">
                    <Component />
                </a>
            ))}
        </>
    )
}


export default Company