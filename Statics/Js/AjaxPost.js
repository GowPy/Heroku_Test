function AjaxPost(url, data) {
    var result = '';
    //$('.myspin').show();
    $.ajax({
        type: "GET",
        contentType: "application/json;charset=utf-8",
        headers: {
                'Content-Type':'application/json',
                'X-CSRFToken': "{{ csrf_token }}"
        },
        url: url,
        data: data,
        dataType: "text",
        cache:false,
        async: false,
        success: function (response) {
        debugger
            result = response;
            //setTimeout(function () { $('.myspin').hide(); }, 500);
        },
        error: function ajaxError(err) {
            result = '';
        }
    });
    return result;

}