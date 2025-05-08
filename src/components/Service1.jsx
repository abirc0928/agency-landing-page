import React from 'react'
import ServiceDescription from './ServiceDescription'

const sericeName1 = [
    'Continuous integration and deployment',
    'Development workflow',
    'Knowledge management'
]

const sericeName2 = [
    'Dynamic reports and dashboards',
    'Templates for everyone',
    'Development workflow',
    'Limitless business automation',
    'Knowledge management',

]

const Service1 = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                {/* <!-- Sub Service 1 --> */}
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <ServiceDescription
                            title="Work with tools you already use"
                            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
                            servies={sericeName1}
                            conclution='Deliver great service experiences fast - without the complexity of traditional ITSM solutions.'
                        >
                        </ServiceDescription>
                    </div>
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="features/feature-1.png" alt="dashboard feature image" />
                </div>

                {/* <!-- Sub Service 2 --> */}
                <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                    <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="features/feature-2.png" alt="feature image 2" />
                    <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                        <ServiceDescription
                            title="We invest in the world’s potential"
                            description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
                            servies={sericeName2}
                            conclution='Deliver great service experiences fast - without the complexity of traditional ITSM solutions.'
                        >
                        </ServiceDescription>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Service1