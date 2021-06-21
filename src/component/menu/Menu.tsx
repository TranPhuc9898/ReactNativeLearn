import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {IListData} from '../../Utils/Types';
import {LIST_DATA} from '../../Utils/mockupData';

const height = Dimensions.get('window').height;
const Menu: React.FC<any> = () => {
  const [pickTitle, setPickTitle] = useState(0);

  const renderItem = ({item, index}: {item: IListData; index: number}) => {
    return (
      <View style={styles.containerMenu}>
        <Text style={styles.title}>{item.title}</Text>
        <View>
          {item.data.map(item => (
            <TouchableOpacity
              onPress={() => {
                setPickTitle(index);
              }}>
              <View style={styles.secondeMenu}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.childrenMenu}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textItem}>{item.name}</Text>
                    <Text style={styles.textKcal}>KCal: {item.kCal}</Text>
                  </View>
                  <Text style={styles.textDes}>{item.description}</Text>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textPrice}>
                        $ {item.price.toFixed(2)}
                      </Text>
                      <Text style={styles.itemListingPrice}>
                        $ {item.listingPrice.toFixed(2)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.sectionFooter} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={LIST_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.toString()}-${index}`}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  containerMenu: {
    paddingTop: 35,
    paddingHorizontal: '7%',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 20,
  },
  secondeMenu: {
    paddingTop: 10,
    flexDirection: 'row',
    paddingVertical: '15%',
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 8,
  },
  separator: {
    backgroundColor: '#000',
    marginTop: 20,
  },
  textItem: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 18,
  },
  textKcal: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
  },
  textDes: {
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
    marginTop: 3,
  },
  textPrice: {
    paddingTop: 22,
    color: '#FB6D3B',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
  itemListingPrice: {
    paddingTop: 25,
    fontSize: 12,
    fontWeight: '500',
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  childrenMenu: {
    paddingHorizontal: '5%',
  },
  sectionFooter: {
    backgroundColor: '#EFF0F3',
    height: height / 200,
  },
});
