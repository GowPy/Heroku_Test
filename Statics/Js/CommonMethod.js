////"""""This File is a CommonMethod for all Pages""""/////

/////For block special characters/////
function isValid(str) {
    return !/[.~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

$(document).on('keypress', '.ClsCharSpecial', function (e) {
    if (e.which === 32)
        return false;
    var character = String.fromCharCode(event.keyCode);
    return isValid(character);
});
/////For block special characters/////

//GetName//
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//GetName//

/////For changing first letter only caps/////
$(document).on("blur",'.clsFLCaps',function (){
        let User = $(this).val();
        let CapsName = capitalize(User);
        $(".clsFLCaps").val(CapsName);
    });

    function capitalize(str) {
        strVal = '';
        str = str.split(' ');
        for (var chr = 0; chr < str.length; chr++) {
         strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
        }
        strVal = strVal.trim();
        return strVal
      };
/////For changing first letter only caps/////

//// For Allow only Numbers////
$(document).on('keydown', '.clsNumber', function (e) {
    onlyNumber(e);
});

function onlyNumber(e) {

    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190, 189, 109]) !== -1 ||

        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||

        (e.keyCode >= 35 && e.keyCode <= 40)) {

        return;
    }

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {//&& (e.keyCode == 189 || e.keyCode == 109)
        e.preventDefault();
    }
}
/// For Allow only Numbers////