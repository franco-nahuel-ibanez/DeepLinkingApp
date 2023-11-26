import { StyleSheet, Text, View, FlatList, ActivityIndicator, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import Separator from '../components/Separator'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const navigration = useNavigation()

  useEffect(() => {
    const getUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( res => {
          setData(res)
          setLoading(false)
        })
    }

    getUsers()
  }, [])

  const RenderList = ({item}) => {
    return (
      <Pressable
        onPress={() => navigration.navigate('Details', {personDetailsId: item.id})}
        style={{paddingHorizontal: 10}}
      >
        <Text style={{fontSize: 24, color: '#000'}}>{item.name}</Text>        
      </Pressable>
    )
  } 

  return (
    <View>
      {
        loading
        ? (<ActivityIndicator size={"large"} color={"blue"} />)
        : (<>
            <FlatList
              data={data}
              contentContainerStyle={{paddingVertical: 20}}
              keyExtractor={item => item.id}
              renderItem={RenderList}
              ItemSeparatorComponent={Separator}
            />
          </>)
      }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})