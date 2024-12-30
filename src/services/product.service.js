import axios from "axios";

export const getProducts = (callback) => {
    axios.get("https://dummyjson.com/products").then(res => {
        callback(res.data)
    }).catch((err) => {
        console.log(err)
    });
}