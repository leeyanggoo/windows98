# Windows98 Theme / Music Player / Tetris
> _HTML, CSS, JS를 이용해 만든 Windwos98 테마의 사이트입니다._
> + Live Demo : https://win98-game.web.app/
> + Refer to : https://jdan.github.io/98.css/#intro

# 사용 스택
+ **Vite**를 사용하여 사이트를 번들링하고 관리합니다.
+ **firebase**를 이용하여 사이트를 배포합니다.
+ **SCSS**를 사용하여 사이트의 레이아웃을 설계합니다.
+ **GSAP**를 사용하여 마우스를 커스텀합니다.

# 구현 내역
+ 자바스크립트의 windwo 객체 이벤트와 gsap를 이용해 마우스 커스텀
+ 자바스크립트의 audio 객체의 속성을 이용해 뮤직 플레이어 제작
  + audio 객체 속성 : currentTime, duration, volume
  + audio 객체 메서드 : play(), pause()
+ 자바스크립트의 다양한 메서드 및 속성을 이용해 테트리스 게임 제작
  + boolean 자료형을 이용한 실행 관리
  + prepend(), some() 메서드를 이용한 라인 및 블록 생성
  + keydown 이벤트를 이용해 블록 이동
  + async / await와 new Promise를 사용한 game over 효과

# 프로젝트 실행
+ Vite를 설치합니다. `npm create vite@latest`
+ GSAP를 설치합니다. `npm install gsap`
+ jQuery를 설치합니다. `npm install jquery`
+ Vite 환경설정은 `vite.config.js` 파일을 만들고 다음과 같이 작성합니다.

```
export default {
    root: 'src',
    build: {
        outDir: '../public',
    }
}
```
