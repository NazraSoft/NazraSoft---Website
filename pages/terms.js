import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const terms = () => {
  return (
    <div>
    <Head>
    <title>Privacy Policy - NazraSoft</title>
    <meta name="description" content="Software Solutions" />
    <link rel="icon" href="/logo.jpg" />

  </Head>
  <Navbar/>
  <div className='flex flex-col p-12 border-2 border-gray-400 r md:mx-64 mt-12' >
  <h2 className="mt-6 mb-6 text-4xl font-bold text-center underline" >Website Terms and Conditions of Use</h2>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">1. Terms</h2>

<p className="text-lg italic">By accessing this Website, accessible from https://nazrasoft.vercel.app/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">2. Use License</h2>

<p className="text-lg italic">Permission is granted to temporarily download one copy of the materials on Nazra Software Solution's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>


    <li className="mx-12 mt-2 mb-2 ">modify or copy the materials;</li>
    <li className="mx-12 mt-2 mb-2 ">use the materials for any commercial purpose or for any public display;</li>
    <li className="mx-12 mt-2 mb-2 ">attempt to reverse engineer any software contained on Nazra Software Solution's Website;</li>
    <li className="mx-12 mt-2 mb-2 ">remove any copyright or other proprietary notations from the materials; or</li>
    <li className="mx-12 mt-2 mb-2 ">transferring the materials to another person or "mirror" the materials on any other server.</li>


<p className="text-lg italic">This will let Nazra Software Solution to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">3. Disclaimer</h2>

<p className="text-lg italic">All the materials on Nazra Software Solution’s Website are provided "as is". Nazra Software Solution makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Nazra Software Solution does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">4. Limitations</h2>

<p className="text-lg italic">Nazra Software Solution or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Nazra Software Solution’s Website, even if Nazra Software Solution or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">5. Revisions and Errata</h2>

<p className="text-lg italic">The materials appearing on Nazra Software Solution’s Website may include technical, typographical, or photographic errors. Nazra Software Solution will not promise that any of the materials in this Website are accurate, complete, or current. Nazra Software Solution may change the materials contained on its Website at any time without notice. Nazra Software Solution does not make any commitment to update the materials.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">6. Links</h2>

<p className="text-lg italic">Nazra Software Solution has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Nazra Software Solution of the site. The use of any linked website is at the user’s own risk.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">7. Site Terms of Use Modifications</h2>

<p className="text-lg italic">Nazra Software Solution may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">8. Your Privacy</h2>

<p className="text-lg italic">Please read our Privacy Policy.</p>

<h2 className="mt-6 mb-6 text-3xl font-bold text-center underline">9. Governing Law</h2>

<p className="text-lg italic">Any claim related to Nazra Software Solution's Website shall be governed by the laws of in without regards to its conflict of law provisions.</p>
 
  </div>
  <Footer/>
  </div>
  )
}

export default terms