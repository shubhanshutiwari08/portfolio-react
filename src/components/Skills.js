import React from 'react'
import html from "./html.png"
import css from "./css.png"
import js from "./js.png"
import logo from "./react.png"
import bootstrap from "./bootstrap.png"
import figma from "./figma.png"

export default function Skills() {
  return (
    <>
    <section class="portfolio" id="portfolio">

<h1 class="heading"> My <span>Skills</span> </h1>

<div class="box-container">

    <div class="box">
        <img src={html} alt="" />
        
    </div>

    <div class="box">
        <img src={css} alt="" />
    </div>

    <div class="box">
        <img src={js} alt="" />
    </div>

    <div class="box">
        <img src={logo} alt="" />
    </div>

    <div class="box">
        <img src={bootstrap} alt="" />
    </div>

    <div class="box">
        <img src={figma} alt="" />
    </div>

</div>

</section>
    </>
  )
}
