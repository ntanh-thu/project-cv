import { DatePicker, Form, Input, Button } from 'antd';
import { React } from 'react';

function Education() {
    return (
        <>
            <div className="cv-form__form-group">Học vấn</div>
            <Form.List name="educations">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <div key={field.key} style={{}}>
                                    <div>
                                        <Form.Item
                                            name={[index, 'education']}
                                            required
                                            label="Ngành học / Môn học"
                                            rules={[{ required: true, message: 'Ngành học chưa được điền' }]}
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'school']}
                                            required
                                            label="Tên trường học"
                                            rules={[{ required: true, message: 'Tên trường của ngành bạn học' }]}
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'scholastic']}
                                            required
                                            label="Niên khóa"
                                            rules={[{ required: true, message: 'Niên khóa của ngành bạn học' }]}
                                        >
                                            <DatePicker.RangePicker />
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'description']}
                                            required
                                            label="Mô tả chi tiết"
                                            rules={[{ required: true, message: 'Hãy miêu tả chi tiết về ngành bạn học' }]}
                                        >
                                            <Input.TextArea></Input.TextArea>
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
                                    Thêm trường
                                </Button>
                            </div>
                        </div>
                    );
                }}
            </Form.List>
        </>
    );
}

export default Education;
