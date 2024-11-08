
import axios from 'axios';
export async function getExchangeRate(amount, fromCurrency, toCurrency) {
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    console.log('Url ', url);
    try {
        const response = await axios.get(url);
        const rate = response.data.rates[toCurrency];
        console.log('RESPONDE GET ', response);
        console.log('rate ', rate);
        return (amount * rate).toFixed(2);
        //setConvertedAmount((amount * rate).toFixed(2));
    } catch (error) {
        console.error('Error fetching exchange rate', error);
        return -1;
    }
}