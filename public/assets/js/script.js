$(document).ready(function() {
    
    $('#add-burger').on('click', function() {
        event.preventDefault();

        

        var newBurger = {
            burger: $('#burger').val().trim(),
            devoured: $('.uneaten-burger').data('value')
        };

        console.log(newBurger.devoured);
        
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            location.reload();
        })
    })

    $('.devour-btn').on('click', function() {
        event.preventDefault();

        var id = $(this).data('id');
        var newDevoured = $(this).data('isdevoured');

        var isDevoured = {
            devoured: true
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: isDevoured
        }).then(function() {
            location.reload();
        })
    })
})