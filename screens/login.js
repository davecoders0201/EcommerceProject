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

// This is use to import the firebase auth service
// import auth from '@react-native-firebase/auth';
// import {data} from '../data/CarouselData';

const Login = ({navigation}) => {
  // This is the useEffect in the function which is executed evert time when the screen is navigated
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    });
  }, [navigation]);

  // this is the useState which is use to edit the state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const secondTextInput = useRef();

  // This is the signIn Function which is executed when the signIn button is clicked using Firebase.

  // const signIn = async () => {
  //   // This if is use to check wheather the email is properly written or not
  //   if (!email.trim()) {
  //     alert('Please enter your email');
  //     return;
  //   }

  //   // This if is use to check the password is entered or not by the user
  //   if (!password.trim()) {
  //     alert('Please enter your password');
  //     return;
  //   }

  //   // This is use to when the email and password is completely written in proper format
  //   if (email && password) {
  //     console.log(email, password);
  //     try {
  //       const isUserLogin = await auth().signInWithEmailAndPassword(
  //         email,
  //         password,
  //       );
  //       if (isUserLogin) {
  //         navigation.navigate('TabNavigation');
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

  // This is the Function which is use to login the User Using the Backend (NodeJs).
  const sendCred = () => {
    fetch('http://10.0.2.2:3000/ecommerce/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        // navigation.navigate('TabNavigation');
      });
  };

  return (
    // This is the Scroll View which is use to give the Scroll Environment to the Content
    <ScrollView>
      <View style={styles.login}>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginHeader}>
          <TouchableOpacity>
            {/* ------This is use for the Logo------ */}
            <Image
              style={styles.loginImage}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
              }}
            />
          </TouchableOpacity>
        </View>

        {/*------This is View is use for the Form-------*/}
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

          {/* ---This is the Container of the Email in the login form--- */}
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

          {/* ---This is the Container of the Email in the login form--- */}
          <View style={styles.loginInputContainerpass}>
            <TextInput
              ref={secondTextInput}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={seePassword}
              style={styles.loginInputPassword}
              placeholder="Your Password"
            />

            {/* ---This is the button of the icon in which the password is shown or hidden--- */}
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

          {/* --- This is the Button of the signIn which is use for Authnticate the User and Run a Function --- */}
          <TouchableOpacity onPress={sendCred} style={styles.loginSignInButton}>
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

          {/* --- This is the Register Button in the User Create a Account --- */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.loginRegisterButton}>
            <Text style={{color: '#111', textAlign: 'center'}}>
              Create your Amazon Account
            </Text>
          </TouchableOpacity>

          {/* --- This is the Coninue Shopping Button --- */}
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

// This is the Stylesheet in the File like CSS and it is added below the File by importing the Stylesheet
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
