import React from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;
interface IHeader {
  leftIcon?: ImageSourcePropType;
  textContent: string;
  rightIcon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconLeftStyle?: StyleProp<TextStyle>;
  iconRightStyle?: StyleProp<TextStyle>;
  onLeftPressed?: () => void;
  onRightPressed?: (event: GestureResponderEvent) => void;
}

const Header: React.FC<IHeader> = ({
  leftIcon,
  textContent,
  rightIcon,
  style,
  textStyle,
  onLeftPressed,
  onRightPressed,
  iconLeftStyle,
  iconRightStyle,
}) => {
  return (
    <View style={[styles.containerHeader, style]}>
      <View style={styles.leftIcon}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftPressed}>
            <Image
              source={leftIcon}
              resizeMode="contain"
              style={[styles.icon, iconLeftStyle]}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.textContent}>
        <Text style={[styles.headerTextContent, textStyle]}>{textContent}</Text>
      </View>

      <View style={styles.rightIcon}>
        {rightIcon && (
          <TouchableOpacity onPress={onRightPressed}>
            <Image
              source={rightIcon}
              resizeMode="contain"
              style={[styles.rightIconIcon, iconRightStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#04AA6D',
    paddingHorizontal: '5%',
    height: height / 20,
  },
  leftIcon: {},
  icon: {},
  textContent: {},
  headerTextContent: {},
  rightIcon: {},
  rightIconIcon: {},
});
