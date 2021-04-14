import React, { useState } from 'react'

function ShowHide({ posts }){

    const [openIndex, setOpenIndex]= useState(0)

    return(
        <ul>
            
            {posts.map(({ id, img, text })=>{
                const isOpen= openIndex===id

                const textToShow= isOpen?text:text.substring(0,100) + '...'
                return(
                    <li key={id} style={{border: isOpen?'1px solid black':'none'}}>
                        <img src={img} alt='Post avatar' />
                        <p>{textToShow}</p>
                        {!isOpen && 
                            <button onClick={()=>setOpenIndex(id)}>show</button>
                        }
                    </li>
                )
            })}
        </ul>
    )
}


export default ShowHide