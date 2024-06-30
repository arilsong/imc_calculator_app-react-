import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native';
import ResultImc from '../ResultImc/ResultImc';
import styles from './style';

export default function Form() {
    const [height, setHeigth] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o pesso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculetor(){
        return setImc((weight / (height * height)).toFixed(2));
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("caompo obrigatorio");
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculetor();
            setHeigth(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o pesso e a altura")
    }

  return (
    <View style = {styles.formContext}>
        <View style = {styles.form}>
            <Text style = {styles.formLabe}>Altura</Text>
            <Text style = {styles.errorMessage}>{errorMessage}</Text>
            <TextInput style = {styles.input}
                onChangeText={setHeigth}
                value={height}
                placeholder='Ex. 1.75'
                keyboardType='numeric'
            />
            <Text style = {styles.formLabe}>Peso</Text>
            <Text style = {styles.errorMessage}>{errorMessage}</Text>
            <TextInput style = {styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder='Ex. 1.75'
                keyboardType='numeric'
            />
            <TouchableOpacity
            onPress={() => validationImc()}
            style = {styles.buttonCalculator}
            >
                <Text style = {styles.tectButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc messageResultImc = {messageImc} reultImc = {imc}/>
    </View>
  )
}
