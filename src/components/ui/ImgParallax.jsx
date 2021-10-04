import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../../styles/components/ImgParallax.scss'

const ImgParallax = () => {

  const image1 = useRef(null)
  const image2 = useRef(null)
  let sizeX = window.innerWidth
  let sizeY = window.innerHeight

  const handleMouseEnter = e => {
    gsap.to(e.target, {
      scale: 1.2,
      duration: 0.3
    })
  }

  const handleMouseLeave = e => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3
    })
  }

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event

    const percentX = (pageX - (sizeX / 2)) / (sizeY / 2)
    const percentY = (pageY - (sizeY / 2)) / (sizeX / 2)

    image2.current.style.left = `${(sizeX / 100)*50 + (10 * percentX) - 25}px`
    image2.current.style.top = `${33 * percentY}px`
    image1.current.style.right = `${(sizeX / 100)*50 - (20 * percentX) - 25 }px`
    image1.current.style.top = `${75 * percentY}px`
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('onmousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="img-parallax__container">
      <img ref={image2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
           src="/public/img/paint-img-1.jpg" alt="paint"
           className="image-flip image-flip--second cta"/>
      <img ref={image1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
           src="/public/img/paint-img-2.jpg" alt="paint"
           className="image-flip image-flip--first cta"/>
    </div>
  )
}

export default ImgParallax