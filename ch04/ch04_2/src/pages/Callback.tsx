import {useCallback, useMemo} from 'react'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import {Title} from '../components'

export default function Callback() {
  const onClick = useCallback((name: string) => () => alert(`${name} clicked`), []) // 고차 함수: onClick이 요구하는 '() => void'타입 함수를 반환할 수 있으면서 동시에 함수 몸통이 요구하는 name값 또한 전달

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn btn-primary normal-case btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>Callback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  )
}
