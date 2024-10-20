import React from 'react'

const Skills = () => {
    return (
        <div className='container pt-32'>
            <div id='skills' className='grid md:grid-cols-2 gap-20 items-center'>
                <div data-aos="zoom-in-up">
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-gray-500 pt-2'>
                        I am working oin my skills I want to learn typescript , javascript , css , html , nodejs , nextjs , reactjs to polish my skills for building my career. The skills I have are I know the working on microsoft woed , microsoft excel , microsoft powerpoint and on adobe photoshop.
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                         <h2 data-aos="zoom-in-up">Microsoft word</h2>
                         <h2 data-aos="zoom-in-up">Microsoft office</h2>
                         <h2 data-aos="zoom-in-up">Microsoft powerpoint</h2>
                        </div>
                        <div className='space-y-2'>
                         <h2 data-aos="zoom-in-up">Adobe photoshop</h2>
                         <h2 data-aos="zoom-in-up">Javascript</h2>
                         <h2 data-aos="zoom-in-up">Typescript</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
