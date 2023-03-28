import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {monitorSliderData} from '../data/monitorSliderData';
const MonitorSlider = () => {
  return (
    <View>
      <SliderBox
        resizeMode="contain"
        images={monitorSliderData}
        // autoplay={true}
        // circleLoop
        // autoPlayInterval={100}
        sliderBoxHeight={350}
        dotColor="#02c3d9"
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
          borderColor: 'gray',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default MonitorSlider;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
});
