/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function() {
    var select = $('.item'),
            options9 = ["<option>View Trip Details</option>", '<option value="——————"disabled>—————</option>', "<option>Enroll</option>"],
            options11 = ["<option>View/Edit Contract</option>","<option>Edit Information</option>", '<option value="——————"disabled>—————</option>',"<option>Resend Activation Code</option>","<option>Unenroll</option>"],
            options13 = ["<option>Create Contract</option>","<option>Edit Information</option>", '<option value="——————"disabled>—————</option>',"<option>Unenroll</option>"],
            options14 = ["<option>Enroll</option>"],
            role, options;

    role = options14
    switch (role) {
        case options9:
            options = options9
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options11:
            options = options11
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options13:
            options = options13
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options14:
            options = options14
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;

    }

});
