import { Button, View } from "react-native"
import { useState } from "react"

export default function Bingo(props) {
    const [random, setRandom] = useState(Math.floor(Math.random() * 60))
    

    return(
        <View>
            <Button 
                onPress={() => {
                    if(props.cartelaBingo.includes(random)) {
                        let numerosDoSorteio = document.useState([])
                         num = numerosDoSorteio
                        for(num of numerosDoSorteio){
                        console.log(useState)
                         if(num == sortNum){
                        console.log('Mudou a cor')

                        
                         }
                     }
           
                     
                    }
           
                    
                }
            }              
           
                
                />
        </View>
    )
}
