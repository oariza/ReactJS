import React, { Component } from 'react';

// Components
import Header from "../../components/Header"
import Card from './components/Card'



const data = [
  {
    'category':'PROGRAMMING',
    'title':'8 VS Code Extensions You Might Love',
    'description':'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author':'Marvin Wendt in Better Programming',
    'publicationDate':'May 4',
    'readTime':'3 min read',
  },
  {
    'category':'PROGRAMMING',
    'title':'Title 2',
    'description':'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author':'Marvin Wendt in Better Programming',
    'publicationDate':'May 10',
    'readTime':'5 min read',
  },
  {
    'category':'PROGRAMMING',
    'title':'Title 3',
    'description':'CodeSnap, GitHub Markdown Preview, Paste JSON as Code, and more',
    'author':'Marvin Wendt in Better Programming',
    'publicationDate':'May 10',
    'readTime':'5 min read',
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
      readTime
    }) => {
      return (
        <Card 
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}
        />
      )
    })
  }

  render () {
    return (      
        <div className='Container'>
          <div>
            <Header
              title={"Credit Card"}
              description={
                "Credit Card Component"
              }
            />
            {this._renderCards()}
          </div>
          
        </div>        
    )
  }
}