const cache: Record<string, any> = {} // Record 타입은 타입스크립트가 기본으로 제공하며 객체의 속성을 "키", 속성 값을 "값"으로 할 때 "Record<키_타입, 값_타입>" 형태로 사용하는 제네릭

export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) cache[key] = callback()
  return cache[key] as T
}
