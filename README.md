# coin-overview

프론트엔드팀 React 과제 1차
프론트엔드팀 실력 향상을 위해 제작하였습니다.
외부로 소스 유출은 자제해 주시길 바랍니다.

참고: 노마드 코더 react 챌린지
<br />
<br />

## 과제 목표

1. React를 이해 하고 화면을 구현할 수 있다.
2. Typescript를 이해 하고 사용할 수 있다.
3. axios사용하여 서버와 통신하여 데이터를 화면에 출력 할 수 있다.
4. sass를 사용할 수 있다.
5. css방법론 중 bem 방식을 이해 하고 사용할 수 있다.
   <br />
   <br />

## 기술 스택

- React
- TypeScript
- sass: scss + Bem
- axios
  <br />
  <br />

## API

https://api.coinpaprika.com/
<br/>

<details>
<summary>prices</summary>
<br/>
	
```
https://api.coinpaprika.com/v1/tickers
```

</details>

<details>
<summary>exchanges</summary>
<br/>
	
```
https://api.coinpaprika.com/v1/exchanges
```

</details>

<details>
<summary>coins</summary>
<br/>
	
```
https://api.coinpaprika.com/v1/coins
https://api.coinpaprika.com/v1/coins/{coin_id}
https://api.coinpaprika.com/v1/coins/{coin_id}/markets
https://api.coinpaprika.com/v1/coins/{coin_id}/exchanges
```

</details>
<br />
<br />

## 미션

- [미션 템플릿 바로가기](https://codesandbox.io/s/sharp-hawking-piydi9?file=/src/App.tsx)
- 미션 템플릿에서 fork하여 진행
- fork 후 URL 스터디방에 공유
- [폴더 및 파일 네이밍 규칙](https://various-timpani-126.notion.site/Coding-Covention-86f8a8ecfaba4a26bebcdd3e78216068) 을 읽어주세요.

<br />

## 미션 화면
![Animation](https://user-images.githubusercontent.com/71241063/162670008-ab9dd52d-adc8-4f08-ae57-e06733d25010.gif)
<br />

### 공통

- style은 자율적으로 진행해주세요.

- [ ] interface는 이름은 Pascal Case, 속성은 Camel Case로 작성한다.
- [ ] 전개구문(Spread syntax)과 구조 분해 할당(Destructuring_assignment)을 사용하기
- [ ] 데이터를 불러오는 동안 loding 컴포넌트 출력
- [ ] react-router-dom 버전은 V6로 적용
- [ ] 값에 따라 class추가시 classNames 모듈 사용해보기

### 네비게이션

- [ ] prices, exchanges coins의 3개의 메뉴간의 페이지 이동
- [ ] 현재 페이지에 해당하는 메뉴에 active 효과
- [ ] root 페이지는 prices 이동
- [ ] 라우터에 없는 url 입력시 Not Found 화면

### prices 페이지

- [ ] name, symbol, price가 있는 목록 구현
- [ ] 리스트는 rank 기준 최대 30개까지 오름차순 정렬
- [ ] quotes는 usd로 고정, price는 소숫점 둘째자리까지 출력

### exchanges 페이지

- [ ] 코인 거래소의 name, description, link, apiStatus, websiteStatus가 있는 목록 구현
- [ ] apiStatus, websiteStatus가 모두 true인 코인만 출력
- [ ] adjustedRank null 제외하고 최대 5위까지,
- [ ] name을 기준으로 오름차순 정렬
- [ ] 설명은 최대 200자이며 초과할 때만 말줄임 표시를 한다
- [ ] links의 website, twitter는 string 배열로 작업 (twitter는 없을 수도 있다.)
- [ ] 링크가 없으면 해당 항목 미노출 처리
- [ ] 링크 클릭 시 새 탭에서 페이지 이동

### Coins 페이지

- [ ] rank, name, symbol 및 화살표 아이콘이 있는 목록 구현
- [ ] 화살표 클릭시 상세 페이지로 이동

### Coins 상세페이지

- [ ] 타이틀 (name, symbol), description 출력
- [ ] markets, exchanges 버튼 구현
- [ ] markets 버튼 클릭시 exchangeName, marketUrl 목록 구현
- [ ] marketUrl이 null이 아닌 아이템으로 최대 10개 노출
- [ ] marketUrl 링크 클릭 시 새창 이동
- [ ] exchanges 버튼 클릭시 환전소 name, fiats 목록 구현
- [ ] fiats length가 1 이상인 아이템으로 최대 10개 노출
      <br />
      <br />

## 과제 이후

<details open>
  <summary>더 공부해야 되는 내용들</summary>
  과제 이후 부족했던 부분이나 더 공부할 내용을 기록합니다.
</details>
<details open>
  <summary>관심 토픽</summary>
  새롭게 관심이 생긴 부분을 기록합니다.
</details>
<details open>
  <summary>유용한 사이트</summary>
	 과제를 하면서 유용했던 사이트를 기록합니다.
</details>
