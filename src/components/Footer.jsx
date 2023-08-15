import React from 'react'
import Resume from '../assets/Vivek_Santani_Resume.pdf'
const Footer = () => {
  return (
    <>
<footer>
    <div class="w-full  mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mb-5">
      <span class="text-sm sm:text-center"><a href="/" class="hover:underline">Vivek Sanatni | Portfolio</a>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0">
        <li>
            <a href="#experience" class="mr-4 hover:underline md:mr-6 ">Experience</a>
        </li>
        <li>
            <a href="#projects" class="mr-4 hover:underline md:mr-6">Projects</a>
        </li>
        <li>
            <a href="#education" class="mr-4 hover:underline md:mr-6">Education</a>
        </li>
        <li>
            <a href={Resume} download={"Vivek Santani Resume"} class="hover:underline">Download Resume</a>
        </li>
    </ul>
    </div>
</footer>

    </>
  )
}

export default Footer
