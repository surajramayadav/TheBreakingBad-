import React from 'react'
import { View } from 'react-native'
import SearchBar from '../../Global/SearchBar'

export default function SearchHeader({HandleBack}) {
    return (
        <>
            <SearchBar place="Search" HandleBack={HandleBack}/>
            <View style={{ marginHorizontal: 10, borderWidth: 0.5 }} />
        </>
    )
}
