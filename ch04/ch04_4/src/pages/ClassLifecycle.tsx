import {Component} from 'react'
import {Title} from '../components'

// 가상 DOM 객체가 물리 DOM 객체로 바뀌는 시점을 마운트되었다고 표현
// useLayoutEffect 훅은 동기로 실행, useEffect 훅은 비동기로 실행
// useEffect 권장, 구현이 안될 경우 useLayoutEffect 사용
export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer // 타입스크립트가 요구하는 구현 방식
  }
  componentDidMount() {
    const duration = 1000
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalId})
  }
  componentWillUnmount() {
    clearInterval(this.state?.intervalId)
  }
  render() {
    const {today} = this.state
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
        </div>
      </section>
    )
  }
}
