import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';

const DetailsScreen = ({navigation, route}) => {
  const pet = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{height: 400, backgroundColor: COLORS.background}}>
        <ImageBackground
          resizeMode="contain"
          source={pet?.image}
          style={{
            height: 280,
            top: 20,
          }}>
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
              {pet.name}
            </Text>
            <Icon name="gender-male" size={25} color={COLORS.grey} />
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 12, color: COLORS.dark}}>{pet.type}</Text>
            <Text style={{fontSize: 13, color: COLORS.dark}}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={COLORS.primary} size={20} />
            <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
              5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
          </View>
        </View>
      </View>

      {/* Comment container */}
      <View style={{marginTop: 80, justifyContent: 'space-between', flex: 1}}>
        <View>
          {/* Render user image , name and date */}
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Image
              source={require('../../assets/person.jpg')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{color: COLORS.dark, fontSize: 12, fontWeight: 'bold'}}>
                JANE GARY
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 11,
                  fontWeight: 'bold',
                  marginTop: 2,
                }}>
                Owner
              </Text>
            </View>
            <Text style={{color: COLORS.grey, fontSize: 12}}>May 25, 2020</Text>
          </View>
          <Text style={style.comment}>
            My job requires moving to another country. I don't have the
            opputurnity to take the cat with me. I am looking for good people
            who will shelter my Lily.
          </Text>
        </View>

        {/* Render footer */}
        <View style={style.footer}>
          <View style={style.iconCon}>
            <Icon name="heart-outline" size={22} color={COLORS.white} />
          </View>
          <View style={style.btn}>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              ADOPTION
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
export default DetailsScreen;
