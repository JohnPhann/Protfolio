import React from 'react'
import Image from 'next/image'
const AboutSection = () => {
    const skills = [
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "JavaScript"},
        {skill: "MySQL"},
        {skill: "Python"},
        {skill : "Django Rest-Framework"},
        {skill: "React"},
        {skill: "Next.js"},
        {skill: "Talwind CSS"},
        {skill: "Git"},
        {skill: "Google Colab"}
    ]
  return (
        <section id="about">
                <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                     <h1 className='text-center font-bold text-4xl'>About Me
                     <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
                     </h1>
                    <div className='flex flex-col space-py-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                        <div className='md:w-1/2'>
                            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>Get to know me!</h1>
                            <p>
                                {" "}
                                Hi, my name is NghiaPC and I am a{" "}
                                <span className="font-bold">{"highly ambitious"}</span>,
                                <span className="font-bold">{"self-motivated"}</span>, and 
                            <span className='font-bold'>{" driven"}</span> software engineer based  in DaNang City , VietNam 
                             </p>
                            <br />
                            <p>I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, traveling, to making YouTube video I am always seeking new experiences and love to keep myself engaged and learning new things.</p>
                            <br />
                            <p>
                            I believe that you should {" "}
                            <span className='font-bold text-teal-500'>
                            never stop growing
                             </span>{" "}
                            and that&#39;s what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where any career takes me and an always open to new opportunities.
                            </p>
                        </div>
                        <div className='md:w-1/2'>
                        <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>My Skills</h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((item , idx)=>{
                                return (
                                    <p key={idx}
                                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >{item.skill}</p>
                                )
                            })}
                        </div>
                        <Image className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-9" src="/photo2.webp" alt="" width={100} height={100} />
                        </div>
                    </div>
                    
                </div>
                
               
        </section>
  )
}

export default AboutSection
