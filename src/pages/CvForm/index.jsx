import { React, useEffect } from 'react';
import { DatePicker, Form, Input, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { getValueInForm } from '../../reduxSlice/cvFormSlice';
import Activity from './Activity';
import Education from './Education';
import Experience from './Experience';
import Information from './Information';
import Skills from './Skills';
import { useNavigate } from 'react-router-dom';

function CvForm() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleFinish = (finalData) => {
        console.log(finalData);
        dispatch(getValueInForm(finalData));
        navigate('../template');
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

    const dateFormat = 'YYYY/MM/DD';

    return (
        <div className="cv-form">
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
                <Information />
                <div className="cv-form__form-group">Thông tin liên hệ</div>
                <Form.Item
                    name="dayOfBirth"
                    label="Ngày sinh"
                    style={{ flex: 'none' }}
                    required
                    rules={[{ required: true, message: 'Vui lòng nhập ngày sinh của bạn' }]}
                >
                    <DatePicker format={dateFormat} />
                </Form.Item>
                <Form.Item name="sex" label="Giới tính" required rules={[{ required: true, message: 'Vui lòng chọn mục giới tính' }]}>
                    <Radio.Group>
                        <Radio value={0}>Nu</Radio>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Orther</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="email" label="Email" required rules={[{ required: true, message: 'Hãy nhập email của bạn' }]}>
                    <Input type="email"></Input>
                </Form.Item>
                <Form.Item name="phone" label="Số điện thoại" required rules={[{ required: true, message: 'Hãy nhập số điện thoại của bạn' }]}>
                    <Input type="phone"></Input>
                </Form.Item>
                <Form.Item name="address" label="Địa chỉ" required rules={[{ required: true, message: 'Hãy nhập địa chỉ của bạn' }]}>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <Skills />
                <div className="cv-form__form-group">Sở thích</div>
                <Form.Item name="hobby" label="Sở thích" required rules={[{ required: true, message: 'Hãy nhập sở thích của bạn' }]}>
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
