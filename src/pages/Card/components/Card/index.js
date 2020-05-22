import React from 'react'
import './Card.css'

function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  readTime,
}) {
  return (
    <div className='Card'>
      <div className='Card-content'>
        <p className='Card-category'>{category}</p>
        <p className='Card-title'><strong>{title}</strong></p>
        <p className='Card-description'>{description}</p>
        <p className='Card-author'>{author}</p>
        <p className='Card-publication-read'>{publicationDate}, {readTime}</p>
      </div> 
      <div className='Card-img'></div>    
    </div>
  )
  
}

export default Card