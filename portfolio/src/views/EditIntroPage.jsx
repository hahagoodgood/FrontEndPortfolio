import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, Button, Typography, message } from "antd";
import { getIntroduceData, updateIntroduceData } from "../services/introService";
import dayjs from "dayjs";
import{ useNavigate } from "react-router-dom";

const { Title } = Typography;


const EditIntroPage = () => {
    const [form] = Form.useForm();
    const [introData, setIntroData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getIntroduceData();
            if (data) {
                setIntroData(data);
                form.setFieldsValue({
                    ...data,
                    birth: dayjs(data.birth.toDate()),
                    introduce: data.introduce.replace(/\\n/g, "\n")
                });
            }
        };
        fetchData();
    }, [form]);

    const onFinish = async (values) => {
        try {
            if (introData && introData.id) {
                await updateIntroduceData(introData.id, {
                    ...values,
                    birth: values.birth.toDate(),
                    imgURL: introData.imgURL,
                    introduce: values.introduce.replace(/\r?\n/g, "\\n"),
                     
                });
                navigate("/");
                message.success("데이터가 성공적으로 업데이트되었습니다.");
                
            }
        } catch (error) {
            message.error("데이터 업데이트 중 오류가 발생했습니다.");
            console.error(error);
        }
    };

    if (!introData) return <p>로딩 중...</p>;

    return (
        <div
        className="editIntro__inner" 
        /* style={{ maxWidth: 600, margin: "0 auto", padding: "20px", marginTop:"50px" }} */>
            <Title level={2} style={{ textAlign: "center" }}>
                소개글 수정
            </Title>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={introData}
            >
                <Form.Item
                    label="이름 (한글)"
                    name="NameKor"
                    rules={[{ required: true, message: "이름(한글)을 입력해주세요." }]}
                >
                    <Input placeholder="예: 홍길동" />
                </Form.Item>

                <Form.Item
                    label="이름 (영문)"
                    name="NameEng"
                    rules={[{ required: true, message: "이름(영문)을 입력해주세요." }]}
                >
                    <Input placeholder="예: Hong gil dong" />
                </Form.Item>

                <Form.Item
                    label="생년월일"
                    name="birth"
                    rules={[{ required: true, message: "생년월일을 선택해주세요." }]}
                >
                    <DatePicker
                        format="YYYY-MM-DD"
                        style={{ width: "100%" }}
                        placeholder="생년월일 선택"
                    />
                </Form.Item>

                <Form.Item
                    label="전화번호"
                    name="phone"
                    rules={[{ required: true, message: "전화번호를 입력해주세요." }]}
                >
                    <Input placeholder="예: 010-1234-9874" />
                </Form.Item>

                <Form.Item
                    label="이메일"
                    name="email"
                    rules={[
                        { required: true, message: "이메일을 입력해주세요." },
                        { type: "email", message: "유효한 이메일을 입력해주세요." },
                    ]}
                >
                    <Input placeholder="예: example@example.com" />
                </Form.Item>

                <Form.Item
                    label="GitHub"
                    name="github"
                    rules={[{ required: true, message: "GitHub URL을 입력해주세요." }]}
                >
                    <Input placeholder="예: https://github.com/username" />
                </Form.Item>

                <Form.Item
                    label="소개글 제목"
                    name="introduce_title"
                    rules={[{ required: true, message: "소개글 제목을 입력해주세요." }]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="소개글"
                    name="introduce"
                    rules={[{ required: true, message: "소개글을 입력해주세요." }]}
                >
                    <Input.TextArea
                        rows={6}
                        placeholder="자기소개를 입력해주세요."
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        수정하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditIntroPage;
