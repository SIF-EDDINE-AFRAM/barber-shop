import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'
import hamdi from '../images/hamdi.jpg';


function TeamMember() {
    const params = useParams()
    const [member, setMember] = useState({})
    const members = {
      Hamdi: {
        name: 'Hamdi Toubali',
        desc: `
        Hamdi is a skilled full-stack developer with a passion for building scalable and efficient web applications. With a background in software engineering, he specializes in developing robust backend systems and crafting intuitive frontend experiences.
  
        Having worked on diverse projects, Hamdi is proficient in modern JavaScript frameworks and backend technologies, ensuring seamless integration between client and server-side components. He thrives in collaborative environments, where problem-solving and innovation drive success.
  
        Whether optimizing database performance, implementing RESTful APIs, or enhancing user experiences, Hamdi is dedicated to delivering high-quality solutions that meet both technical and business objectives.
        `,
        image: `${hamdi}`,
        subheader: 'Full-Stack Developer'
    },
    Cherkaoui: {
        name: 'Cherkaoui Elwafi',
        desc: `
        Cherkaoui is a backend specialist with deep expertise in designing scalable architectures and optimizing system performance. His strong analytical skills enable him to tackle complex challenges, ensuring that applications run smoothly and efficiently.
  
        With extensive experience in database management, API development, and cloud infrastructure, Cherkaoui excels in building reliable backend systems that power seamless user experiences. He is always eager to explore new technologies and refine development workflows for maximum efficiency.
  
        Passionate about knowledge sharing and mentorship, Cherkaoui plays a key role in fostering a culture of learning within the team.
        `,
        image: 'https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subheader: 'Backend Developer'
    },
    Sif_Eddine: {
        name: 'Sif Eddine Afram',
        desc: `
        Sif Eddine is a frontend developer with a keen eye for design and user experience. Combining technical proficiency with creativity, he specializes in crafting visually stunning and highly interactive web applications.
  
        With expertise in modern frontend frameworks, responsive design, and performance optimization, Sif Eddine ensures that every project is not only functional but also engaging and accessible. He is passionate about UI/UX best practices, constantly refining his skills to create intuitive digital experiences.
  
        Dedicated to pushing the boundaries of frontend development, Sif Eddine thrives in dynamic environments where innovation and collaboration drive progress.
        `,
        image: 'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        subheader: 'Frontend Developer'
    }
  
    }
    useEffect(() => {
        scrollToTop()
        if(params.id === 'sierra') {
            setMember(members.Hamdi)
        }
        if(params.id === 'billy') {
            setMember(members.Cherkaoui)
        }
        if(params.id === 'jonny') {
            setMember(members.Sif_Eddine)
        }
      },[])
    return (
      <div className='min-h-screen'>
          <div className='relative'>
              <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
              <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
          </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
          <div className="flex flex-col gap-4 px-4">
            <p className="text-4xl">{member.name}</p>
            <p className="italic">{member.subheader}</p>
            <p className="max-w-lg mx-auto text-xl">{member.desc}</p>
          </div>
          <img src={member.image} className="w-1/4 h-fit grayscale object-cover hidden md:block" ></img>
        </section>
      </div>
    )
}

export default TeamMember