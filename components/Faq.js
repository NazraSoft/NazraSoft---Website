import React from 'react'

const Faq = () => {
  return (
    <div>
      <div className="py-20 dark:bg-gray-600">
        <h1 className="text-4xl font-extrabold text-center text-gray-700 dark:text-gray-50">Frequently Asked Questions</h1>

        <div className="grid grid-cols-1 gap-10 mx-4 mt-20 md:grid-cols-2 md:mx-40">
          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">What advantages of outsourcing your project to our team you get?</h2>
            <p className="mt-4 text-sm font-light leading-6"><li>More time to stay focused on the development of your business  </li>
              <li>High Professional Development Team</li>
              <li>The product-oriented approach</li>
              <li>Cost Savvy Solution </li>
              <li>Control Over Your IT Costs</li>
            </p>
          </div>
          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">What are the main industries we serve?</h2>
            <p className="mt-4 text-sm font-light leading-6">To provide the best services in the market we mainly focus our software development outsourcing services on product development for several primary industries:
              <li>E-commerce Development Solutions</li>
              <li>Healthcare Application Development</li>
              <li>Software Development For Real Estate </li>
              Besides, we have a lot of successful projects in other industries like entertainment, financial, hospitality, media, education and other.
            </p>
          </div>
          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">What are the software outsourcing services we provide?</h2>
            <p className="mt-4 text-sm font-light leading-6">
              We propose the next set of  software and design development services separately or within the full project development life cycle:
              <li>Branding and UI/UX Design</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>QA Services</li>
              <li>Blockchain</li>
              <li>DevOps</li>
              <li>Project Management</li>
              <li>Product Management</li>
            </p>
          </div>
          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">What technologies do we use in software development?</h2>
            <div className="mt-4 text-sm font-light leading-6">Our team includes only high-experienced professionals who have experience in different software development fields:
              For web and mobile application development:
              <div className='md:flex flex-row'>

              <li className='mx-2'>HTML5, CSS3</li>
              <li className='mx-2'>JavaScript</li>
              </div>
              <div className='md:flex flex-row'>

              <li className='mx-2'>React JS</li>
              <li className='mx-2'>Next Js</li>
              </div>
              <div className='md:flex flex-row'>

              <li className='mx-2'>Node Js</li>
              <li className='mx-2'>Bootstrap</li>
              </div>
              <div className='md:flex flex-row'>

              <li className='mx-2'>Web API Services</li>
              <li className='mx-2'>Java</li>
              </div>
              <div className='md:flex flex-row'>

              <li className='mx-2'>Kotlin</li>
              <li className='mx-2'>React Native</li>
              </div>
              Thus, if you’d like to implement some recent technologies into your project and make it look updated, outsourcing to our specialists experienced in that niche will be the best option.
            </div>
          </div>

          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">How long does it take to start my product development?</h2>
            <p className="mt-4 text-sm font-light leading-6">To start with, we review project requirements from the client, we get them analyzed and then inform you of the estimation results.
              Once you are fine with the cost and time, the next step would be to create a project report document and a proposal. Our business analyst will prepare this and then we send you the same for review. Once everything has been finalized we would then take the project to the next stage, which is the development stage.
            </p>
          </div>

          <div className="p-4 text-gray-800 bg-gray-100 rounded-md dark:text-gray-50 dark:bg-gray-700">
            <h2 className="font-semibold text-md">How do we assure privacy and confidentiality?</h2>
            <p className="mt-4 text-sm font-light leading-6">We sign NDAs and Confidentiality Agreements as required by you. All our employees are full-time employees and are bound by company Confidentiality and Non-Disclosure clauses.
              Additionally, for sensitive projects, we can sign custom NDAs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Faq