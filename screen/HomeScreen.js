import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen({ navigation }) {

    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Moneda</Text>
            <Picker
                selectedValue={fromCurrency}
                onValueChange={itemValue => setFromCurrency(itemValue)}
                style={styles.picker}>
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
              
            </Picker>
            <Picker
                selectedValue={toCurrency}
                onValueChange={itemValue => setToCurrency(itemValue)}
                style={styles.picker}>
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                
            </Picker>
            <TextInput
                placeholder="Cantidad"
                keyboardType="numeric"
                value={amount}
                onChangeText={text => setAmount(text)}
                style={styles.input} />
            <Button title="Convertir" 
            onPress={() => navigation.navigate('Result', { amount, fromCurrency, toCurrency })} />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: { flex: 1, justifyContent: 'center', padding: 16, },
        title: { fontSize: 24, marginBottom: 20, textAlign: 'center', },
        picker: { height: 50, width: '100%', marginBottom: 20, },
        input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10, },
    });