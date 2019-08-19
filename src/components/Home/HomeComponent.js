import React from 'react';
import 'antd/dist/antd.css';

import { Card } from 'antd';

export default function Home() {
  return (
    <Card style={{ marginTop: '4%', marginLeft: '10%', width: '80%' }}>
      <div className="container">
        <h1>VANTum</h1>
        <img
          className="gif"
          src={process.env.PUBLIC_URL + '/droneGif.gif'}
          alt="drone-gif"
        />
        <p>
          Os Drones estão se popularizando cada vez mais nos últimos anos,
          porém, nem todas as pessoas conhecem o termo VANT ou quais são as
          diferenças que existem entre eles. A abreviatura VANT significa{' '}
          <i>Veículo Aéreo Não Tripulado</i>. O VANT pode ser definido como um
          veículo capaz de voar na atmosfera, projetado para não receber um
          piloto no seu interior, sendo operado por controle remoto ou de forma
          autônoma, por meio de softwares embarcados em computadores ou tablets.
          Drone é um veículo aéreo não tripulado e controlado remotamente que
          pode realizar inúmeras tarefas. Utilizados tanto em guerras quanto
          para entregar pizza, estes equipamentos estão cada vez mais presentes
          em diversos lugares do mundo. Vai ficar de fora dessa?
          <br /> Junte-se com a <b>Vantum</b> por um mundo mais tecnológico e
          inovador.
        </p>
      </div>
    </Card>
  );
}
