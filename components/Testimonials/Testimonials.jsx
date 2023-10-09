import React from "react" 

export default function Testimonials( { text, workplace, children, image}){
    return image == true ? 
    (
        <div className="testimonials-container">
        
            <div className="testimonialsimg"></div>   
            
            <div className="testimonials-info"> 
                <img src="../icons/testimonialquoteicon.png" className="testimonials-quote"/>
                <h3>{text}</h3>
                <p className="individual">{children}</p>
                <p>{workplace}</p>
                
            </div> 
            
        </div>
    ) 
    :
    (   
        <div className="testimonials-container-noimg">
            <div className="testimonial-logo"></div>
            <div className="testimonials-info-noimg">
                <h3>{text}</h3>
                <div className="testimonials-noimg-signature">
                        <p>{children}</p>
                        <div className="division"></div>
                        <p>{workplace}</p>
                </div>
            </div>    
        </div>
   )
}