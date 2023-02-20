import { Col, DatePicker, Form, Input, Row, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { React, useEffect } from 'react';
import Activity from './Activity';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function CvForm() {
    const [form] = Form.useForm();
    const handleFinish = (finalData) => {
        console.log(finalData);
    };
    const newData = {
        fullName: '',
        address: '',
        dayOfBirth: '',
        email: '',
        hobby: '',
        phone: '',
        target: '',
        activity: [{ position: '', organization: '', participationTime: '', description: '' }],
        skills: [{ skillName: '', description: '' }],
        educations: [{ description: '', education: '', scholastic: '', school: '' }],
        experience: [{ company: '', position: '', workingTime: '' }]
    };
    useEffect(() => {
        form.setFieldsValue(newData);
    }, []);
    const beforeUpload = (file) => {
        console.log(file);
    };
    return (
        <Row className="cv-form">
            <Col span={18}>
                <div className="cv-form-head">
                    <div className="cv-form-head-title">Thông tin của CV</div>
                </div>
                <Form
                    labelCol={{ span: 6 }}
                    initialValues={newData}
                    wrapperCol={{ span: 15 }}
                    className="cv-form__form"
                    form={form}
                    onFinish={handleFinish}
                    labelAlign="left"
                    scrollToFirstError="true"
                >
                    <div className="cv-form__form-group">Thông tin cơ bản</div>
                    <Row>
                        <Col span={6}>
                            <Form.Item name="img">
                                <Upload name="img" beforeUpload={beforeUpload}>
                                    <PlusOutlined />
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={18}>
                            <Form.Item name="fullName" label="Họ và Tên" required>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item name="target" label="Mục tiêu nghề nghiệp" required>
                                <Input.TextArea></Input.TextArea>
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className="cv-form__form-group">Thông tin liên hệ</div>
                    <Form.Item name="dayOfBirth" label="Ngày sinh" style={{ flex: 'none' }} required>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="email" label="Email" required>
                        <Input type="email"></Input>
                    </Form.Item>
                    <Form.Item name="phone" label="Số điện thoại" required>
                        <Input type="phone"></Input>
                    </Form.Item>
                    <Form.Item name="address" label="Địa chỉ" required>
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                    <Skills />
                    <div className="cv-form__form-group">Sở thích</div>
                    <Form.Item name="hobby" label="Sở thích" required>
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
            </Col>
            <Col span={6}></Col>
        </Row>
    );
}

export default CvForm;
