import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen({ navigation }) {

    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <Picker
                selectedValue={fromCurrency}
                onValueChange={itemValue => setFromCurrency(itemValue)}
                style={styles.picker}>
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="VES" value="VES" />

            </Picker>
            <Picker
                selectedValue={toCurrency}
                onValueChange={itemValue => setToCurrency(itemValue)}
                style={styles.picker}>
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="VES" value="VES" />

            </Picker>
            <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={text => setAmount(text)}
                style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Result', { amount, fromCurrency, toCurrency })}>
                <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: { flex: 1, justifyContent: 'center', padding: 16, },
        title: { fontSize: 24, marginBottom: 20, textAlign: 'center', },
        picker: { height: 50, width: '100%', marginBottom: 20, },
        input: { height: 40, borderColor: '#cccccc', borderWidth: 1, borderRadius: 20, paddingLeft: 10, marginRight: 10, backgroundColor: '#ffffff', },
        button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop:20 },
        buttonText: { color: '#ffffff', fontSize: 16, },
    });