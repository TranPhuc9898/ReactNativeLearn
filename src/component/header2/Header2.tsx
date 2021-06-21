import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//
import {LIST_TAB} from '../../Utils/mockupData';
import {IListTabItem} from '../../Utils/Types';
import {getHorizontalSize, getVerticalSize} from '../../Utils/size/Size';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header2: React.FC<any> = () => {
  const [pickTitle, setPickTitle] = useState(0);

  const renderItem = ({item, index}: {item: IListTabItem; index: number}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setPickTitle(index);
          }}>
          {index === pickTitle ? (
            <View style={styles.touch}>
              <Text style={styles.text2}>{`${item}`}</Text>
              <View style={styles.dot} />
            </View>
          ) : (
            <Text style={styles.text}>{`${item}`}</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  // copy của anh giang :D :D :d =))
  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View style={styles.renderItem}>
      <FlatList
        data={LIST_TAB}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.toString()}-${index}`}
        horizontal={true}
        ItemSeparatorComponent={itemSeparator}
        ListHeaderComponent={itemSeparator}
        ListFooterComponent={itemSeparator}
      />
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  renderItem: {
    paddingTop: getVerticalSize(25),
  },
  container: {},
  // container: {justifyContent: 'center', alignItems: 'center'},
  separator: {
    width: getHorizontalSize(26),
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#C3C3C3',
  },
  text2: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    color: '#4F585E',
  },
  dot: {
    width: getHorizontalSize(8),
    height: getVerticalSize(8),
    backgroundColor: '#FB6D3B',
    borderRadius: 4,
    marginTop: 5,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
