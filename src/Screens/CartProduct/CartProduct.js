import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import CartItem from '../../Components/CartItem';


import DetailHeader from '../../Components/CustomHeader';
import {connect} from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import colors from '../../styles/colors';
import actions from '../../redux/actions';

class CartProduct extends Component {
  state = {
    isVisible: true,
  };

  ListEmptyView = () => {
    return (
      <View style={styles.MainContainer}>
        <Image
          style={styles.cartEmptyImage}
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/tqRl5H91M5wDqvDFZu0f8TIwHM6A4418IqNz3WG9ngUs68bV66b3gbdhlTCmWjYo6QTsAU3eRvvjzWiXzc0',
          }}></Image>
      </View>
    );
  };

  componentDidMount() {
    actions.onInitialPrice(this.props.data);
  }

  productQuantityIncreament = id => {
    actions.onItemAdd(id);
  };

  productQuantityDecreament = id => {
    actions.onItemDecrement(id);
  };

  onDelete = id => {
    Alert.alert(
      'Alert Message',
      'are you sure you want to delete this product',
      [
        {
          text: 'Cancel',
          onPress: () => console.log(id),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            actions.ondelete(id);
          },
        },
      ],
      {cancelable: false},
    );
  };

  clearPayment = () => {
    var options = {
      currency: 'INR',
      key: 'rzp_test_IWGqYVgvkKh3go', // Your api key
      amount: this.props.price * 100,
      name: 'HealthKartClone',
      description: 'Credits towards consultation',
      prefill: {
        email: 'void@HealthKartClone.com',
        contact: '7976785714',
        name: 'HealthKart',
      },
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  render() {
    const {newQuantity} = this.state;

    return (
      <View style={styles.container}>
        <DetailHeader />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.data}
          ListEmptyComponent={this.ListEmptyView}
          renderItem={({item, index}) => (
            <CartItem
              key={index}
              data={item}
              onDelete={this.onDelete}
              newQuantity={newQuantity}
              productQuantityDecreament={this.productQuantityDecreament}
              productQuantityIncreament={this.productQuantityIncreament}
            />
          )}
        />
        <TouchableOpacity onPress={this.clearPayment}>
          {this.state.isVisible ? (
            <View style={styles.buyNowButtonView}>
              <Text style={styles.textStyle}>
                Place Order:{this.props.price}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: '50%',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buyNowButtonView: {
    backgroundColor: colors.themeColor,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartEmptyImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  textStyle: {color: colors.white},
});
const mapStateToProps = state => {
  return {
    data: state.carts.todo,
    price: state.carts.total,
  };
};

export default connect(mapStateToProps)(CartProduct);
