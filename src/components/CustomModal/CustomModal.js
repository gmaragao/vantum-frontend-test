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
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
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
