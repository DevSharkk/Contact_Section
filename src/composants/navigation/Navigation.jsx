import React from 'react'
import { AiOutlineWechat } from "react-icons/ai";
import style from './navigation.module.css'

function navigation() {
  return (
    <nav className={style.navigation}>
        <a href="#" className="logo">
        <AiOutlineWechat />
        </a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default navigation