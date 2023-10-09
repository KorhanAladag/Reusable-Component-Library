import React from "react"
import classnames from "classnames"

export default function Banner ({title, paragraph, variant, className, ...rest}) {
    
    let variantClass = variant && `banner-${variant}`
    let linedecisionClass = paragraph? "banner-multi" : "banner-single"
    const allClasses = classnames(variantClass, linedecisionClass, className)
    
    
    
    return (
        <div className={allClasses} {...rest}>
            <div className="title-container">
                <div className="img-container"></div>
                <h3>{title}</h3>
            </div>
            <p>{paragraph}</p>
        </div>
    )
}