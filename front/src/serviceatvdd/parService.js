import axios from 'axios';

export function timeService(){
    axios.post("http://localhost:4000/times", questao)
    .then(function () {
        alert(response.data.data.id + "-" + response.data.data.message)
    });

   
}