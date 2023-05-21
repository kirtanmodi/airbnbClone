import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from '../../components/Post/styles';

const Post = (
  props: Readonly<{
    post: {
      image: string;
      bed: number;
      bedroom: number;
      oldPrice: number;
      newPrice: number;
      totalPrice: number;
      description: string;
      type: string;
      title: string;
    };
  }>,
) => {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: props.post.image,
        }}
      />

      {/* bed and bedroom */}
      <Text style={styles.bedrooms}>
        {props.post.bed} bed {props.post.bedroom} bedroom
      </Text>

      {/* type and description */}
      <Text style={styles.description} numberOfLines={2}>
        {props.post.type}. {props.post.title}
      </Text>

      {/* old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${props.post.oldPrice}</Text>
        <Text style={styles.price}> ${props.post.newPrice}</Text>/ night
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>${props.post.newPrice * 7} total</Text>

      {/* long description */}
      <Text style={styles.longDescription}>{props.post.description}</Text>

      {/* button */}
      <Pressable
        onPress={() => {
          console.warn('button clicked');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Book this room</Text>
      </Pressable>

      {/* end of post */}
    </View>
  );
};

export default Post;
