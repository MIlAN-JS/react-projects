import React from 'react'
import './window.scss'
import { Rnd } from 'react-rnd';

const Window = ({children}) => {
  return (
    <Rnd 
    
    default={
      {
         x:400,
         y:200,
         width: "40vw",
         height: "60vh"
      }
    }
    >

    <section className='window'>

          <div className="top-nav"> 
             <div className="window-nav-icons">
                <div className="icon red"></div>
                <div className="icon yellow"></div>
                <div className="icon green"></div>
             </div>

            <div className="window-info">
               <i className="ri-folder-fill"></i>
               <span>milancodes-zsh</span>
            </div>

          </div>

         <div className="window-children">
            {children}
         </div>
    </section>
    
     </Rnd>
  )
}

export default Window