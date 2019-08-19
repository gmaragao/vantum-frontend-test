import React from 'react';
import LayoutApp from '../components/LayoutApp/LayoutApp';
import '../components/LayoutApp/App.css';

import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default function HomePage() {
  return (
    <div>
      <LayoutApp>
        <Row>
          <Col>
            <Card
              hoverable
              style={{
                width: 200,
                margin: '1rem',
                marginLeft: '20%',
                float: 'left',
                borderRadius: '20% 20% 10% 10%'
              }}
              cover={
                <img
                  alt="huberto"
                  src="https://vantum.com.br/img/huberto2.3b66078f.jpg"
                  style={{ borderRadius: '20%' }}
                />
              }
            >
              <Meta
                title="Huberto Kaiser Filho"
                description="Diretor de tecnologia"
              />
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{
                width: 200,
                margin: '1rem',
                float: 'left',
                borderRadius: '20% 20% 10% 10%'
              }}
              cover={
                <img
                  alt="janice"
                  src="https://vantum.com.br/img/janice2.25c9d22f.jpg"
                  style={{ borderRadius: '20%' }}
                />
              }
            >
              <Meta title="Janice Silveira" description="Diretora Comercial" />
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{
                width: 200,
                margin: '1rem',
                float: 'left',
                borderRadius: '20% 20% 10% 10%'
              }}
              cover={
                <img
                  alt="leonardo"
                  src="https://vantum.com.br/img/leonardo2.65626877.jpg"
                  style={{ borderRadius: '20%' }}
                />
              }
            >
              <Meta
                title="Leonardo João"
                description="Diretor de desenvolvimento"
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              hoverable
              style={{
                width: 200,
                margin: '1rem',
                marginLeft: '38%',

                float: 'left',
                borderRadius: '20% 20% 10% 10%'
              }}
              cover={
                <img
                  alt="gabriel"
                  src="https://scontent.fpet1-1.fna.fbcdn.net/v/t1.0-9/62473737_2270709553010458_4426910031362916352_n.jpg?_nc_cat=108&_nc_oc=AQmVbXU8rhK5uUmOwLbi_ylxP7-RFAFV3gvNBkY4uiGSsTzJX2CMClVmHiSMsqY09cH3gnyi6VcKNP37QzN8Q9NJ&_nc_ht=scontent.fpet1-1.fna&oh=a1c3c4511a73f263e43d28e658a7fa1b&oe=5DD2335D"
                  style={{ borderRadius: '20%' }}
                />
              }
            >
              <Meta
                title="Gabriel Aragão"
                description="(futuro) Desenvolvedor"
              />
            </Card>
          </Col>
        </Row>
      </LayoutApp>
    </div>
  );
}
