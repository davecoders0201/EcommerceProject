import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AccountCard = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', color: 'black'}}>{title}</Text>
    </View>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#b8baba',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
});
