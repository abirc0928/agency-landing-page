import React from 'react'
import TickSVG from './SVG/TickSVG'

const ServiceItem = ({service}) => {
    return (
        <li className="flex space-x-3">
            <TickSVG></TickSVG>
            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">{service}</span>
        </li>
    )
}

export default ServiceItem