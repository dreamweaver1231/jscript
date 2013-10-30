/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function() {
    var select = $('.operatorRole')
    strLine = "------------------";//"—————————————";
    options1 = ["<option>Select</option>", "<option>View Trip Details</option>", "<option>View/Edit Contract</option>", "<option>Edit Information</option>", '<option value="' + strLine + '"disabled>' + strLine + '</option>', "<option>Resend Activation Code</option>", "<option>Unenroll</option>"],
            options2 = ["<option>Select</option>", "<option>View Trip Details</option>", '<option value="' + strLine + '"disabled>' + strLine + '</option>', "<option>Enroll</option>"],
            options3 = ["<option>Select</option>", "<option>View/Edit Contract</option>", "<option>Edit Information</option>", '<option value="' + strLine + '"disabled>' + strLine + '</option>', "<option>Resend Activation Code</option>", "<option>Unenroll</option>"],
            options4 = ["<option>Select</option>", "<option>Create Contract</option>", "<option>Edit Information</option>", '<option value="' + strLine + '"disabled>' + strLine + '</option>', "<option>Unenroll</option>"],
            options5 = ["<option>Select</option>", "<option>Enroll</option>"],
            role = options1
    switch (role) {
        case options1:
            options = options1
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options2:
            options = options2
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options3:
            options = options3
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options4:
            options = options4
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
        case options5:
            options = options5
            for (i = 0; i < options.length; i++) {
                $(select).append(options[i]);
            }
            break;
    }
    $("#dbOperatorTbl tr select").on('change', function(e) {
        $('#dynamicdataTable').remove();
        row_index = $(this).closest('td').parent()[0].sectionRowIndex;
        html=("<table id='dynamicdataTable' border='1px' width='202%'><thead></thead><tbody></tbody></table>");
        $('#dbOperatorTbl > tbody > tr:eq(' + row_index + ')').after(html);
        $("#dynamicdataTable").jsonTable({
            head: ['Trips', 'Miles', 'Pts.', 'Geoconference', 'Curfew', 'Speed'],
            json: ['Trips', 'Miles', 'Pts.', 'Geoconference', 'Curfew', 'Speed']
        });

        $("#dynamicdataTable").jsonTableUpdate({
            source: "data.json",
            rowClass: "rowClass",
            callback: function() {
//			$("#mssg").html("Table updated at " + new Date());
            }
        });
    });

});



