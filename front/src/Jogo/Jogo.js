import React from 'react';
import Questoes from './Questoes';

export default function Jogo() {


const questoes = [
  {
      questao: "O sol é uma estrela? ",
      resposta: "Sim"
  },
  {
      questao: "Habitamos em uma das galáxias mais simples de todo o universo?  ",
      resposta: "Sim"
  },
  {
      questao: "Onde está localizada a maior estrela descoberta no século XXI? ",
      resposta: "Nebulosa de Tarântula"
  },
  {
      questao: "Há quantos anos luzes Andromeda se encontra de nossa galáxia? ",
      resposta: "22,54 milhões de anos-luz"
  },
  {
      questao: "O sol é capaz de virar um buraco negro após a sua morte? ",
      resposta: "Negativo. Por ser uma estrela pequena, ela será uma Anã Branca, se resfriará e se apagará"
  },
  {
      questao: "Onde as estrelas nascem? ",
      resposta: "Nas nebulosas"
  },
  {
      questao: "O que vem depois de netuno? ",
      resposta: "Planeta X, o possível destruidor de planetas"
  }
]


      return (
      <>
      <Questoes questoes={questoes} />
        </>
        )
}
