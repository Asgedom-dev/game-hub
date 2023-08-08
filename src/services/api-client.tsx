import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'57148274cab947ccb2306becd62bc185'
    }
})