import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Wrapped from '../Components/Global/Wrapped'
import HomeHeader from '../Components/AppComponents/HomeComponents/HomeHeader'
import HomeActors from '../Components/AppComponents/HomeComponents/HomeActors'
import Axios from '../Axios/Axios'
import { useDispatch } from 'react-redux'
import { setActor, setloading } from '../Redux/Slice/HomeSlice'

const call = new Axios()
export default function Home({ navigation }) {
    const [state, setstate] = useState([])

    const dispatch = useDispatch()
    React.useEffect(() => {
        (async () => {
            dispatch(setloading(true))
            const data = await call.Calls('characters', 'GET')
            setstate(data.data)
            dispatch(setActor(data.data))
            dispatch(setloading(false))
        })()

    }, [])
    const HandleFavorite = (item) => {
        navigation.navigate('Favorite')
    }
    const HandleSearch = (item) => {
        navigation.navigate('Search')
    }


    const HandleDetail = (item) => {
        navigation.navigate('Detail', { "data": item })
    }
    return (
        <Wrapped>
            <HomeHeader HandleFavorite={HandleFavorite} HandleSearch={HandleSearch} />
            <HomeActors data={state} HandleDetail={HandleDetail} />
        </Wrapped>
    )
}
