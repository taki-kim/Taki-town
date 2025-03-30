# Introduce

**Taki Town**은 저의 개인 블로그이자 포트폴리오 웹입니다. 스스로 더 가치있는 기록을 하기 위해 시작한 프로젝트입니다.  
개발자로서 배우고 경험한 내용들을 위주로 포스팅하며 관심사와 일상 등 다양한 주제들을 나눕니다.  
개인의 기록을 위해 시작된 프로젝트지만, 방문자들에게 편하고 유용한 서비스를 제공하고자 노력합니다.

쾌적한 UI를 제공하기 위해 벤치마킹과 사용자 피드백을 통해 UI 리팩토링을 진행하고 있습니다.  
나아가 방문자와의 양방향 소통을 위해 댓글 기능을 추가했으며, 현재는 더욱 유용한 서비스를 제공하기 위해 `AI 관련 포스팅 추천` 기능을 제공합니다.

<br/>

# Dev period

2024.09.01 - Current

</br>

# Links

### Site & Code

- [Site Link](https://www.takitown.com/)
- [Github Repository](https://github.com/taki-kim/Taki-town)

### Dev-log

- [다크모드 구현기](https://www.takitown.com/post/[Taki-town]%20%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C%20%EA%B0%9C%EB%B0%9C)
- [Next-Auth 로그인 구현기](https://www.takitown.com/post/[Taki-Town]%20Next-Auth%EB%A1%9C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [NextJs & MongoDB 연동기](https://www.takitown.com/post/[Taki-town]%20MongoDB%EC%99%80%20NextJS%20%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0)
- [댓글/대댓글 구현기](https://www.takitown.com/post/[Taki%20Town]%20%EB%8C%93%EA%B8%80&%EB%8C%80%EB%8C%93%EA%B8%80%20%EA%B8%B0%EB%8A%A5%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- [Metadata로 SEO 적용하기](https://www.takitown.com/post/[Taki-Town]%20metadata%EB%A1%9C%20SEO%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)

</br>

# Tech Stack

![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![타입스크립트](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongo--db-47A248?style=for-the-badge&logo=mongoDB&logoColor=white)
![react-query](https://img.shields.io/badge/react--query-000000?style=for-the-badge&logo=reactquery&logoColor=white)

</br>

# Service's Function

- 게시글 제공
- 관리자 로그인
- 관리자 게시글 관리(CRUD)
- 라이트/다크 모드
- 방문자 댓글 작성/수정
- 방명록 기능
- 구글 상위 관련 글 추천 기능

</br>

# 📂 Folder Structure

```
📂 src
┣ 📂 app
┃  ┣ 📂 api --> route handlers
┃  ┣ 📂 ... --> pages
┃  ┣ layout.tsx
┃  ┣ page.tsx
┣ 📂 components
┃  ┣ 📂 button
┃  ┣ 📂 carousel
┃  ┣ 📂 article-card
┃  ┣ 📂 header
┃  ┣ 📂 footer
┃  ┣ 📂 ...
┣ 📂 public
┣ 📂 assets
┣ 📂 hooks
┣ 📂 utils
┣ 📂 lib
┣ constant.ts
┣ type.ts
```

</br>

# Main feature

### AI 관련 아티클 추천 기능

: '개발' 포스팅 열람 시, AI를 통해 외부 아티클을 추천 받을 수 있습니다.  
`Open-AI`와 `Google-Search-Api`를 통해 구현했습니다. 관련 주제에 대한 Google 검색 결과를 AI에게 넘긴 후 5개의 아티클을 추천 받습니다.

![화면 기록 2025-03-30 오전 9 24 49](https://github.com/user-attachments/assets/694b63e5-52ae-4951-9a57-ecb04237a2e2)

<br />

### 다크모드 제공

: 다크모드를 통해 보다 쾌적한 열람 환경을 제공합니다.  
또한 `code-syntax-highlighter`를 통해 포스팅 내 코드블럭에 대한 가독성을 높였습니다.

![화면 기록 2025-03-30 오전 9 18 03](https://github.com/user-attachments/assets/9e60e150-b6b3-45e7-81cc-1fe8f3ed2350)

<br />

### 방명록 및 댓글 기능

: 로그인 필요없이 간단한 비밀번호 설정으로 댓글을 남길 수 있습니다. 설정한 비밀번호는 댓글을 수정하는데 사용되며 `bcrypt`를 통해 암호화되어 보관됩니다.

![스크린샷 2025-03-30 오전 7 58 38](https://github.com/user-attachments/assets/5e01fb38-b4e0-4db2-a078-eb2ba513ab99)

<br />

### 백오피스 구현

: 게시글 및 댓글을 관리할 수 있는 백오피스를 구현했습니다. 관리자 로그인을 통해 백오피스에 접근할 수 있습니다.

![스크린샷 2025-03-30 오전 8 05 17](https://github.com/user-attachments/assets/ed905d21-ab6b-4e16-b69e-33148970e093)

<br />

### 백오피스 내 텍스트 에디터

: `React-Markdown`을 통헤 텍스트 에디터를 구현했습니다. 마크다운 & html을 사용하여 게시글을 작성할 수 있습니다.

![스크린샷 2025-03-30 오전 7 53 50](https://github.com/user-attachments/assets/dd23a362-32b2-4968-b7c2-024fcff0d648)

<br />
