import { Form, Input } from 'antd';
import { contenteditableSingleStore } from './store';

export function SingleContenteditableForm() {
  const store = contenteditableSingleStore();

  return (
    <Form
      labelCol={{ span: 4 }}
      initialValues={store}
      onValuesChange={(_changedValues: any, values: any) => {
        console.log(values);
      }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item
        label="contenteditable"
        name="contenteditable"
      >
        <div contentEditable />
      </Form.Item>
      <Form.Item
        label="textarea"
        labelCol={{ span: 4 }}
        name="textarea"
        wrapperCol={{ span: 16 }}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
}
