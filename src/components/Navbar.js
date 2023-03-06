import React from 'react'
import myimg from "./myimg.jpg"

export default function Navbar() {
  return (
    <>
    <header>

<div class="user">
    <img src={myimg} alt="" />
    <h3 class="name">Shubhanshu Tiwari</h3>
    <p class="post">~The secret of getting ahead is getting started</p>
</div>

<nav class="navbar">
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#portfolio">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

</header>
    </>
  )
}
