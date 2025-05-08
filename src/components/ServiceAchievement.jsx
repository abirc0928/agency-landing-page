import React from 'react'

const ServiceAchievement = ({ item }) => {
    return (
        <div>
            <item.svg></item.svg>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">{item.title}</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">{item.description}</p>
        </div>
    )
}

export default ServiceAchievement