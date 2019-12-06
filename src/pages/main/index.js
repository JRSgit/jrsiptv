import React, { Component } from 'react';

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
            <strong><img src={zap} alt=""/>(73) 98206-4879</strong>
          </div>
        </div>
      <div className='product'>
          <article>
            <h2>SD</h2>
            <p>
              Lista iptv contendo todos os canais, filmes e series com qualidade SD!
        
            </p>
            <p>Valor R$ 15,00!</p>
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-f68cd84b-ddfb-4d43-a500-c2893bf0f6d3">
              Pagar!
              </a>
          </article>
          <article>
            <h2>SD e HD</h2>
            <p>Lista iptv contendo todos os canais,
              filmes e series com qualidade SD e HD!
            </p>
            <p>Valor R$ 20,00!</p>
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-b4f0e47a-36c7-450c-baa0-39a49a96c740">
              Pagar!
              </a>
          </article>
          <article >
            <h2>HD, FULLHD</h2>
            <p>Lista iptv contendo todos os canais,
               filmes e series com qualidade SD, HD e FullHd!
            </p>
            <p>Valor R$ 25,00!</p>
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-7b8d562a-977c-49b9-a5a4-525b3e5c7978">
              Pagar!
            </a>
          </article>
          <article >
            <h2>FULLHD e Adultos</h2>
            <p>Lista iptv contendo todos os canais,
               filmes e series com qualidade SD, HD e FullHd!
            </p>
            <p>Valor R$ 30,00!</p>
            <a href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=57414005-103eb5a4-7c7f-4e6e-be93-50cb136cd909">
              Pagar!
            </a>
          </article>
        </div>
        </div>
      );
  }
}