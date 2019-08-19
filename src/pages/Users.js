import React from 'react';
import UserCards from '../components/UserCards/UserCards';
import LayoutApp from '../components/LayoutApp/LayoutApp';
import { Card } from 'antd';

class Users extends React.Component {
  render() {
    return (
      <div>
        <LayoutApp>
          <Card
            style={{
              marginTop: 50,
              marginBottom: 70,
              marginLeft: '10%',
              width: '80%'
            }}
          >
            <UserCards />
          </Card>
        </LayoutApp>
      </div>
    );
  }
}
export default Users;
