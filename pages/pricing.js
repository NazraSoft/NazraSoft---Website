import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const plans = () => {
  return (
    <div><Head>
    <title>Pricing - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
  <div className="pt-16">
            <div className="w-full  py-12">
                <div className="container mx-auto">
                    <div className="w-4/5 mx-auto mb-12">
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white mb-4 font-extrabold">Simple &amp; Transparent Pricing</h1>
                        <p className="text-xl text-center text-gray-600 dark:text-white font-normal">Focus on your business goals and we take care of the rest. From ready-made components to perfect templates to highly customizable design. All you need to do is choose your plan according to your next project.</p>
                        {/* <div className="flex justify-center mt-8 items-center" role="button">
                            <p className="mr-2 text-lg font-bold text-gray-600 dark:text-white">Bill Monthly</p>
                            <div className="cursor-pointer w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm">
                                <input type="checkbox" name="toggle" id="toggle2" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white dark:bg-black absolute m-1 shadow-sm appearance-none cursor-pointer" />
                                <label htmlFor="toggle2" className="toggle-label  block w-12 h-6 overflow-hidden rounded-full cursor-pointer" />
                            </div>
                            <p className="ml-2 text-lg font-bold text-gray-800 dark:text-white">Bill Annually</p>
                        </div> */}
                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="xl:flex lg:flex items-end">
                            <div className="flex flex-wrap xl:w-1/4 bg-white dark:bg-black items-center justify-center pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-2 sm:mb-2 mb-2 shadow">
                                <img src="https://cdn.tuk.dev/assets/calculator-img.png" alt />
                            </div>
                            <div className="xl:flex lg:flex md:flex sm:flex shadow">
                                <div className="bg-white dark:bg-black pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200 dark:border-gray-900">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/paper-plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-3">Professional</p>
                                    <p className="text-center text-sm text-gray-600 dark:text-white mb-6 font-normal w-full">Basic resources for a starter site. Individuals and small teams.</p>
                                    <button className="focus:outline-none bg-white dark:bg-black transition duration-150 ease-in-out hover: rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">Subscribe</button>
                                </div>
                                <div className="bg-white dark:bg-black pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200 dark:border-gray-900">
                                    <div className="mb-5">
                                        <img src="https://cdn.tuk.dev/assets/plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-3">Pro Plus</p>
                                    <p className="text-center text-sm text-gray-600 dark:text-white mb-6 font-normal w-full">More power for company sites and heavy traffic. Growing business.</p>
                                    <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm border">Subscribe</button>
                                </div>
                                <div className="bg-white dark:bg-black pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200 dark:border-gray-900">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/start-button.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-3">Enterprise</p>
                                    <p className="text-center text-sm text-gray-600 dark:text-white mb-6 font-normal w-full">Support multi-complex sites and high-resolution photos and videos.</p>
                                    <button className="focus:outline-none bg-white dark:bg-black transition duration-150 ease-in-out hover: rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow">
                            <div>
                                <div className="flex items-center w-full">
                                    <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 dark:text-white w-3/12">Pricing</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 dark:text-white font-bold lg:hidden">Professional</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 dark:text-white font-bold lg:hidden">Pro Plus</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 dark:text-white font-bold lg:hidden">Enterprise</p>
                                </div>
                                <table className="sm:table-fixed table-auto w-full bg-white dark:bg-black">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Plan Cost</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$49 per month</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$49 per month</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$49 per month</td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Platform Fee</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$10 per month</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$10 per month</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">$10 per month</td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white pt-3 pb-4 break-words">Processing Fee</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">2% plus tax</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">2% plus tax</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">2% plus tax</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 dark:text-white">Features</p>
                                <table className="sm:table-fixed table-auto w-full bg-white dark:bg-black">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Access to Funds</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">UX Consultancy</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Team Augmentation</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">SEO Package</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Marketing Services</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">Development Team</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 dark:text-white break-words">On-Call Support</td>
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white" />
                                            <td className="w-3/12 border border-gray-200 dark:border-gray-900 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800 dark:text-white">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <Footer/></div>
  )
}

export default plans