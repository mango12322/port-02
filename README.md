## 프로젝트 개요

이 프로젝트는 HTML, CSS를 기반으로 제작한 웹 퍼블리싱 포트폴리오 사이트입니다.

실제 서비스 웹사이트의 레이아웃을 참고하여 UI 구조를 분석하고, 반응형 웹 환경에서 동작하도록 구현했습니다.

사용자에게 보기 편한 레이아웃과 깔끔한 UI 구성을 목표로 하였으며, Flexbox 기반 레이아웃과 CSS 스타일링을 활용하여 페이지를 제작했습니다.

---

## 사용 기술

Frontend

- HTML5
- CSS3
- JavaScript

Layout

- Flexbox
- 반응형 웹 (Media Query)

Library

- Swiper.js

---

## 주요 구현 기능

### 1. 반응형 웹 구현

PC, Tablet, Mobile 환경에서 화면 크기에 맞게 레이아웃이 변경되도록 Media Query를 활용하여 반응형 웹을 구현했습니다.

### 2. Flex 기반 레이아웃

상품 리스트, 카드 UI 등을 Flexbox를 사용하여 정렬 및 배치했습니다.

### 3. 슬라이드 UI

Swiper 라이브러리를 사용하여 메인 배너 슬라이드를 구현했습니다.

### 4. 재사용 가능한 CSS 구조

공통 UI 요소를 컴포넌트화하여 유지보수가 쉽도록 CSS 구조를 정리했습니다.

---

## 프로젝트 구조

```
port-02
 ├─ index.html
 ├─ css
 │   ├─ reset.css
 │   ├─ style.css
 │   ├─ tablet.css
 │   └─ mobile.css
 ├─ js
 └─ images
```

설명

- reset.css : 브라우저 기본 스타일 초기화
- style.css : PC 기본 스타일
- tablet.css : 태블릿 반응형 스타일
- mobile.css : 모바일 반응형 스타일

---

## 배운 점

- Flexbox를 활용한 레이아웃 설계 방법
- 반응형 웹 구현 과정
- 실제 사이트 구조 분석 후 퍼블리싱 구현
- CSS 구조 분리 및 유지보수 고려한 스타일 작성
