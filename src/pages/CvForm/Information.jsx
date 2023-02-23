import { React } from 'react';
import { Col, Form, Input, Row, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const UploadImg = ({ onChange }) => {
    const [img, setImg] = useState('');
    const onChangeImage = (files) => {
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                setImg(fr.result);
                onChange(fr.result);
            };
            fr.readAsDataURL(files[0]);
        }
    };
    return (
        <>
            <div style={{ position: 'relative' }}>
                {img === '' ? (
                    <UserOutlined style={{ fontSize: '150px', color: '#14279b' }} />
                ) : (
                    <img src={img} style={{ width: '150px', height: '150px' }} />
                )}
            </div>
            <input
                type="file"
                onChange={(file) => {
                    onChangeImage(file.target.files);
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '150px', height: '150px' }}
                placeholder=""
            ></input>
        </>
    );
};

function Information() {
    const getImg = () => {};
    return (
        <>
            <div className="cv-form__form-group">Thông tin cơ bản</div>
            <Row className="cv-form__form-rowInfo">
                <Col span={8}>
                    <Form.Item name={'img'} rules={[{ required: true, message: 'Vui lòng chọn hình ảnh của bạn' }]} required>
                        <UploadImg />
                    </Form.Item>
                </Col>
                <Col span={16}>
                    <Form.Item name="fullName" label="Họ và Tên" required rules={[{ required: true, message: 'Vui lòng nhập tên của bạn' }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item name="target" label="Mục tiêu nghề nghiệp" required rules={[{ required: true, message: 'Hãy nhập mục tiêu nghề nghiệp của bạn' }]}>
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
}

export default Information;
