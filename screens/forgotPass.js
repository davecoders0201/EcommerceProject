import React, {useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

//this is the main Forgot password Function which is Export in next page
const ForgotPass = () => {
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [email, setEmail] = useState('');
  const emailRemove = useRef(null);
  const validateEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const forgetPassword = email => {
    if (!email) {
      alert('Enter Email');
      return;
    }
    emailRemove.current.clear();
    try {
      if (auth) {
        alert('Email sent SuccessFully');
        return auth().sendPasswordResetEmail(email);
      } else {
        return;
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
        }}
        style={styles.loginImage}></Image>
      <Text style={styles.mainHeader}>Forgot Password </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter registered Email</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => validateEmail(text)}
          onChange={validateEmail}
          ref={emailRemove}
        />
      </View>

      {checkValidEmail ? (
        <Text style={styles.textFailed}>Please Enter Proper Email</Text>
      ) : (
        <Text style={styles.blockText}> </Text>
      )}

      <TouchableOpacity
        style={[styles.buttonStyle]}
        onPress={() => forgetPassword(email)}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 30,
    marginBottom: 30,
    height: 200,
    width: 200,
    borderRadius: 25,
    marginLeft: 70,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: '#7d7d7d',
    paddingBottom: 5,
    fontFamily: 'WorkSans_400Regular',
    lineHeight: 25,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
    fontSize: 15,
    fontWeight: 'bold',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 16,
  },
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 24,
    color: '#344055',
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: 'Nunito_700Bold',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor: '#f0c14a',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
  },
  textFailed: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 16,
    marginBottom: 16,
    marginTop: 12,
  },
  blockText: {
    marginTop: -20,
  },
  loginImage: {
    marginTop: 18,
    width: 102,
    height: 30,
    marginLeft: 130,
    marginBottom: 130,
  },
});
