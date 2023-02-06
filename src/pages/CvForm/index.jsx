import { DatePicker, Form, Input } from 'antd';
import { React } from 'react';
import Activity from './Activity';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function CvForm() {
    const [form] = Form.useForm();
    const handleFinish = (finalData) => {
        console.log(finalData);
    };
    return (
        <div className="cv-form">
            <div className="cv-form-head">
                <div className="cv-form-head-title">Thông tin của CV</div>
            </div>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} className="cv-form__form" form={form} onFinish={handleFinish}>
                <div className="cv-form__form-group">Thông tin cơ bản</div>
                <Form.Item name="fullName" label="Họ và Tên">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="target" label="Mục tiêu nghề nghiệp">
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <div className="cv-form__form-group">Thông tin liên hệ</div>
                <Form.Item name="dayOfBirth" label="Ngày sinh" style={{ flex: 'none' }}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <Input type="email"></Input>
                </Form.Item>
                <Form.Item name="phone" label="Số điện thoại">
                    <Input type="phone"></Input>
                </Form.Item>
                <Form.Item name="address" label="Địa chỉ">
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <Skills />
                <div className="cv-form__form-group">Sở thích</div>
                <Form.Item name="hobby" label="Sở thích">
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <Education />
                <Experience />
                <Activity />
            </Form>
            <div className="cv-form-footer">
                <div>Trở về</div>
                <div
                    onClick={() => {
                        form.submit();
                    }}
                >
                    Chọn mẫu CV
                </div>
            </div>
        </div>
    );
}

export default CvForm;