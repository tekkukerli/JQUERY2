//  $(function(){

    // var inputFields = $("input:text, input:password, textarea");
    // inputFields.focus(function(){
    //     $(this).css("box-shadow", "0 0 4px #666");
    // });

    // inputFields.blur(function(){
    //     $(this).css("box-shadow", "none");
    // });

    //ül 1
    // var inputFields = $("input:text, input:password, textarea");
    // inputFields.focus(function(){
    //     $(this).css("box-shadow", "0 0 4px #666");
    // });

    // inputFields.blur(function(){
    //     $(this).css("box-shadow", "none");
    // });

    // $("#name").blur(function(){
    //     var text = $(this).val();
    //     if(text.length < 3){
    //         $(this).css("box-shadow", "0 0 4px #811");
    //     } else {
    //         $(this).css("box-shadow", "0 0 4px #181");
    //     }
    // });


    // $("#checkbox").change(function(){
    //     var isChecked = $(this).prop("checked");
    //     if(isChecked){
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    //     } else {
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
    //     }
    // });

    // $("#checkbox").change(function(){
    //     var isChecked = $(this).is(":checked");
    //     if(isChecked){
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    //     } else {
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
    //     }
    // });

    // //ül 2     
        // $("#selection").change(function() {
        //     var isSelection = $(this).children("option:selected").val();
        //     alert("Sina valisid " + isSelection);
        // });
        //    

        // $("#form").submit(function(event){
        //     var textArea =$("#message");
        //     if(textArea.val().trim() == ""){
        //         textArea.css("box-shadow", "0 0 4px #811");
        //         event.preventDefault();
        //     } else {
        //         //toimub andmete edastamine serverile
        //     }
        // });


//  });


    //ül 3
    // $(function(){
    //     $("#form").submit(function(event){
    //         var name = $("#name").val();
    //         var password = $("#password").val();
    //         var message = $("#message").val();
    //         var checked = $("#checked").is(":checked");

    //         validateNameField(name, event);
    //         validatePasswordField(password, event);
    //         validateMessageField(message, event);
    //         validateCheckboxField(checked, event);

    //     });
    // });
    // //name valideerimine
    // function validateNameField(name, event){
    //     if(!isValidName(name)){ 
    //         $("#name-feedback").text("Palun sisesta vähemalt 2 tähemärki");
    //         event.preventDefault();
    //     } else {
    //         $("#name-feedback").text("");
    //     }
    // }

    // function isValidName(name){
    //     return name.length >= 2;
    // }
    // //password valideerimine
    // function validatePasswordField(password, event){
    //     if(!isValidPassword(password)){ 
    //         $("#password-feedback").text("Parool peab olema vähemalt 6 sümbolit pikk");
    //         event.preventDefault();
    //     } else {
    //         $("#password-feedback").text("");
    //     }
    // }

    // function isValidPassword(password){
    //     return password.length >= 6;
    // }
    // //textarea valideerimine
    // function validateMessageField(message, event){
    //     if(!isValidMessage(message)){ 
    //         $("#message-feedback").text("Palun sisesta sõnum");
    //         event.preventDefault();
    //     } else {
    //         $("#message-feedback").text("");
    //     }
    // }

    // function isValidMessage(message){
    //     return message.trim() != "";
    // }
    // //checkbox valideerimine
    // function validateCheckboxField(isChecked, event){
    //     if(!isChecked){ 
    //         $("#checkbox-feedback").text("Palun nõustuda sellega");
    //         event.preventDefault();
    //     } else {
    //         $("#checkbox-feedback").text("");
    //     }
    // }

    //ül 4
    $(function(){
        var form = $("#form");
        enableFastFeedback(form);

        form.submit(function(event){
            var name = $("#name").val();
            var password = $("#password").val();
            var message = $("#message").val();
            var checked = $("#checked").is(":checked");

            validateNameField(name, event);
            validatePasswordField(password, event);
            validateMessageField(message, event);
            validateCheckboxField(checked, event);

        });
    });

    function enableFastFeedback(formElement){
        var nameInput = formElement.find("#name");
        var passwordInput = formElement.find("#password");
        var messageInput = formElement.find("#message");
        var checkboxInput = formElement.find("#checkbox");

        //nimeväljale blur
        nameInput.blur(function(event){
            var name = $(this).val();
            validateNameField(name, event);

            if(!isValidName(name)){
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #811",
                        "border": "1px solid #600"
                    }
                );
            } else {
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #181",
                        "border": "1px solid #060"
                    }
                );
            }
        });

        //paroolivälja blur
        passwordInput.blur(function(event){
            var password = $(this).val();
            validatePasswordField(password, event);

            if(!isValidPassword(password)){
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #811",
                        "border": "1px solid #600"
                    }
                );
            } else {
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #181",
                        "border": "1px solid #060"
                    }
                );
            }
        });

        //sõnumiväla blur
        messageInput.blur(function(event){
            var message = $(this).val();
            validateMessageField(message, event);

            if(!isValidMessage(message)){
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #811",
                        "border": "1px solid #600"
                    }
                );
            } else {
                $(this).css(
                    {
                        "box-shadow": "0 0 4px #181",
                        "border": "1px solid #060"
                    }
                );
            }
        });

        //checkbox blur
        checkboxInput.change(function(event){
            var isChecked = $(this).is(":checked");
            validateCheckboxField(isChecked, event);

            if(!isChecked){
                $(this).add("label[for='cb']").css(
                    {
                        "box-shadow": "0 0 4px #811",
                        "border": "1px solid #600"
                    }
                );
            } else {
                $(this).add("label[for='cb']").css(
                    {
                        "box-shadow": "0 0 4px #181",
                        "border": "1px solid #060"
                    }
                );
            }
        });

    }



    //name valideerimine
    function validateNameField(name, event){
        if(!isValidName(name)){ 
            $("#name-feedback").text("Palun sisesta vähemalt 2 tähemärki");
            event.preventDefault();
        } else {
            $("#name-feedback").text("");
        }
    }

    function isValidName(name){
        return name.length >= 2;
    }
    //password valideerimine
    function validatePasswordField(password, event){
        if(!isValidPassword(password)){ 
            $("#password-feedback").text("Parool peab olema vähemalt 6 sümbolit pikk");
            event.preventDefault();
        } else {
            $("#password-feedback").text("");
        }
    }

    function isValidPassword(password){
        return password.length >= 6;
    }
    //textarea valideerimine
    function validateMessageField(message, event){
        if(!isValidMessage(message)){ 
            $("#message-feedback").text("Palun sisesta sõnum");
            event.preventDefault();
        } else {
            $("#message-feedback").text("");
        }
    }

    function isValidMessage(message){
        return message.trim() != "";
    }
    //checkbox valideerimine
    function validateCheckboxField(isChecked, event){
        if(!isChecked){ 
            $("#checkbox-feedback").text("Palun nõustuda sellega");
            event.preventDefault();
        } else {
            $("#checkbox-feedback").text("");
        }
    }
            
    


    

        

        


       




