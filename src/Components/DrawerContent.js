import React from 'react';
import {View, StyleSheet,Image, Button} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';


export default function DrawerContent(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={imagePath.profile}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Pavan Sharma</Title>
                <Caption style={styles.caption}>Pavan@CBL.Com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
               icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Home"
              onPress={() => {
                navigation.navigate(navigationStrings.HOME);
                
              }}
            />
            <DrawerItem
              icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Consult"
              onPress={() => {
                navigation.navigate(navigationStrings.CONSULT);
              }}
            />
            <DrawerItem
              icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Workout"
              onPress={() => {
                navigation.navigate(navigationStrings.WORKOUT);
              }}
            />
            <DrawerItem
               icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Visit"
              onPress={() => {
                navigation.navigate(navigationStrings.VISIT);
              }}
            />
            <DrawerItem
              icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Profile"
              onPress={() => {
                navigation.navigate(navigationStrings.PROFILE);
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
               icon={({color, size}) => <Image source={imagePath.HOME} />}
              label="Charts"
              onPress={() => {
                navigation.navigate(navigationStrings.CHART);
                
              }}
            />
          
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
     
     <View style={styles.signOutButtonView}>
     <Button title={"Sign Out"}></Button>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },signOutButtonView:{
    bottom:0,
    marginHorizontal:20,
    marginBottom:20
  }
});
