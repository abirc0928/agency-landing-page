import React from 'react'
import UpArrowSVG from './SVG/UpArrowSVG'
import DownArrowSVG from './SVG/DownArrowSVG'
import FAQItem from './FAQItem'

const descriptionList1 = [
    { name: 'Landwind Pro' },
    { name: 'Tailwind UI' },
]

const FAQ = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                <h2
                    className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
                    Frequently asked questions</h2>
                <div className="max-w-screen-md mx-auto">
                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400">

                        <FAQItem
                            title='Can I use Landwind in open-source projects?'
                            description1='Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
                            description2='Check out this guide to learn how to'
                            description3='get started'
                            description4='and start developing websites even faster with components on top of Tailwind CSS.'
                            descriptionList=''
                            icon={<UpArrowSVG></UpArrowSVG>}
                            className=''
                            titleClass='fqa-active-title'
                        >

                        </FAQItem>

                        <FAQItem
                            title='Is there a Figma file available?'
                            description1='Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.'
                            description3='Check out the'
                            description2='Check out this guide to learn how to'
                            description4='Figma design system'
                            descriptionList=''
                            icon={<DownArrowSVG></DownArrowSVG>}
                            className='hidden'
                            titleClass='fqa-inactive-title'
                        >

                        </FAQItem>

                        <FAQItem
                            title='What are the differences between Landwind and Tailwind UI?'
                            description1='The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. '
                            description2='However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.'
                            description3=''
                            description4=''
                            description5='Learn more about these technologies:'
                            descriptionList={descriptionList1}
                            icon={<DownArrowSVG></DownArrowSVG>}
                            className='hidden'
                            titleClass='fqa-inactive-title'
                        >

                        </FAQItem>


                        <FAQItem
                            title='What about browser support?'
                            description1='The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.'
                            description2='However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.'
                            description3=''
                            description4=''
                            description5='Learn more about these technologies:'
                            descriptionList={descriptionList1}
                            icon={<DownArrowSVG></DownArrowSVG>}
                            className='hidden'
                            titleClass='fqa-inactive-title'
                        >

                        </FAQItem>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ