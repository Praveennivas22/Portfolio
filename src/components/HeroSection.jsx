import { ArrowDown } from 'lucide-react'
import React from 'react'

export const HeroSection = () => {
  return (
    <section id='hero' 
            className='relative min-h-screen flex flex-col items-center justify-center px-4'
            >
                <div className='container max-w-4xl mx-auto text-center z-10'>
                    <div className='space-y-6'>
                          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                            <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                            <span className='text-primary animate-fade-in-delay-1 opacity-0'>Praveen Nivas</span>
                            <span className='text-gradient ml-2 animate-fade-in-delay-2 opacity-0' > Banoth</span>
                          </h1>
                          <p className='text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3 mx-auto'>
                            Dynamic and ambitious BTech graduate in Computer Science and Engineering with a passion for technology and a drive for innovation.
Proficient in various programming languages, algorithms, and software development methods. Committed to continuous learning 
and professional growth to stay abreast of the latest industry trends and advancements.
                          </p>
                          <div className='pt-4 opacity-0 animate-fade-in-delay-4 '>
                            <a href='#projects' className='cosmic-button'>
                                View My Work
                            </a>
                          </div>
                    </div>
                </div>
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2  flex flex-col items-center animate-bounce'>
                     <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                     <ArrowDown className='h-5 w-5 text-primary'/>
                </div>
            </section>
  )
}
