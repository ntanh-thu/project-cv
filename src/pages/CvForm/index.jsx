import { DatePicker, Form, Input } from 'antd';
import { React } from 'react';

function CvForm() {
    return (
        <div className="cv-form">
            <div className="cv-form-head">
                <div className="cv-form-head-title">Thông tin cơ bản</div>
            </div>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 15 }} className="cv-form__form">
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
                <div className="cv-form__form-group">Các kỹ năng</div>
                <Form.Item name="skill" label="Tên kỹ năng">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="description" label="Mô tả kỹ năng">
                    <Input></Input>
                </Form.Item>
                <div className="cv-form__form-group">Sở thích</div>
                <Form.Item name="hobby" label="Sở thích">
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <div className="cv-form__form-group">Học vấn</div>
                <Form.Item name="" label="Ngành học / Môn học">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="school" label="Tên trường học">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="" label="Niên khóa">
                    <DatePicker.RangePicker />
                </Form.Item>
                <Form.Item name="description" label="Mô tả chi tiết">
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
                <div className="cv-form__form-group">Kinh nghiệm làm việc</div>
                <Form.Item name="" label="Vị trí làm việc">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="" label="Tên công ty">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="" label="Bắt đầu - Kết thúc">
                    <DatePicker.RangePicker></DatePicker.RangePicker>
                </Form.Item>
                <div className="cv-form__form-group">Hoạt động</div>
                <Form.Item name="" label="Vị trí tham gia">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="" label="Tên tổ chức">
                    <Input></Input>
                </Form.Item>
                <Form.Item name="" label="Thời gian">
                    <DatePicker.RangePicker></DatePicker.RangePicker>
                </Form.Item>
                <Form.Item name="" label="Mô tả chi tiết">
                    <Input></Input>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CvForm;
