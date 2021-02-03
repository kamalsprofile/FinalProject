import React from 'react'
import * as Icon from 'react-feather'

export default function Card({image, text, children}) {
    
    return (
        <div style={{width: '300px', height: '250px', margin: '5px 0px', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            {/* <img src={image} style={{height: '250px', width: '100%'}} /> */}
            {children}
            <p style={{margin: '0px', marginTop: '5px', padding: "5px"}}>{text}</p>
        </div>
    )
}