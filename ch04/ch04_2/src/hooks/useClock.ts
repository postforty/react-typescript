import {useInterval} from './useInterval'
import {useState} from 'react'

const useClock = () => {
  const [today, setToday] = useState(new Date())
  useInterval(() => setToday(new Date()))
  return today
}

export default useClock
