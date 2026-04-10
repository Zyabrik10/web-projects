import axios from "axios";

const apiKey = "c53e714903fec78646228f36";

const api = axios.create({
    baseURL: `https://v6.exchangerate-api.com/v6/${apiKey}`
});

function converCurrency({ currentCurrency, money, convertCurrency }) {
    
}