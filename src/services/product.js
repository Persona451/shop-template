import axios from "axios"
import { rootApi } from "../api"

const getProducts = () => {
    return axios.get(rootApi + "/products")
}

const getProduct = (id) => {
    return axios.get(`${rootApi}/product/${id}`)
}

export default {
    getProducts,
    getProduct
    
}