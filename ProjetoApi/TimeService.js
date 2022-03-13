import axios from 'axios';
export async function  TimeService(time){
    return  axios.post("http://localhost:19006//times", time)
}