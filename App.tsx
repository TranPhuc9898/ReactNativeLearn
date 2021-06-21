/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import Header2 from './src/component/header2/Header2';

//
import Header from './src/component/header/Header';

//
import Image from './src/Utils/Themes/Image';
import {getHorizontalSize, getVerticalSize} from './src/Utils/size/Size';
import Menu from './src/component/menu/Menu';
//

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;
//
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const onLeftIcon = () => {
    Alert.alert('Hello');
  };

  const onRightIcon = () => {
    Alert.alert('Hello');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header
        leftIcon={Image.back}
        textContent="Pizzon - Crib Ln"
        rightIcon={Image.heart}
        onLeftPressed={onLeftIcon}
        onRightPressed={onRightIcon}
        iconLeftStyle={styles.iconLef}
        iconRightStyle={styles.iconRight}
      />

      <Header2 />
      <View style={styles.line} />
      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#EFF0F3',
  },
  iconLef: {
    width: getHorizontalSize(24),
  },
  iconRight: {
    width: getHorizontalSize(24),
  },
  padding: {
    paddingTop: 20,
  },
  line: {
    marginTop: 20,
    backgroundColor: '#EFF0F3',
    height: getVerticalSize(2),
  },
});
export default App;
