$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newSleep = $(this).data("burger-info");

        var newState = {
            devoured: 'true'
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function() {
                console.log("changed sleep to", newSleep);
                // Reload the page 
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        //PreventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page 
                location.reload();
            }
        );
    });


});