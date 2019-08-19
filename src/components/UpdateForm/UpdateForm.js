import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Button,
  Row,
  Col,
  Alert
} from 'antd';
import api from '../../services/api';
import 'antd/dist/antd.css';

import ReactDOM from 'react-dom';

const { Option } = Select;

class UpdateForm extends React.Component {
  state = {
    confirmDirty: false,
    visibleSuccess: false,
    visibleError: false,
    error: [],
    registeredUser: [],
    user: {
      name: 'Nome',
      phoneNumber: 'Telefone',
      address: 'Endereço',
      email: 'Email'
    }
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      user: nextProps.user
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        await api
          .put(`user/${this.state.user._id}`, values)
          .then(res => {
            this.state.registeredUser.push(res.data.email);
            this.setState({ visibleSuccess: true });
          })

          .catch(error => {
            if (error.response) {
              this.state.error.push(error.response.data.message);
              this.setState({ visibleError: true });
              console.log(error.response.data.message);
              console.log(error.response.status);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error);
          });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleClose = () => {
    this.setState({ visibleSucess: false, visibleError: false });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 10 }
      }
    };

    const prefixSelector = getFieldDecorator('phoneNumber', {
      initialValue: `${this.state.user.phoneNumber}`
    })(
      <Select style={{ width: 70 }}>
        <Option value="21">21</Option>
        <Option value="53">53</Option>
        <Option value="51">51</Option>
      </Select>
    );

    return (
      <div>
        <div>
          {this.state.visibleSuccess ? (
            <Alert
              message={
                'O usuário com email: ' +
                this.state.registeredUser.pop() +
                ' foi atualizado com sucesso'
              }
              showIcon
              type="success"
              closable
              afterClose={this.handleClose}
            />
          ) : null}
          {this.state.visibleError ? (
            <Alert
              message={this.state.error.pop()}
              showIcon
              type="error"
              closable
              afterClose={this.handleClose}
            />
          ) : null}
        </div>
        <Form
          {...formItemLayout}
          style={{ marginTop: '4%', width: '100%' }}
          onSubmit={this.handleSubmit}
        >
          <Row>
            <Col>
              <Form.Item label="Nome">
                {getFieldDecorator('name', {
                  initialValue: `${this.state.user.name}`,

                  rules: [
                    {
                      required: true,
                      message: 'Por favor insira seu nome'
                    }
                  ]
                })(<Input />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label={
              <span>
                E-mail&nbsp;
                <Tooltip title="Insira um email válido e não registrado">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('email', {
              initialValue: `${this.state.user.email}`,

              rules: [
                {
                  type: 'email',
                  message: 'O email é inválido'
                },
                {
                  required: true,
                  message: 'Por favor insira seu e-mail'
                }
              ]
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Endereço">
            {getFieldDecorator('address', {
              initialValue: `${this.state.user.address}`,

              rules: [
                {
                  required: true,
                  message: 'Por favor insira seu endereço'
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Telefone&nbsp;
                <Tooltip title="Pode ser celular ou telefone fixo, não esqueça do DDD correto.">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('phoneNumber', {
              initialValue: `${this.state.user.phoneNumber}`,

              rules: [
                { required: true, message: 'Por favor insira seu número' }
              ]
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>

          <Form.Item style={{ marginLeft: '33%' }}>
            <Button type="primary" htmlType="submit">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedUpdateForm = Form.create({ name: 'update' })(UpdateForm);

ReactDOM.render(<WrappedUpdateForm />, document.getElementById('root'));

export default WrappedUpdateForm;
