import React from 'react'
import AirbnbSVG from './SVG/AirbnbSVG'
import GoogleSVG from './SVG/GoogleSVG'
import MicrosoftSVG from './SVG/MicrosoftSVG'
import SpotifySVG from './SVG/SpotifySVG'
import MailchimpSVG from './SVG/MailchimpSVG'
import MashableSVG from './SVG/MashableSVG'
import Company from './Company'

const companies = [
    { Component: AirbnbSVG },
    { Component: GoogleSVG },
    { Component: MicrosoftSVG },
    { Component: SpotifySVG },
    { Component: MailchimpSVG },
    { Component: MashableSVG },
]

const Companies = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                <div
                    class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <Company companies={companies}></Company>
                </div>
            </div>
        </section>
    )
}

export default Companies