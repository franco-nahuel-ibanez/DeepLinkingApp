import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const DetailsScreen = ({ route }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const params = route.params || {};
  const { personDetailsId, personId } = params

  useEffect(() => {
    if (personId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({ key, value: `${res[key]}` });
          });
          setData(fetchedDetails);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${personDetailsId}`)
        .then(res => res.json())
        .then(res => {
          const fetchedDetails = [];

          Object.keys(res).forEach(key => {
            fetchedDetails.push({ key, value: `${res[key]}` });
          });

          setData(fetchedDetails);
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  return (
    <View
      style={styles.container}
    >
      {
        loading
        ? (<ActivityIndicator size={'large'} color={'blue'} />)
        : (data.map(item => (
          <Text
            style={{fontSize:24, paddingBottom:12}}
            key={item.key}
          >
            {`${item.key}: ${item.value}`}
          </Text>
        ))) 
      }
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})