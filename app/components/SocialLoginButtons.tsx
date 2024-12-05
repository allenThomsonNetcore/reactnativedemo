import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import React from 'react';
import Google from "@/assets/images/google-logo.svg"

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

type Props = {
  emailHref : Href<string| object>
};

 const SocialLoginButtons = (props: Props) => {
  const {emailHref} = props;
  return (
<View style={styles.socialLoginWrapper}>
  <Animated.View entering ={FadeInDown.delay(500).duration(500).springify()} >
  <Link href={emailHref} asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons name='mail-outline'
          size={20}
          color={Colors.black}/>

          <Text style={styles.btnTxt}>Continue With Email</Text>
        </TouchableOpacity>
      </Link>
  </Animated.View>
  <Animated.View entering ={FadeInDown.delay(700).duration(500).springify()} >

      <Link href={"/signin"} asChild>
        <TouchableOpacity style={styles.button}>
  <Google width={20} height={20} />

          <Text style={styles.btnTxt}>Continue With Google</Text>
        </TouchableOpacity>
      </Link>
       </Animated.View>
  
</View>
  );
};

export default SocialLoginButtons;

const styles = StyleSheet.create({
  socialLoginWrapper:{
    alignSelf: 'stretch'
  },
  button:{
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  btnTxt:{
fontSize:14,
fontWeight: '600',
color: Colors.black,
  },
});