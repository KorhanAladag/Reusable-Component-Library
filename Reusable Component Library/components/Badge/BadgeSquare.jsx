import React from "react" 

export default function Badge( { children, color }){
    return (
        <div className={`badge square ${color}`}>
            {children}
        </div>
    )
}