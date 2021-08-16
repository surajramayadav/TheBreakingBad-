import React, { Children } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../Styles/Colors'


export default function Wrapped({ children }) {
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:Colors.black}}>
            <StatusBar hidden backgroundColor='#242424' />
            {children}
        </SafeAreaView>
    )
}
