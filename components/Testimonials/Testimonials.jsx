import React from "react" 
import testimonialIcon from "./icons/testimonialquoteicon.png"

export default function Testimonials( { text, workplace, children, image}){
    return image == true ? 
    (
        <div className="testimonials-container">
        
            <div className="testimonialsimg"></div>   
            
            <div className="testimonials-info"> 
                <img src={testimonialIcon} className="testimonials-quote"/>
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
