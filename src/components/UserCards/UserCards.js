import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import api from '../../services/api';

import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class UserCards extends React.Component {
  state = {
    users: []
  };
  getUsers = async () => {
    await api
      .get('/user')
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
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
  };
  componentDidMount() {
    this.getUsers().then(() => {
      console.log('users:' + this.state.users[0]);
    });
  }

  handleDelete = async (e, user) => {
    console.log(user);

    await api
      .delete(`/user/${user._id}`)
      .then(res => {
        console.log(res.data);
        this.getUsers();
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
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <Card
            style={{ width: 200, margin: '1rem', float: 'left' }}
            cover={
              <img
                alt="example"
                src="https://media.licdn.com/dms/image/C4E0BAQFCsuUlcwrOBQ/company-logo_200_200/0?e=2159024400&v=beta&t=Obu5ehcLMXjhbFSkQSsQTWPzuKompMm_glXX3uyy73A"
              />
            }
            actions={[
              <Icon
                type="delete"
                key="delete"
                onClick={e => this.handleDelete(e, user)}
                value={user.id}
              />,
              <Icon
                type="edit"
                key="edit"
                onClick={e => this.handleEdit(e, user)}
                value={user.id}
              />
            ]}
          >
            <Meta
              avatar={
                <Avatar src="http://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png" />
              }
              title={user.name}
              description={'Email:' + user.email + 'Endereço: ' + user.address}
            />
          </Card>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<UserCards />, document.getElementById('root'));

export default UserCards;
