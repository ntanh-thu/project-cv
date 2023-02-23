import { DatePicker, Form, Input, Button } from 'antd';
import { React } from 'react';

function Activity() {
    return (
        <>
            <div className="cv-form__form-group">Hoạt động</div>
            <Form.List name="activity">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <div key={field.key}>
                                    <div>
                                        <Form.Item name={[index, 'position']} label="Vị trí tham gia">
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item name={[index, 'organization']} label="Tên tổ chức">
                                            <Input></Input>
                                        </Form.Item>
                                        <Form.Item name={[index, 'participationTime']} label="Thời gian">
                                            <DatePicker.RangePicker></DatePicker.RangePicker>
                                        </Form.Item>
                                        <Form.Item name={[index, 'description']} label="Mô tả chi tiết">
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
                                    Thêm tổ chức
                                </Button>
                            </div>
                        </div>
                    );
                }}
            </Form.List>
        </>
    );
}

export default Activity;
