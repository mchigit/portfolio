$(document).ready(function() {
    $("#button-sortable").click(function() {
        $("#tl-content-sortable").toggle();
    });

    $("#button-ibm").click(function() {
        $("#tl-content-ibm").toggle();
    });

    $("#button-scotia").click(function() {
        $("#tl-content-scotia").toggle();
    });

    $("#button-ttc").click(function() {
        $("#tl-content-ttc").toggle();
    });

    $(document).ready(function() {
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal({
            dismissible: true
        });

        setTimeout(function(){
            $('body').addClass('loaded');
        }, 500);

        $('form').on('submit', function(event) {
            event.preventDefault();
            $(".spinner").css("display", "block");
            var ajax_send_email = {
                email: $('#email').val(),
                message: $('#message_area').val(),
                first_name: $('#first_name').val(),
                last_name: $('#last_name').val(),
            };
            $.ajax({
                url: '/send_email',
                data: ajax_send_email,
                type: 'POST',
                success: function(data) {
                    $(".spinner").css("display", "none");
                    Materialize.toast('SUCCESS: Email Was Sent', 3000, classes = 'success-toast')
                },
                error: function() {
                    $(".spinner").css("display", "none");
                    Materialize.toast('WARNING: Failed To Sending Email', 3000, classes = 'warning-toast')
                }
            });
        });
    });
});