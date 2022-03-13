import axios from 'axios';

export function timeService(time){
    axios.post("http://localhost:4000/times", time)
    .then(function (response) {
        alert(response.data.data.id + "-" + response.data.data.nome)
    });

   
}