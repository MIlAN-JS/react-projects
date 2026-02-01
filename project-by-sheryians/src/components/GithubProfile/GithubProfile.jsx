import React from 'react'
import Window from '../windows/Window'
import "./github.scss"
import githubProjects from './github.json'


function Card({id= "" , image= "" , title="" , description="" , tags= [], repoLink="#" , demoLink = "#"}){
    return (
        <div className="card" >
            <img src={image} alt="" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                  {  tags.map((tag , index)=>(
                        <span className='tag' key={index}>{tag}</span>
                    ))}
                </div>
                <div className="links">
                    <a href={repoLink} className='repo'>Repository</a>
                  {demoLink && <a href={demoLink}>Live Demo</a> }
                </div>
            </div>

        </div>
    )
}
   
  



const GithubProfile = () => {
    
    
  return (
   <Window>

      <section className='github-profile'>
        <div className="cards">
            {
                githubProjects.map((project)=>(
                 <Card key={project.id} {...project} />
                ))
            }
        </div>

           
            
      </section>

   </Window>
  )
}

export default GithubProfile