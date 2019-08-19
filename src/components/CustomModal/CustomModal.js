import React from 'react';
import { Modal, Button } from 'antd';
import UpdateForm from '../../components/UpdateForm/UpdateForm';

class CustomModal extends React.Component {
  state = {
    loading: false,
    visible: this.props.visibleModal,
    user: this.props.userModal
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visibleModal,
      user: nextProps.userModal
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title={'Editar usuário: ' + this.state.user.name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Voltar
            </Button>
          ]}
        >
          <UpdateForm user={this.state.user} />
        </Modal>
      </div>
    );
  }
}

export default CustomModal;
