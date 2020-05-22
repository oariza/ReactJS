import React from 'react'
import './Card.css'

function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  readTime,
  urlImg
}) {
  return (
    <div className='Card'>
      <div className='Card-content'>
        <p className='Card-category'>{category}</p>
        <p className='Card-title'>{title}</p>
        <p className='Card-description'>{description}</p>
        <p className='Card-author'>{author}</p>
        <p className='Card-publication-read'>{publicationDate}, {readTime}</p>
      </div> 
      <img src={`${urlImg}`} width="200" height="200" />    
    </div>
  )
  
}

export default Card