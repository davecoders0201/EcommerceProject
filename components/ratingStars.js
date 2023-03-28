import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({rating}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Icon key={i} name="star" size={20} color="#f0c14a" />);
    } else {
      stars.push(<Icon key={i} name="star-o" size={20} color="#f0c14a" />);
    }
  }

  return (
    <View style={styles.container}>
      {stars.map(star => (
        <View key={star.key}>{star}</View>
      ))}
      <Text style={styles.ratingText}>{rating}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RatingStars;
