$(document).ready(() => {
    axios.get('/zi')
        .then(response => {
            let name = response.data;
            console.log(name);
            $("#square").html(`Hi ${name}...`);
        });
});