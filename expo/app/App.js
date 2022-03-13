import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {DefaultTheme, List, Provider as PaperProvider, TextInput } from 'react-native-paper';
import CarrinhoCompras from './components/CarrinhoCompras';
import Produtos from './components/Produtos';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};


export default function App() {

  const [produtosCarrinho, setProdutosCarrinho] = useState([{"nome":"TV", quantidade:2}, {"nome":"Celular", quantidade:3}]);

  const [produtos, setProdutos] = useState([{"nome":"TV", quantidade:2}, {"nome":"Celular", quantidade:3}]);

  const escolherProduto = (produto) =>{
      let produtoAtualizado = []
      produtosCarrinho.forEach(produtoCarrinho => {
        
        if(produtoCarrinho.nome === produto.nome)
          produtoCarrinho.quantidade = produtoCarrinho.quantidade + 1
       
          produtoAtualizado.push(produtoCarrinho)
      })

      setProdutosCarrinho(produtoAtualizado)
      console.log(produtosCarrinho)

  }


  return (
    <PaperProvider theme={theme}>
      {/* <Exemplo /> */}
      <CarrinhoCompras produtos={produtosCarrinho} />
      <Produtos escolherProduto={escolherProduto} produtos={produtos} />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});