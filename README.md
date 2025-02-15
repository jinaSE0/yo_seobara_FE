<div align="center">
  <img src="https://user-images.githubusercontent.com/79635274/194881265-08db0498-c674-41ba-a085-9c87878c4228.png" width="150">   <h6>인생 '내' 컷 어디가 잘나와? 여기 서 봐, 패션의 완성은 얼굴? 사진의 완성은 배경! 여기 서 봐</h6>
  <h2>📸 사진 스팟 공유 서비스, 요서바라📸</h2>
  <a href="https://www.notion.so/2-b2a83adc547f456fa02222cad3e04a44">노션</a>　
  <br></br>
</div>
<div align="center">  
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src ="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white">
  <img src ="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white">
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink"> 
  <img src ="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
</div>

<br></br>
## 💻 기술 특장점 및 도입 배경
<details>
<summary>무한스크롤적용</summary>
이미지 공유 기반 서비스이기때문에 페이지네이션보다 무한스크롤을 통해 간편하게 사진 위주로 훑어 볼 수 있도록 제작했어요.
</details>
<details>
<summary>카카오 소셜로그인</summary>
사용자 편의성를 고려하여 카카오 소셜로그인을 도입했어요.
</details>
<details>
<summary>카카오 맵sdk 활용</summary>
카카오 맵이 국내 사용자에게 구글맵보다 적합하다고 판단했고,
같은 API KEY로 카카오 로그인과 함께 관리하기 위해 선택했어요.
</details>
<details>
<summary>Redux-toolkit을 이용한 상태관리</summary>
현재의 프로젝트 규모로는 props drilling도 적고 
관리하는 상태가 많지 않아 전역으로 상태관리를 하지 않아도 되지만
향후 유지보수의 측면에서 데이터를 전역관리하는 것이 유리하다고 판단했어요.
지도 페이지는 위치를 기준으로 데이터를 받아오고 무한 스크롤 페이지는 최신 순으로 데이터를 받아오기 때문데 각각 나누어서 전역상태관리를 했어요.
</details>
<br></br>

## 💻 트러블슈팅
<details>
<summary> 모달 렌더링 문제 </summary>
<div display="flex">
<img src="https://user-images.githubusercontent.com/109025674/194463278-58b74987-135e-44c2-9e76-4401bbdfc959.png"  height="200px" width="300px"/>
<p> 기존에 모달창을 공용컴포넌트로 만들 때 모달을 열고 닫는 state와 css의 display속성을 사용하여 구현했었습니다. 하지만 현재 프로젝트에서 모달창을 게시물의 상세정보를 보여주는 용도로 사용하며 모달 내부에 게시물 정보, 게시물에 대한 댓글 등의 정보가 들어가면서 문제가 발생했습니다. 여러개의 게시물을 렌더링하며 화면에 보이진 않지만 모달 컴포넌트도 여러번 렌더링될뿐더러 모달 안에 들어가는 children컴포넌트의 상태도 초기화가 되지않는 문제가 생겼습니다. 
</p>
<img src="https://user-images.githubusercontent.com/109025674/194465043-21d3044d-acde-4912-9156-7d5ea5c1b354.png" height="200px" width="300px"/>
<p>
앞서 말씀드린 문제를 해결하기위해 모달을 열고 닫는 방식을 수정했습니다. 기존의 CSS를 활용한 방식에서 모달의 생성여부를 정하는 state를 통해 조건부 렌더링을 하면서 유저가 게시물의 미리보기를 클릭하는 등의 액션이 일어났을 경우에만 모달이 렌더링 되도록 수정했습니다.조건부 렌더링을 통해 불필요한 렌더링을 줄이고 children 컴포넌트의 상태값이 리액트이 생명주기를 따라 모달이 닫히면 초기화 되도록 만들었습니다.
</p>
</div>
</details>

<details>
<summary> useEffect가 두 번 실행되는 경우 </summary>
<div >
<img src="https://user-images.githubusercontent.com/109025674/194465576-2370211f-428c-456b-be54-0cd08d12b6ac.png" height="200px" width="300px"/>
<p>
두번째 트러블 슈팅으로는 특정 상황에서만 작동되어야하는특정 상황에서만 작동되어야하는 useEffect hook이 두번 작동하는 상황이었습니다. 
console.log를 찍어가며 서버로부터 요청한 데이터가 잘 들어왔는지 확인하던 중 게시물 데이터가 같은 부분에서 2번 출력된것을 볼 수 있었습니다. 오른쪽 예시 코드처럼 dispatch는 최초 렌더링 때와 page가 변할 때만 작동해야하는데 dispatch된 데이터를 출력해보면 page의 변화가 없는데도 2번씩 출력이 되는 현상이었습니다. 
이를 해결하기 위해 검색을 하던 중 index.js의 react strict mode가 개발환경에서의 문제발생을 감지하기위해 두번 렌더링을 진행한다는것을 알게되었고 해당 기능을 종료하면 다시 원하는 대로 특정 조건에서만 dispatch를 실행했습니다.
</p>
</div>
</details>
<br></br>

## 💻 협업방식
<details>
<summary>코드컨벤션</summary>
<ul>
<li> 컴포넌트 : PascalCase </li>
<li> 함수 : camelCase </li>
<li>변수 : camelCase</li>
<li> 폴더명 : 소문자</li>
</ul>
</details>
<details>
<summary>깃플로우</summary>
<ul>
<li> 각자 작업할 브랜치 생성</li>
<li> dev 브랜치 생성 </li>
<li>이상없으면 dev 병합</li>
</ul>
</details>
<br></br>


## 💻 만든 사람
| 이석준 | 이예찬 | 서정희|
|:-----------:|:-----------:|:-----------:|
| ![이석준](https://user-images.githubusercontent.com/109025674/193542311-15be2f67-ccbb-4383-8c74-2ca9da505ecd.png)|![이예찬](https://user-images.githubusercontent.com/109025674/193542349-5cff393d-570a-4918-9674-258e0b371c88.png)|![서정희](https://user-images.githubusercontent.com/109025674/193542379-6bd3276d-5304-456f-9cb0-942815ea19ad.png)|
|[Seokjun7074](https://github.com/Seokjun7074) | [yc8569](https://github.com/yc8569) | [jinaSE0](https://github.com/jinaSE0) | 


