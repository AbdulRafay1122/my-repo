import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
      id: 0,
      title: "Todo List",
      desc: "I have'nt done yet this project",
      img:"/my-pic3.jpg",
      tags:["React" , "Node" , "CSS" , "Typescript"]
    },
    {
        id: 1,
        title: "Todo List",
        desc: "I have'nt done yet this project",
        img:"/my-pic3.jpg",
        tags:["React" , "Node" , "CSS" , "Typescript"]
      },
      {
        id: 2,
        title: "Todo List",
        desc: "I have'nt done yet this project",
        img:"/my-pic3.jpg",
        tags:["React" , "Node" , "CSS" , "Typescript"]
      },
      {
        id: 3,
        title: "Todo List",
        desc: "I have'nt done yet this project",
        img:"/my-pic3.jpg",
        tags:["React" , "Node" , "CSS" , "Typescript"]
      },
      {
        id: 0,
        title: "Todo List",
        desc: "I have'nt done yet this project",
        img:"/my-pic3.jpg",
        tags:["React" , "Node" , "CSS" , "Typescript"]
      },
]


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
    <Heading title='My Projects'/>
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
    </div>
  )
}

export default Projects


