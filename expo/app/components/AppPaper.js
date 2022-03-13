import React from 'react';
import { Appearance } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './Home';





const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors:{
    ...DefaultTheme.colors,
    background: '#F8E0EC',
    primary: 'pink',
    accent: '#BDBDBD',
    danger: '#ed1c24'
    
  }
}

const dark = {
  ...DefaultTheme,
  roundness: 2,
  colors:{
    ...DefaultTheme.colors,
    background: '#131313',
    primary: 'pink',
    accent: '#fff',
    danger: '#ed1c24'
  }
};

  const colorTema = Appearance.getColorScheme();


export default function App() {
  console.log(colorTema);
  return (
    <PaperProvider theme={colorTema == 'dark' ? dark : theme}>
      
      <Home/>
    </PaperProvider>
   
   
  );
}