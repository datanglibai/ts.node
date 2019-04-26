import axios from 'axios';
import {AxiosPromise} from "axios";

const response: AxiosPromise<string> = axios.get('http://www.miit.gov.cn/', {});

response.then(res => {
    console.log(res);
})