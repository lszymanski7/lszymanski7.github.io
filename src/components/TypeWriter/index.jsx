import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Function ➞ creates nice typewriter effect
const TypeWriter = ({ backDelay, backSpeed, cursor, loop, text, typeDelay, typeSpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isTyping, setIsTyping] = useState(null)

  const convert = () => {
    return typeof text === 'string' ? [text] : [...text]
  }

  const type = (array) => {
    if (currentText.length === array[currentIndex].length) {
      setTimeout(() => {
        setIsTyping(false)
      }, backDelay)
      return
    }

    setTimeout(() => {
      setCurrentText(array[currentIndex].substring(0, currentText.length + 1))
    }, typeSpeed)
  }

  const backspace = (array) => {
    if (currentText.length === 0) {
      setTimeout(() => {
        setIsTyping(true)
        setCurrentIndex(currentIndex + 1 === array.length ? 0 : currentIndex + 1)
      }, typeDelay)
      return
    }

    if (loop === false && currentIndex + 1 === array.length) {
      return
    }

    setTimeout(() => {
      setCurrentText(array[currentIndex].substring(-currentText.length, currentText.length - 1))
    }, backSpeed)
  }

  useEffect(() => {
    const array = convert()

    if (isTyping === null) {
      setTimeout(() => {
        setIsTyping(true)
      }, typeDelay)
    } else if (isTyping) {
      type(array)
    } else {
      backspace(array)
    }
  })

  return (
    <div>
      <span>{currentText}</span>
      <span>{cursor && '|'}</span>
    </div>
  )
}

TypeWriter.propTypes = {
  backDelay: PropTypes.number,
  backSpeed: PropTypes.number,
  cursor: PropTypes.bool,
  loop: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
  typeDelay: PropTypes.number,
  typeSpeed: PropTypes.number
}

TypeWriter.defaultProps = {
  backDelay: 1000,
  backSpeed: 50,
  cursor: true,
  loop: false,
  typeDelay: 0,
  typeSpeed: 80
}

export default TypeWriter
