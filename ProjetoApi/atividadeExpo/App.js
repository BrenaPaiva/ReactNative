import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, Text, View, Alert} from 'react-native';


export default function App() {

  const [nome, setNome] = useState("Estrela")
  const [descricao, setDescricao] = useState("Tarantula")
  
  return (
    <View style={styles.container}>
      <Text>Nome</Text>
     <TextInput
     onChangeText={(nome) => { setNome(nome)}}
     value={nome}
     />

    <Text>Descrição</Text>
     <TextInput
     onChangeText={(descricao) => { setDescricao(descricao)}}
     value={descricao}
     />
     <Button
     title="Salvar"
     onPress={()=>{ 
       let time= {nome, descricao}
          console.log(time)      
    }}
     />
    </View>
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
