import React from "react";
import {Text, View,TextInput, StyleSheet,Image,Pressable} from 'react-native'
import { validateEmail, validateName } from "../utils/validate";

export default function OnBoarding() {

    //hooks area:
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    //validation area
    const isEmailValid = validateEmail(email);
    const isNameValid = validateName(name)

    //render area
    return(
    <View style={{flex: 1}}>
        
        
        <View style={styler.headerContainer}>
            <Image source={require("../assets/Logo.png")}/>
           
        </View>


        <View style={styler.bodyContainer}>
            <Text>Let us get to know you</Text>

            <TextInput
            value={name}
            onChangeText={setName}
            keyboardType="default"
            placeholder={"type your name!"}
            style={styler.input}
            />

            <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder={"type your email"}
            style={styler.input}
            />

        </View>

        {/**
         * bug: one true value lets it enable
         */}
        <View style={styler.footerContainer}>
            <Pressable 
            onPress={()=> alert('thanks for subscribing,\nstay tuned!')}
            style = {!isEmailValid && !isNameValid ? styler.buttonDisabled : styler.buttonWrapper}
            // style={[styler.buttonWrapper, !isEmailValid&&!isNameValid && styler.buttonDisabled]}
            disabled={!isEmailValid && !isNameValid}
            >
                <Text>Next</Text>
            </Pressable>
        
        </View>


    </View>
);}




//=======styles=========

const styler = StyleSheet.create({
    imageStyle:{
        height: 150,
        width: 200,
        margin:30,
    },
    input: {
        height: 40,
        marginVertical: 24,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "EDEFEE",
      },
    headerContainer: {
        flex:0.15,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:"#dce1e7",
    },
    bodyContainer:{
        backgroundColor:"#c9ced7",
        flex:0.7,
        alignItems:"center",
        justifyContent: "center",

    },
    footerContainer:{
        flex:0.15,
        flex:0.15,
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"#dce1e7",
    },
    buttonWrapper: {
        borderRadius: 8,
        backgroundColor: '#495E57',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
      },
      buttonDisabled: {
        borderRadius: 8,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        opacity: 25,
      },
    

    

})