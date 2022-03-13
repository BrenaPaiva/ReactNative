import React from "react";
import {View, Text} from "react-native";
import { Button, useTheme} from "react-native-paper";



export default function Home() {
    const { colors } = useTheme();
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>

            <Text style={{fontSize:25, color: colors.primary }}>Brena</Text>
            <Text style={{fontSize:25, color: colors.accent}}>Uma garota programadora</Text>
           
            <Button icon="camera" node="contained" onPress={() => navigation.push('OutraRota')}
            >
                  bnfpaiva

            </Button>
           
        
        </View>
    );
}