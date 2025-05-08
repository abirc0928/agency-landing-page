import React from 'react'
import TickSVG from './SVG/TickSVG'
import ServiceItem from './ServiceItem'

const ServiceDescription = ({ title, description, servies, conclution }) => {
    console.log(servies)
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{title}</h2>
            <p className="mb-8 font-light lg:text-xl">
                {description}
            </p>

            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                {
                    servies.map((item, index) => (
                      
                        <ServiceItem service={item} key={index}></ServiceItem>
                    ))
                }
            </ul>

            <p className="mb-8 font-light lg:text-xl">{conclution}</p>
        </div>
    )
}

export default ServiceDescription