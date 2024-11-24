import React, {useEffect, useState} from "react";
import { Form, Input, Button, message} from "antd";
import{ useNavigate } from "react-router-dom";
import {getUserData} from "../services/userService";

// const user = {
//   Id:"admin",
//   Password:"111111",
// }

const Login = () => {

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
      console.log("유저 데이터 페치 완료");
    };
    
     fetchUserData();

  }, []);

  const onFinish = (values) => {
    console.log("Success: ", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("failed: ", errorInfo)
  };

  const handleLogin = (values) => {
    const { id, password } = values;

    if (id === userData.userID && password === userData.userPw) {
      // 세션에 사용자 데이터 저장
      sessionStorage.setItem("isLoggedIn", JSON.stringify({ id }));
      message.success("로그인 성공!");
      console.log("로그인 성공: ", { id });
      // 페이지 리다이렉트 로직 추가 가능
      navigate("/");
    } else {
      if (id != userData.userID){
        message.error("아이디가 잘못되었습니다.");
      }
      if(password != userData.userPw){
        message.error("비밀번호가 잘못되었습니다.");
      }
      // message.error("아이디 또는 비밀번호가 잘못되었습니다.");
      console.log("로그인 실패");
    }
  };

  // 로그아웃 (세션 제거)
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    message.success("로그아웃 완료!");
    console.log("로그아웃 완료");
  };

  return (
    <div style={{ maxWidth: "400px", 
      margin: "50px auto", 
      padding: "20px", 
      boxShadow: "0 0 10px rgba(0,0,0,0.1)", 
      borderRadius: "8px" }}>

      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>로그인</h1>
      {/* <form style={{ display: "inline-block", textAlign: "left" }}>
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
      </form> */}
      <Form
        name="login"
        onFinish={handleLogin}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <Form.Item
          label="아이디"
          name="id"
          rules={[
            {required: true, message: "아이디를 입력해주세요"}
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{required: true, message: "비밀전호를 입력하세요"}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width:"100%"}}>
            로그인
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
