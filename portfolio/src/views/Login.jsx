import React from "react";

const Login = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>로그인</h1>
      <form style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            이메일:
            <input type="email" name="email" style={{ marginLeft: "10px" }} />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            비밀번호:
            <input type="password" name="password" style={{ marginLeft: "10px" }} />
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
