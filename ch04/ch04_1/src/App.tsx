import {useEffect, useState} from 'react'
import Clock from './pages/Clock'

export default function App() {
  // let today = useRef(new Date())
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      setToday(new Date())
      // today.current = new Date()
      // console.log('today', today.current.toLocaleTimeString())
    }, duration)
    return () => clearInterval(id)
  }, [])
  return <Clock today={today} />
}
