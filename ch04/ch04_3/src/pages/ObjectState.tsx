import type {ChangeEvent, FormEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'

type FormType = {
  name: string
  email: string
}

export default function ObjectState() {
  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 웹페이지 리렌더링 방지

      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  // 대다수 프로그래밍 언어에서 어떤 변수에 담긴 값을 다른 변수에 복사할 때는 깊은 복사, 얕은 복사라는 2가지 방식 지원.
  // 복사 방식은 값의 타입에 따라 각각 다르게 적용됨.
  // 만일 number, boolean 등 값의 메모리 크기를 컴파일 타임 때 알 수 있는 타입은 항상 깊은 복사.
  // 반면 객체, 배열 등 값의 메모리 크기를 런타임 때 알 수 있은 타입은 얕은 복사.
  // string 타입 문자열은 항상 읽기 전용이므로 메모리 크기를 컴파일 타임 때 알 수 있음.
  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value}))
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, email: e.target.value}))
  }, [])

  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              value={form.name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="enter your name"
              className="input input-primary"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <input
              value={form.email}
              onChange={onChangeEmail}
              id="email"
              type="email"
              placeholder="enter your email"
              className="input input-primary"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/2 btn btn-sm btn-primary"
            />
            <input defaultValue="Cancel" className="w-1/2 ml-4 btn btn-sm" />
          </div>
        </form>
      </div>
    </section>
  )
}
