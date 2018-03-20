$(document).ready(function(){
    $("#button-sortable").click(function(){
        $("#tl-content-sortable").toggle();
    });

    $("#button-ibm").click(function(){
        $("#tl-content-ibm").toggle();
    });

    $("#button-scotia").click(function(){
        $("#tl-content-scotia").toggle();
    });

    $("#button-ttc").click(function(){
        $("#tl-content-ttc").toggle();
    });

    $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal({
            dismissible: true
        });

        $('form').on('submit', function (event) {
            event.preventDefault();
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
                success: function(data){
                    Materialize.toast('Email was sent!', 4000)
                },
                error: function(){
                    Materialize.toast('Email was not sent successfully!', 4000)
                }
            });
        });
      });
});