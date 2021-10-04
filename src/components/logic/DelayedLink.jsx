import React from 'react'
import { useHistory } from 'react-router-dom'

/**
 *
 * @param children
 * @param {string} href
 * @param {number} delay in second
 * @param {function} onClick callback
 * @returns {JSX.Element}
 * @constructor
 */
const DelayedLink = ({ children, href, delay, onClick }) => {

  let history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    setTimeout(() => {
      history.push(href)
    }, delay * 1000)
    onClick()
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export default DelayedLink