import { React } from 'react';
import { Col, Form, Input, Row, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

function Information() {
    const [img, setImg] = useState('');
    const beforeUpload = (file) => {
        console.log(file);
    };
    const onChangeImage = (files) => {
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById(outImage).src = fr.result;
            };
            fr.readAsDataURL(files[0]);
        }
    };
    return (
        <>
            <div className="cv-form__form-group">Thông tin cơ bản</div>
            <Row className="cv-form__form-rowInfo">
                <Col span={6}>
                    <Form.Item name="img">
                        <input
                            type="file"
                            onChange={(file) => {
                                onChangeImage(file.target.files);
                                console.log(file);
                            }}
                        ></input>
                        <UserOutlined style={{ fontSize: '100px', color: '#14279b' }} />
                        <img src={img} style={{ width: '200px', height: '200px' }} />
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
        </>
    );
}

export default Information;
