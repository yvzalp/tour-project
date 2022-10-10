import React from 'react'

import './Card.css'
import {data} from '../../helper/data'

const card = () => {
  return (
    <div className='main'>
      {data.map((item)=> {const {id,image,title,desc}=item;
    return (
        <div className='container'>
            <h2>{title}</h2>
            <div className='city'>
                <img src={image} alt="image" id={id} />
                <div className='description'>
                    <p className='desc'>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )})}

    </div>
  )
}

export default card