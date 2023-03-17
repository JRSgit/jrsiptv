import React, { Component } from 'react';

import { Card } from '../../componentes/Card/card';

import './styles.css';
import zap from './zap.png'


export default class Main extends Component {
  render() {
    return (
      <div>

        <div className='inicio'>
          <h1>Bem vindo ao Painel de pagamento da sua IPTV</h1>
          <h3>Há Varias formas de pagamento!clique no botão e veja..</h3>
          <div className="contato">
            <label htmlFor="">Contato</label>
            <strong><img src={zap} alt="" />(73) 98206-4879</strong>
          </div>
        </div>

        <div className='product'>
          <Card
            title="SD"
            content="Lista iptv contendo todos os canais, filmes e series com qualidade SD!"
            price={15}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-f68cd84b-ddfb-4d43-a500-c2893bf0f6d3"
          />
          <Card
            title="SD e HD"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD e HD!"
            price={20}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-b4f0e47a-36c7-450c-baa0-39a49a96c740"
          />
          <Card
            title="HD, FULLHD"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD, HD e FullHd!"
            price={25}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978"
          />
          <Card
            title="FULLHD e Adultos"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD, HD e FullHd e Adultos!"
            price={30}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978"
          />
          <Card
            title="SD Ultra HD"
            content="Lista iptv contendo todos os canais, filmes e series com qualidade SD!"
            price={35}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-f68cd84b-ddfb-4d43-a500-c2893bf0f6d3"
          />
          <Card
            title="SD e HD Super HD"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD e HD!"
            price={40}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-b4f0e47a-36c7-450c-baa0-39a49a96c740"
          />
          <Card
            title="HD, FULLHD Smoltion"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD, HD e FullHd!"
            price={45}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978"
          />
          <Card
            title="FULLHD e Adultos Selection"
            content="Lista iptv contendo todos os canais,
            filmes e series com qualidade SD, HD e FullHd e Adultos!"
            price={50}
            link="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978"
          />
        </div>
      </div>
    );
  }
}