# react-typescript
## VSCode 개발 환경 설정
+ Prettier - Code formatter
+ Tailwind CSS IntelliSense
+ Headwind
+ PostCSS Language Support

## 타입스크립트 컴파일러 설치
+ npm i -g typescript ts-node

## 프로젝트 생성
+ npx create-react-app ch04_1 --template typescript
+ npm i chance luxon @fontsource/material-icons
  + chance: 가짜 데이터 제공
  + luxon: 날짜를 '20분 전' 형태로 만들어 주는 기능 제공
+ npm i -D @types/chance @types/luxon
  + chance, luxon을 타입스크립트에서 사용할 수 있게 함
+ npm i -D postcss autoprefixer tailwindcss @tailwindcss/line-clamp daisyui
+ npx tailwindcss init -p

## 테일윈드CSS 설정
```
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

.material-icons {
  font-family: 'Material Icons';
  display: inline-block;
}
```
```
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
```

## 주요 용어
+ 웹팩(webpack)의 핫 모듈 교체(HMR: hot module replacement) ※ hot reloading라고도 함
