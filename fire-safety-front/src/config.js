// .env는 환경변수 파일로 key = value 형태로서 변수로 설정된 key에 해당하는 값을 process.evn.key 형태로 사용이 가능하다.

const BASE_URL = process.env.REACT_APP_SERVER_HOST;
export { BASE_URL };

/*
ex)
fetch(`${process.env.REACT_APP_SERVER_HOST}/user/signin`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  body: JSON.stringify({
    email: emailValue,
    password: pwValue,
  }),
});
*/
