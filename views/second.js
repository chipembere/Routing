$(document).ready(() => {
    axios.get('/zi')
        .then(response => {
            let name = response.data;
            console.log("Zita" + name);
            $("#square").html(`Hi ${name}...`);
        });
});