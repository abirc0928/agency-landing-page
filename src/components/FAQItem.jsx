import React from 'react'
import UpArrowSVG from './SVG/UpArrowSVG'

const FAQItem = ({ title, description1, description2, description3, description4, description5, icon, className, titleClass, descriptionList }) => {
    return (
        <div>
            <h3 id="accordion-flush-heading-1">
                <button type="button"
                    className={titleClass}
                    data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                    aria-controls="accordion-flush-body-1">
                    <span>{title}</span>
                    {icon}
                </button>
            </h3>
            <div id="accordion-flush-body-1" className={className} aria-labelledby="accordion-flush-heading-1">
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{description1} </p>
                    <p className="text-gray-500 dark:text-gray-400">{description2} <a href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline">{description3} </a> {description4}</p>
                    {descriptionList ? <><p className="mb-2 text-gray-500 dark:text-gray-400">{description5}</p>
                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            {
                                descriptionList.map((item) => (
                                    <li><a href="#" className="text-purple-600 dark:text-purple-500 hover:underline">{item.name}</a></li>
                                ))
                            }
                        </ul></> : ''}
                </div>
            </div>
        </div>
    )
}

export default FAQItem