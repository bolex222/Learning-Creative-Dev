import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Marquee from '../components/ui/Marquee'
import ImgParallax from '../components/ui/ImgParallax'
import '../styles/pages/Home.scss'

const Home = () => {
  const title = useRef(null)

  const TitleAnimation = () => {
    const titleTimeLine = gsap.timeline()
    for (let i = 0; i <= title.current.children.length; i++) {
      titleTimeLine.fromTo(`#Ttl${i}`,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.05 * i)
    }
  }

  useEffect(() => {
    TitleAnimation()
  }, [])

  return (
    <main className="main-page">
      <section className="main-page__first-section">
        <h1 ref={title} className="main-page__heading">
          <span id="Ttl0">L</span>
          <span id="Ttl1" className="cta">O</span>
          <span id="Ttl2">R</span>
          <span id="Ttl3">E</span>
          <span id="Ttl4">M</span>&nbsp;<span id="Ttl5">I</span>
          <span id="Ttl6">P</span>
          <span id="Ttl7">S</span>
          <span id="Ttl8">U</span>
          <span id="Ttl9">M</span>
        </h1>
        <ImgParallax />
        <Marquee speed={350} text="I'M HAVING SOME FUN" />
      </section>
    </main>
  )
}

export default Home