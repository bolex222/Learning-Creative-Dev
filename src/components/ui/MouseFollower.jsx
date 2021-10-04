import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import '../../styles/components/MouseFollower.scss'

const MouseFollower = () => {

  const mouseFollower = useRef(null)

  const [mousePosition, setMousePosition] = useState({
    previousX: 0,
    previousY: 0,
    x: 0,
    y: 0
  })

  const handleMouseMove = e => {
    setMousePosition(oldOne => {
      return {
        previousX: oldOne.x,
        previousY: oldOne.y,
        x: e.pageX,
        y: e.pageY
      }
    })
  }

  const handleMouseEnter = () => {
    gsap.to(mouseFollower.current, {scale: 2, duration: 0.3})
  }

  const handleMouseLeave = () => {
    gsap.to(mouseFollower.current, {scale: 1, duration: 0.3})
  }

  useEffect(() => {
    const allCta = document.querySelectorAll('.cta')
    document.addEventListener('mousemove', handleMouseMove)
    allCta.forEach(e => {
      e.addEventListener('mouseenter', handleMouseEnter)
      e.addEventListener('mouseleave', handleMouseLeave)
    })
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      allCta.forEach(e => {
        e.removeEventListener('mouseenter', handleMouseEnter)
        e.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    // console.log(mousePosition)
    // gsap.to(mouseFollower.current, {
    //   x: mousePosition.x,
    //   y: mousePosition.y,
    //   duration: 0.1, ease: 'elastic.out'})
    mouseFollower.current.style.top = `${mousePosition.y - 25}px`
    mouseFollower.current.style.left = `${mousePosition.x - 25}px`
  }, [mousePosition])

  return (
    <div ref={mouseFollower} className="mouse-follower point-event">
    </div>
  )
}

export default MouseFollower