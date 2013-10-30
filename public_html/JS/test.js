$(document).ready(function() {
    var data = {
        "GUEST": {
            'visits': 1734070,
            'visits_pct': 74,
            'users': 1,
            'net_pv': 3432781,
            'users_pct': 0,
            'pv_pct': 13
        },
        'Logged In': {
            'visits': 4240,
            'visits_pct': 0,
            'users': 177,
            'net_pv': 188112,
            'users_pct': 0,
            'pv_pct': 0
        }
    }


    $.each(data, function(rowLabel, v) {
        alert("Hi")
        if (!header) {
            $table.append('');
            var $thead = $('thead tr', $table);
            $thead.append('');
            $.each(v, function(headerLabel) {
                $thead.append('' + headerLabel + '');
            });
            header = true;
        }
        $table.append('');
        var $tr = $('tr:last', $table);
        $tr.append('' + rowLabel + '');
        $.each(v, function(j, cellData) {
            $tr.append('' + cellData + '');
        })

    });

});