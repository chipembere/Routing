$(document).ready(() => {
    $("form").click(() => {
        let name = $("input[name=username]");
        let password = $("input[name=password]");
        if (name === undefined || password === undefined) {
            alert("Insert username and password");
        }
    });
});