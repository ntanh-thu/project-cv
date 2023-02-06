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
                                        <Form.Item name={[index, 'position']} label="Vị trí làm việc">
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item name={[index, 'company']} label="Tên công ty">
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item name={[index, 'workingTime']} label="Bắt đầu - Kết thúc">
                                            <DatePicker.RangePicker></DatePicker.RangePicker>
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
