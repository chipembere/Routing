$(document).ready(() => {
    console.log("Tiripo");
    $("#log").submit(() => {
        let name = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        if (name.length === 0 || password.length === 0) {
            alert("Insert username and password");
        };
    });
});