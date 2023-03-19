import type {FC} from 'react'
import {Div, Title, Subtitle} from '../components'

export type ClockProps = {
  today: Date
}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white"></Div>
  )
}

export default Clock
