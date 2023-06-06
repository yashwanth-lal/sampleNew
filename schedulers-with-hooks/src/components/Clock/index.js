import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      console.log('triggered')
      clearInterval(timerId)
    }
  })

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {time.toLocaleTimeString()}</Time>
    </ClockContainer>
  )
}

export default Clock
