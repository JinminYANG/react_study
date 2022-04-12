import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.post('/api/auth/check');
// 여기 왜 get으로 해놨는지 모르겠는데 post로 userData 보내야 검사 가능

// 로그아웃
export const logout = () => client.post('/api/auth/logout');