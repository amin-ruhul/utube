import axios from 'axios';

const KEY = 'AIzaSyAoyewcmHhiM3QqZC9ShIlQ-IahnGRi6oI';

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult: 5 ,
        key:KEY
    }
})