import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    });
  }, [navigation]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const secondTextInput = useRef();
  const signIn = async () => {
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!password.trim()) {
      alert('Please enter your password');
      return;
    }
    if (email && password) {
      console.log(email, password);
      try {
        const isUserLogin = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        if (isUserLogin) {
          navigation.navigate('TabNavigation');
        }
      } catch (error) {
        console.log(error);
        alert(error);
        // Handle the error here
      }
    } else {
      warning('Amazon Clone Sign In', 'Input Badly Formatted 😢');
    }
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
            <Text style={styles.loginFormTitle}>Sign in</Text>
            <Text
              style={styles.loginFormLink}
              onPress={() => navigation.navigate('Forgotpass')}>
              Forgot password?
            </Text>
          </View>

          <View style={styles.loginInputContaineremail}>
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.loginInputText}
              placeholder="Email Address"
              returnKeyType={'next'}
              onSubmitEditing={() =>
                secondTextInput.current.focus()
              }></TextInput>
          </View>

          <View style={styles.loginInputContainerpass}>
            <TextInput
              ref={secondTextInput}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={seePassword}
              style={styles.loginInputPassword}
              placeholder="Your Password"
            />
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}>
              <Image
                source={
                  seePassword
                    ? require('../asset/Eye.png')
                    : require('../asset/EyeActive.png')
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={signIn} style={styles.loginSignInButton}>
            <Text style={{color: '#111', textAlign: 'center'}}>Sign in</Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 13,
              color: 'gray',
              fontWeight: '800',
            }}>
            By signing-in you agree to Amazon's Conditions of Use &amp; Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.loginRegisterButton}>
            <Text style={{color: '#111', textAlign: 'center'}}>
              Create your Amazon Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.loginFormLink}
              onPress={() => navigation.navigate('TabNavigation')}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            color: 'gray',
            fontWeight: '700',
          }}>
          © Amazon Clone 2020
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

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
    fontSize: 28,
    color: 'black',
    fontWeight: '500',
  },
  loginFormLink: {
    textAlign: 'center',
    fontSize: 15,
    color: '#0095ff',
  },
  loginInputContaineremail: {
    borderWidth: 1,
    marginTop: 22,
    borderRadius: 2,
    borderColor: 'gray',
  },
  loginInputContainerpass: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'gray',
    borderTopColor: '#fff',
  },
  loginInputText: {
    padding: 10,
    paddingLeft: 14,
    fontSize: 17,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
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
  loginRegisterButton: {
    padding: 10,
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'lightgray',
    marginTop: 17,
    marginBottom: 10,
    borderColor: 'darkgray',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 32,
    height: 26,
  },
});
