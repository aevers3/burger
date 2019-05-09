// What is this function that's wrapping everything?
$(function () {
    $('#addBurgerButton').on('click', function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#newBurgerName').val().trim(),
            devoured: 0
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Update burger to devoured onclick
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var burgerName = $(this).data("burgerName");

        console.log('hi')
        var devour = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devour
        }).then(
            function () {
                console.log("Devouring", burgerName);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});