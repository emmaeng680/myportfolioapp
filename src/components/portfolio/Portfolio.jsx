import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
  {
    id:1,
    image:IMG1,
    title:"Project 1",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
  {
    id:2,
    image:IMG2,
    title:"Project 2",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
  {
    id:3,
    image:IMG3,
    title:"Project 3",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
  {
    id:4,
    image:IMG4,
    title:"Project 4",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
  {
    id:5,
    image:IMG5,
    title:"Project 5",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
  {
    id:6,
    image:IMG6,
    title:"Project 6",
    github:"https://github.com/emmaeng680/Python-Projects/blob/main/connect4.py",
    demo:"https://github.com/emmaeng680/Python-Projects"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* Change project github link in data*/}
                  <a href={github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                  {/* Change demo project website link in data*/}
                  <a href={demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio

      
