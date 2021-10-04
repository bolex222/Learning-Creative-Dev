import React, { useRef, useEffect } from 'react'
import '../../styles/components/Marquee.scss'

const Marquee = ({ text, speed }) => {

  const marqueeMoving = useRef(null)
  const marqueeContainer = useRef(null)

  const generateText = () => {
    let components = []
    for (let i = 0; i < 10; i++) {
      components.push(<span key={i.toString()} className="marquis-elem">{text}</span>)
    }
    return components
  }

  const setMarqueeSpeed = () =>{
    const size = marqueeMoving.current.offsetWidth - marqueeContainer.current.offsetWidth
    marqueeMoving.current.style.animationDuration = `${size / speed}s`
  }

  useEffect(() => {
    setMarqueeSpeed()
  }, [])


  return (
    <div ref={marqueeContainer} className="marquis">
      <div ref={marqueeMoving} className="marquee-moving">
        {generateText()}
      </div>
    </div>
  )
}

export default Marquee