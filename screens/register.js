import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import auth from '@react-native-firebase/auth';
import axios from 'axios';

const Register = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    });
  });

  const secondTextInput = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setRePassword] = useState('');

  //This is use to create account using the Firebase

  // const register = async () => {
  //   if (email && password) {
  //     console.log(email, password);
  //     try {
  //       const isUserCreated = await auth().createUserWithEmailAndPassword(
  //         email,
  //         password,
  //       );
  //       if (isUserCreated) {
  //         Alert.alert('Successfuly Created User');
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       alert(error);
  //       // Handle the error here
  //     }
  //   } else {
  //     warning('Amazon Clone Sign In', 'Input Badly Formatted 😢');
  //   }
  // };

  // This is use for creating account using the Backend (NodeJs).
  const sendCred = () => {
    fetch('http://10.0.2.2:3000/ecommerce/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // token: token,
      },
      body: JSON.stringify({
        your_name: name,
        email: email,
        password: password,
        reenter_password: reEnterPassword,
      }),
    })
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        Alert.alert("User Created, please go Ahead to Login");
      });
  };

  return (
    <ScrollView>
      <View style={styles.login}>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginHeader}>
          <TouchableOpacity>
            <Image
              style={styles.loginImage}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.loginForm}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.loginFormTitle}>Create Account</Text>
          </View>
          <Text style={styles.loginFormLink}>Your Name</Text>
          <View style={styles.loginInputContainer}>
            <TextInput
              onChangeText={name => setName(name)}
              style={styles.loginInputText}
              returnKeyType={'next'}
              onSubmitEditing={() => secondTextInput.current.focus()}
            />
          </View>
          <Text style={styles.loginFormLink}>Email</Text>
          <View style={styles.loginInputContainer}>
            <TextInput
              ref={secondTextInput}
              onChangeText={email => setEmail(email)}
              style={styles.loginInputPassword}
            />
          </View>
          <Text style={styles.loginFormLink}>Password</Text>
          <View style={styles.loginInputContainer}>
            <TextInput
              ref={secondTextInput}
              onChangeText={password => setPassword(password)}
              secureTextEntry={true}
              style={styles.loginInputPassword}
              placeholder="At least 6 characters"
            />
          </View>
          <Text style={styles.validationpass}>
            <Icon
              name="information-variant"
              size={20}
              color={'#4eb6df'}
              style={styles.icon}></Icon>
            Password must be atleast 6 characters
          </Text>
          <Text style={styles.loginFormLink}>Re-enter password</Text>
          <View style={styles.loginInputContainer}>
            <TextInput
              ref={secondTextInput}
              // value={password}
              onChangeText={reEnterPassword => setRePassword(reEnterPassword)}
              secureTextEntry={true}
              style={styles.loginInputPassword}
            />
          </View>
          <TouchableOpacity onPress={sendCred} style={styles.loginSignInButton}>
            <Text style={{color: '#111', textAlign: 'center'}}>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            paddingTop: 30,
            color: 'black',
            marginTop: 30,
            textAlign: 'left',
            marginLeft: -150,
            fontSize: 15,
          }}>
          Already have an account ?{' '}
          <Text
            style={styles.signIn}
            onPress={() => navigation.navigate('Login')}>
            signIn
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  loginHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    width: '100%',
  },
  loginImage: {
    marginTop: 18,
    width: 102,
    height: 30,
  },
  loginForm: {
    width: '100%',
    padding: 13,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginFormTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  loginFormLink: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: -15,
  },
  validationpass: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginBottom: 5,
  },
  loginInputContainer: {
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 2,
    borderColor: 'gray',
  },
  loginInputText: {
    padding: 10,
    paddingLeft: 14,
    fontSize: 17,
  },
  loginInputPassword: {
    padding: 10,
    paddingLeft: 14,
    fontSize: 17,
  },
  loginSignInButton: {
    padding: 10,
    width: '100%',
    backgroundColor: '#f0c14b',
    borderWidth: 1,
    marginTop: 17,
    marginBottom: 10,
    borderColor: '#a88734',
  },
  signIn: {
    color: '#4eb6df',
    fontSize: 15,
  },
  loginRegisterButton: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'lightgray',
    marginTop: 17,
    marginBottom: 10,
    borderColor: 'darkgray',
  },
});
