import {Subtitle, Title} from '../components'
import {useWindowResize} from '../hooks/useWindowResize'

export default function WindowResizeTest() {
  const [width, height] = useWindowResize()

  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <Subtitle className="mt-4">
        width: {width}, height: {height}
      </Subtitle>
      <Title>WindowResizeTest(window.innerWidth)</Title>
      <Subtitle className="mt-4">
        width: {window.innerWidth}, height: {window.innerHeight}
      </Subtitle>
    </section>
  )
}
