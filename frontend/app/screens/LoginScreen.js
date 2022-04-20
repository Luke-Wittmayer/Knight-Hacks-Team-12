import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    
    
    
    const loginHandle = (userName, password) => {
    //console.log(userName)
    //console.log(password)
      async function login(){
        var obj = {username:userName,password:password};
        var js=JSON.stringify(obj);
        //console.log(js);
        try{
          let response;
  
          response = await fetch("http://localhost:3000/api/v1/internships/login",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body : js,
          });
        

          var res=JSON.parse(await response.text() );
          if (res.id<0){
            console.log(res.errors);
            
          }
          else{
            var user = {
              user: res.username,
            };
            
            console.log(user.user)
            console.log("It worked if you see this message and the username below);
            store = user.user
            console.log(store)
            
            if(res.id == -1)
            alert("incorrect username or password")
          }
            console.log(res)
            console.log(res.id)
        } catch (e){
          //alert(e.toString());
          return ;
        }
      }
        //test
      login();
   ;
    //handleMessage(null);
  };
    
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>

            <AppForm
                initialValues={{ username: '', password: ''}}
                 onSubmit={values => loginHandle(values.username, values.password)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    //keyboardType="email-address"
                    name="username"
                    placeholder="Username"
                    textContentType="username"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />          
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;
