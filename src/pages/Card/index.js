import React, { Component } from 'react';

// Components
import Header from "../../components/Header"
import Card from './components/Card'



const data = [
  {
    'category':'PROGRAMMING',
    'title':'Learn Basics of React.js in 11 Minutes',
    'description':'If you are new to React.js this tutorial will give you introduction to all basic concepts in react.',
    'author':'Madhu Pathy',
    'publicationDate':'May 29',
    'readTime':'9 min read',
    'urlImg':'https://picsum.photos/id/0/367/267'
  },
  {
    'category':'LIFE',
    'title':'How Sunlight, the Immune System, and Covid-19 Interact',
    'description':'For thousands of years, humans have recognized that the sun plays a role in the emergence and transmission of viruses',
    'author':'Markham Heid',
    'publicationDate':'May 13',
    'readTime':'10 min read',
    'urlImg':'https://picsum.photos/id/103/367/267'
  },
  {
    'category':'PROGRAMMING',
    'title':'I Just Flew. It Was Worse Than I Thought It Would Be.',
    'description':'The surreal experience of flying during a pandemic, and the false promise of a return to normal',
    'author':'McKay Coppins',
    'publicationDate':'May 8',
    'readTime':'4 min read',
    'urlImg':'https://picsum.photos/id/1040/367/267'
  }
]

export default class Cards extends Component {

  _renderCards() {
    return data.map(({
      category,
      title,
      description,
      author,
      publicationDate,
      readTime,
      urlImg
    }) => {
      return (
        <Card 
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
          urlImg={urlImg}
        />
      )
    })
  }

  render () {
    return (      
        <div className='Container'>
          <div>
            <Header
              title={"Cards"}
              description={
                "Cards Component"
              }
            />
            {this._renderCards()}
          </div>
          
        </div>        
    )
  }
}