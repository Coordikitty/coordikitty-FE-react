# Coordikitty - Web App

## Getting Start
1. `$git clone https://github.com/Coordikitty/coordikitty-FE-react.git` 혹은 zip 파일 다운
2. 프로젝트로 위치 변경
3. `$npm install`로 패키지 설치
4. `$npm start`로 개발 서버 실행

혹은 [http://ec2-43-202-147-62.ap-northeast-2.compute.amazonaws.com/](http://ec2-43-202-147-62.ap-northeast-2.compute.amazonaws.com/) 에서 확인 가능



## brach
```text
master
└─ develop : 개발이 이루어지는 brach
  └─ feature/[SCURUM] : SCRUM 단위 개발
```



## Commit Convention
- 커밋 형식
  ```
  SCRUM/[Type] : Message
  // Ex : SCRUM-14/[Feat] : Homepage 제작
  ```
- Type
  |Type     |Description|
  |--       |--|
  |Feat     |새로운 기능 추가|
  |Docs     |문서 수정|
  |Style    |코드 스타일 변경|
  |Refactor |코드 리펙토링|
  |Test     |테스트 관련 코드|
  |File     |파일의 추가,삭제,이동|



## Folder Structure
```text
└─ src
 ├─ components  : 재사용할 컴포넌트
 ├─ assets      : 이미지 혹은 폰트
 ├─ hooks       : 커스텀 훅
 ├─ pages       : 페이지 컴포넌트
 ├─ constants   : 공통적으로 사용할 상수
 ├─ styles      : CSS 파일(혹은)
 ├─ api         : API 로직
 ├─ utils       : 정규표현식 / 공통함수 등
 ├─ router.js   : 라우팅 객체
 ├─ App.js
 └─ index.js
```
