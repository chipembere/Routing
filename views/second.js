$(document).ready(() => {
    // Access data sent on "/zi" route .
    axios.get('/zi')
        .then(response => {
            let name = response.data;
            $("#square").html(`Hi ${name}...`);
        });
});