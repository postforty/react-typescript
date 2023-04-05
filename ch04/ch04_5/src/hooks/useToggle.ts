import {useState, useCallback} from 'react'

export const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toogleChecked = useCallback(() => setChecked(checked => !checked), [])
  return [checked, toogleChecked]
}
