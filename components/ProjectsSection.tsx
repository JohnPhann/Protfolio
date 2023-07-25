import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import {BsGithub ,BsArrowUpRightSquare} from "react-icons/bs"
import SlideUp from './SlideUp'

const ProjectsSection = () => {

    const Projects = [
        {
            name:"VietNamese OCR Character",
            description:"Vietnamese OCR software is designed specifically to recognize and extract text from Vietnamese language documents.",
            image:"/images.png",
            github: "https://github.com/JohnPhann/APP-VietNamese-OCR",
            link:"https://ocr-vietnam-nghiapc.netlify.app/",
        },
        {
            name:"Fruit Shop Pay With Stripe",
            description:"A fruit store is a retail establishment that primarily sells fruits and vegetables to customers",
            image:"/fruit.jpeg",
            github: "https://github.com/JohnPhann/Store-App-Fruit",
            link:"https://store-app-fruit-nghiapc.netlify.app/",
        },
        {
            name:"My-portfolio",
            description:"About me",
            image:"/pofo.png",
            github: "https://github.com/JohnPhann/my-portfolio",
            link:"https://nghia-pc.netlify.app/",
        }
    ]


  return (
    <section id="projects">
        <h1 className='text-center font-bold text-4xl'>Projects
                     <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-28'>
            {Projects.map((project, idx) => {
                 return (
                   
            <div key={idx}>
             {/* <SlideUp offset='-300px 0px -300px 0px'>  */}
            <div className='flex flex-col md:flex-row md:space-x-12'>
            
            <div className='md:w-1/2 mt-8'>
                <a href={project.link}>
            <Image
            src={project.image}
            alt=''
            width={300}
            height={300}
            className='rounded-xl shadow-xl hover:opacity-70'
            />
            </a>
            </div>
            <div className='md:w-1/2'>
             <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                {project.description}</p>
                <div className='flex flex-row align-bottom space-x-4'>
                    <a href={project.github} target="_blank">
                        <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cusrsor-pointer"
                         />


                    </a>
                    <a href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cusrsor-pointer"
                         />


                    </a>
                </div>
            </div>
           
            </div>
            {/* </SlideUp> */}
            </div>
             
            );
            })}
        </div>
    </section>
  )
}

export default ProjectsSection
