import React from "react"

export default function Card ({title, paragraph}) {
    const styles = {
        backgroundColor: "#3F75FE",
    }
    return (
        
        <div className="card">
            <div className="card-content">
                <div style={styles} className="card-icon"></div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            
            </div>
            
           
        </div>
        
    )
    
}