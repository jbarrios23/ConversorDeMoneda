import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ResultScreen({ route }) {
  const { amount, fromCurrency, toCurrency } = route.params;
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const rate = response.data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
      } catch (error) {
        console.error('Error fetching exchange rate', error);
      }
    };

    getExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        {amount} {fromCurrency} es aproximadamente {convertedAmount} {toCurrency}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
  },
});
