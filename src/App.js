import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');
class App extends Component {
  render() {
    return (
      <View style={{ top: 50, }}>
      <View style={{ transform: [{ rotate: '-12deg' }] }}>
      <Carousel
      inactiveSlideOpacity={0.75}
      inactiveSlideScale={0.65}
      firstItem={1}
      sliderWidth={width}
      itemWidth={width / 3} >
      <Image
      source={require('./Images/logo-chepauk.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logo-dindigul.png')}
      style={styles.logoStyle}  />
      <Image
       source={require('./Images/logo-kanchi.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logo-karaikudi.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logo-kovai.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logomadurai.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logothiruvallur.png')}
      style={styles.logoStyle}  />
      <Image
      source={require('./Images/logotuti.png')}
      style={styles.logoStyle}  />
      </Carousel>
      </View>
      </View>
);
}
}
const styles = {
  logoStyle: {
    width: width / 3,
    height: width / 3
    }
};
export default App;
