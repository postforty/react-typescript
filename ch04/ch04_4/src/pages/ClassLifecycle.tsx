import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  state = {
    today: new Date()
  }
  render() {
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
