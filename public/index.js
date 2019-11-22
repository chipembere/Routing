$(document).ready((ev) => {
    console.log("Tiripo");
    $("#log").submit((ev) => {
        let name = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        if (name.length === 0 || password.length === 0) {
            ev.preventDefault()
            alert("Insert username and password");
        };
    });
});