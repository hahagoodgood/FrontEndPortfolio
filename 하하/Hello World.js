// express 모듈 불러오기
const express = require('express');

// express 애플리케이션 생성
const app = express();

// 포트 번호 설정
const PORT = 3000;

// 기본 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
