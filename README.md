# Coordikitty - Web App
### 개요
- coordikitty는 사용자가 가진 의상에 기반해서 코디를 추천해주는 플랫폼을 개발하는 프로젝트

### 팀원
FE-WEB : [최은성](https://github.com/ches0703)  
FE-APP : [최서연](https://github.com/SyeonC)  
BE : [이태훈](https://github.com/Tentennball), [이호준](https://github.com/hotteok00)  
ML/DL : [정민관](https://github.com/minganin99), [김채일](https://github.com/LES8638)  

## :white_check_mark: 프로젝트 전체 구성도
![서버 구조도 drawio](https://github.com/user-attachments/assets/8b86d819-5d9f-4baa-9d13-8df79ef3c201)

### 주요 기능
- 자신의 옷장에 있는 옷을 등록하여 해당 옷을 기반으로 날씨/스타일에 따라 코디를 추천받는 플랫폼
- 자신의 코디를 post에 게시하여 커뮤니티 기능 활성화(개발중)
- post에 있는 옷들 + 옷장에 있는 옷 기반으로 날씨/스타일에 따라 코디 추천(개발중)
- 기본 auth기능(회원가입/로그인/로그아웃/회원탈퇴)

## Getting Start
1. `$git clone https://github.com/Coordikitty/coordikitty-FE-react.git` 혹은 zip 파일 다운
2. 프로젝트로 위치 변경
3. `$npm install`로 패키지 설치
4. `$npm start`로 개발 서버 실행

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
