import { DatePicker, Form, Input, Button } from 'antd';
import { React } from 'react';

function Experience() {
    return (
        <>
            <div className="cv-form__form-group">Kinh nghiệm làm việc</div>
            <Form.List name="experience">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <div key={field.key} style={{}}>
                                    <div>
                                        <Form.Item
                                            name={[index, 'position']}
                                            required
                                            label="Vị trí làm việc"
                                            rules={[{ required: true, message: 'Vui lòng điền vị trí bạn từng làm việc' }]}
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'company']}
                                            required
                                            label="Tên công ty"
                                            rules={[{ required: true, message: 'Tên công ty bạn từng làm việc' }]}
                                        >
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'workingTime']}
                                            required
                                            label="Bắt đầu - Kết thúc"
                                            rules={[{ required: true, message: 'Bạn đã làm vị trí trên được bao lâu' }]}
                                        >
                                            <DatePicker.RangePicker></DatePicker.RangePicker>
                                        </Form.Item>
                                        <Form.Item
                                            name={[index, 'descriptWork']}
                                            required
                                            label="Mô tả công việc"
                                            rules={[{ required: true, message: 'Hãy mô tả vị trí công việc bạn làm' }]}
                                        >
                                            <Input.TextArea />
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
                                    Thêm công ty
                                </Button>
                            </div>
                        </div>
                    );
                }}
            </Form.List>
        </>
    );
}

export default Experience;
