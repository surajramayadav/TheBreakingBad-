import React, { useRef, useState } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Image, Text, SafeAreaView, StyleSheet, ScrollView, True, TouchableOpacity } from 'react-native'
import Input from '../Basic/Input'
export default function SearchBar({ place, SearchTab, Handlesearch ,HandleBack}) {

  return (
    <View style={{
      borderRadius: 5, marginHorizontal:20, flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between', backgroundColor: '#242424'
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>

        <Input placeholder={place} style={{ marginLeft: 20, width: '78%', }}
          onChangeText={e => { Handlesearch ? (Handlesearch(e)) : console.log(e) }} />
      </View>
      {
        !SearchTab &&
        // <TouchableOpacity><Entypo name="cross" size={25} color="grey" style={{ marginRight: 20 }} /></TouchableOpacity>
        <Ionicons name="close" color="white" size={25} style={{ marginRight: 20 }}  onPress={()=>HandleBack()}/>
      }

    </View>
  )
}
