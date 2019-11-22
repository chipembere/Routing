$(document).ready((ev) => {
    console.log("Tiripo"); // Check Javascript file is getting recognized.
    $("#log").submit((ev) => {
        let name = $("input[name=username]").val();
        let password = $("input[name=password]").val();
        if (name.length === 0 || password.length === 0) {
            ev.preventDefault() // Prevent the page reloading or going to the next page when there is no input.
            alert("Insert username and password");
        };
    });
});