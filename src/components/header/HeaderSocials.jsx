import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/emmanuel-oppong-acheampong-612bb41b6/" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/emmaeng680" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials