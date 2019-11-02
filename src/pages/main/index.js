import React, { Component,  } from 'react';

import './styles.css';

export default class Main extends Component {
  render() {
    return (
		<body>
    <h1>Bem vindo ao Painel de Pagamento da sua IPTV!</h1>
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
          <h3>Canais</h3>
            <h3>SD</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Todos os canais disponiveis, sport, filmes, series com qualidade SD para uma net com o minino de  2mb,
              garantindo a diverção para você e sua familiar. 
            </p>
            <strong>R$ 15,00 </strong>
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-f68cd84b-ddfb-4d43-a500-c2893bf0f6d3">
              Pagar!
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h3>Canais</h3>
            <h3>SD e HD</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Todos os canais disponiveis, sport, filmes, series com qualidade SD e HD para uma net com  no minino de 3mb,
              garantindo a diverção para você e sua familiar</p>
              <strong>R$ 20,00 </strong>
              <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-b4f0e47a-36c7-450c-baa0-39a49a96c740">
              Pagar!
              </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
          <h3>Canais</h3>
            <h3>HD e FullHD</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Todos os canais disponiveis, sport, filmes, series com qualidade SD, HD e Full HD para uma net com  no minino de 5mb,
              garantindo a diverção para você e sua familiar.</p>
              <strong>R$ 25,00 </strong>
              <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978">
              Pagar!
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h3>Todos Canais</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>Todos os canais disponiveis, sport, filmes, series com qualidade SD, HD, Full HD e Adultos para uma net com  no minino de 5mb,
            garantindo a diverção para você e sua familiar.</p>
              <strong>R$ 30,00 </strong>
              <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-103eb5a4-7c7f-4e6e-be93-50cb136cd909">
              Pagar!
            </a>
          </div>
        </div>
      </div>
      </div>
	</body>
      );
  }
}