import { Button, Col, Form, Input, Row } from 'antd';
import { React } from 'react';

function Skills() {
    return (
        <>
            <div className="cv-form__form-group">Các kỹ năng</div>
            <Form.List name="skills">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <div key={field.key}>
                                    <div>
                                        <Form.Item name={[index, 'skillName']} label="Tên kỹ năng" required rules={[{ required: true }]}>
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item name={[index, 'description']} label="Mô tả kỹ năng" required rules={[{ required: true }]}>
                                            <Input></Input>
                                        </Form.Item>
                                    </div>
                                    {fields.length > 1 ? (
                                        <div>
                                            <Button onClick={() => remove(field.name)}>Xóa</Button>
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button onClick={() => add()} style={{ margin: '20px' }}>
                                    Thêm kỹ năng
                                </Button>
                            </div>
                        </div>
                    );
                }}
            </Form.List>
        </>
    );
}

export default Skills;
