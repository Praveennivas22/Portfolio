import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
   <section id='about' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
     <h2 className='text-4xl font-bold mb-12 text-center '>
        About <span className='text-primary'>Me</span>
     </h2>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
       <div className='space-y-6'>
         <h3 className='text-2xl font-semibold'>Passionate Java Web Developer </h3>
         <p className='text-muted-foreground '>I Have Completed a 10-month intensive training program focused on Full Stack Web Development using the MERN stack and Java with Spring Boot. 
Gained foundational knowledge of frontend technologies such as HTML5, CSS3, JavaScript, and React.js through coursework.
</p>
          <p className='text-muted-foreground'>Worked in an Agile environment, participated in scrum meetings, code reviews, and followed best practices in SDLC. Collaborated in team projects, demonstrated strong communication skills, and showed the ability to analyze and solve problems effectively.</p>
       <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
          <a href="#contact" className='cosmic-button'>
            Get in Touch
          </a>
           <a href="/Praveen_SoftwareEngineer.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
            Download CV
          </a>
       </div>
       </div>
       <div className='grid grid-cols-1 gap-6'> 
        <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <Code className='h-6 w-6 text-primary'/>
                </div>
                 <div className='text-left'>
                      <h4 className='text-lg font-semibold'>Web Development</h4>
                      <p className='text-muted-foreground'>Building scalable Java Spring Boot & MERN stack applications.</p>
                 </div>
             </div>
        </div>
         <div className='gradient-border p-6 card-hover'>
           <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <User className='h-6 w-6 text-primary'/>
                </div>
                  <div className='text-left'>
                      <h4 className='text-lg font-semibold'>UI Design</h4>
                      <p className='text-muted-foreground'>Creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.</p>
                 </div>
             </div>
         </div>
          <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                  <div className='text-left'>
                      <h4 className='text-lg font-semibold'>Project Management</h4>
                      <p className='text-muted-foreground'>Leading teams and coordinating tasks to ensure on-time, goal-oriented project delivery.</p>
                 </div>
             </div>
          </div>
         
       </div>
     </div>
     
    </div>
   </section>
  )
}
