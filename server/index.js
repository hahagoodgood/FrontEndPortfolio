const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// React 정적 파일 제공
app.use(express.static(path.join(__dirname, "../portfolio/build")));

// API 엔드포인트
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// React의 모든 라우트를 지원
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio/build/index.html"));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
