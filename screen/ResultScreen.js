import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getExchangeRate } from '../services/ExchangeService';

export default function ResultScreen({ route }) {
  const { amount, fromCurrency, toCurrency } = route.params;
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const responseGet = await getExchangeRate(amount, fromCurrency, toCurrency);
        console.log("From Result Screen", responseGet);
        setConvertedAmount(responseGet);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchExchange();   
  }, [amount, fromCurrency, toCurrency]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {amount} {fromCurrency} es aproximadamente
          </Text>
          <Text style={styles.convertedText}>
            {convertedAmount} {toCurrency}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  convertedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
