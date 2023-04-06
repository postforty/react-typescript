import {useCallback, useRef} from 'react'
import {Title} from '../components'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick = useCallback(() => inputRef.current?.click(), [])
  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="flex items-center justify-center mt-4">
        <button className="mr-4 btn btn-primary" onClick={onClick}>
          Click Me
        </button>
        {/* 모든 리액트 컴포넌트는 reference의 앞 3글자를 딴 ref 속성을 제공.
        ref 속성은 초기에는 null이었다가 마운트되는 시점에서 물리 DOM 객체의 값이 됨.
        즉, ref는 물리 DOM의 객체의 참조. */}
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      </div>
    </section>
  )
}
