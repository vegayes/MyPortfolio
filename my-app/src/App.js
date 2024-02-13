import logo from './logo.svg';
import './App.css';

import _App from './eunseo/_App';
import Props from './eunseo/Props';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Props props_val = "THIS IS PROPS"/>
  );
}

export default App;


/*
  JSX 문법
*/

// 1) 닫힌 태그 사용

// 2) 반드시 부모 요소 하나가 감싸는 형태여야 함.
// div , fragment , <></>

/*
function App() {
	return (
		<>
			<div>Hello</div>
			<div>Eunseo!</div>
		</>
	);
}*/


// 3) 자바스크립트 표현식
// 내부 코드에 {} 감싸줌

/*
function App() {
	const name = 'Eunseo';
	return (
		<div>
			<div>Hello</div>
			<div>{name}!</div>
		</div>
	);
}
*/

// 4) 삼항 연산자 사용
// 4-1) 외부 
/*
function App() {
	let desc = '';
	const loginYn = 'Y';
	if(loginYn === 'Y') {
		desc = <div>Eusneo 입니다.</div>;
	} else {
		desc = <div>비회원 입니다.</div>;
	}
	return (
		<>
			{desc}
		</>
	);
} 
*/

// 4-2) 내부
/* 
function App() {
	const loginYn = 'Y';
	return (
		<>
			<div>
				{loginYn === 'Y' ? (
					<div>Eunseo 입니다.</div>
				) : (
					<div>비회원 입니다.</div>
				)}
			</div>
		</>
	);
}
*/