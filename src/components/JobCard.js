import React from 'react'
import "../assests/header.css"
import * as Icon from 'react-feather'
export default function JobCard({title, onApply, children}) {
    return (
        <div className="job_card">
            {children}
            <p className="desc">{title}</p>
            <button className="btn1" onClick={() => onApply()}>Apply <Icon.ArrowRight /></button>
        </div>
    )
}