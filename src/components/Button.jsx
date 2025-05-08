import React from 'react'

const Button = ({name=null, className=null, icon=null}) => {
    return (
        <div>
            <a href="#" target="_blank"
                className={className}>{icon} {name}</a>
        </div>
    )
}

export default Button