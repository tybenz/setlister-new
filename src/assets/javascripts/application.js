var $ = require('jquery');

$('[data-method=delete]').on('click', function(evt) {
    var $target = $( evt.target );
    evt.preventDefault();

    var dataConfirm = $target.data( 'confirm' );
    if (dataConfirm) {
        dataConfirm = window.confirm(dataConfirm);
    } else {
        dataConfirm = true;
    }
    if (dataConfirm) {
        $.ajax({
            method: 'DELETE',
            url: $target.attr('href'),
            success: function (data) {
                window.location.reload();
            },
            error: function (err) {
                console.error( err );
            }
        });
    }
});
