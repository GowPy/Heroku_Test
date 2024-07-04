$(document).ready(function(){
   var Count = $('#tbodyDr > tr').length;
/*   let Id = $(".CloneRow").attr('id');
   let SplitId = Id.split("_")[1]*/
   debugger
  // console.log(SplitId);
   if(Count == 0){
    cloneRow(Count);
    /*console.log()*/
   }
   else{
    console.log(2 + "TableRow");
   }
});


$(document).on("click","#btnSave",function(){
     var Product_Name = $("#idProduct_Name").val();
     var Product_Qty = $("#idProduct_Qty").val();
     var Product_Price = $("#idProduct_Price").val();
     var Product_UOM = $("#idProduct_UOM").val();
     if(Product_Name == ""){
       alert("Please Fill The Product Name")
     }
     else if(Product_Qty == ""){
       alert("Please Fill The Product Quantity")
     }
     else if(Product_UOM == ""){
       alert("Please Fill The Product UOM");
     }
     else if(Product_Price == ""){
       alert("Please Fill The Product Price");
     }
     else{
     debugger
     var items = [
                "PCS",
                "KGS",
                "LTR",
                "BOX",
                "CUPS"
            ];
     var jsonText = JSON.stringify(items);
     $.ajax({
             url:  'Save/' ,
             type:  'get',
	         dataType:  'json',
             data : {'jsonText' : jsonText},/*{
              'Product_Name': Product_Name,
              'Product_Price': Product_Price,
              'Product_Qty': Product_Qty,
              'Product_UOM': Product_UOM,
             },*/
             cache: false,
             contentType: false,
             success: function (response) {
               //var Obj = response[0];
               console.log(response.result);
               alert(response.result);
             }
     });
     }
});

function cloneRow(id) {
debugger
    var nid = parseInt(id) + 1;
    cloneThis = $('#MainRow_').clone();
    cloneThis.find('#Sl_No_').attr('id', 'Sl_No_' + nid);
    cloneThis.find('#Product_Name_').attr('id', 'Product_Name_' + nid);
    cloneThis.find('#Product_Qty_').attr('id', 'Product_Qty_' + nid);
    cloneThis.find('#Product_UOM_').attr('id', 'Product_UOM_' + nid);
    cloneThis.find('#ProductPrice_').attr('id', 'ProductPrice_' + nid);
    cloneThis.find('#Edit_').attr('id', 'Edit_' + nid).attr('value', '');
    cloneThis.find('#Delete_').attr('id', 'Delete_' + nid).attr('value', '');
    cloneThis.attr('id', 'MainRow_' + nid);
    cloneThis.appendTo('#tbodyDr');
}

var Dt = [ {text: "Choice 1"},
               {text: "Choice 2"},
               {text: "Choice 3"} ];
/*$(document).on('focus', '#idProduct_UOM', function () {
debugger
let Id = $(this).attr('id');
console.log(Id);
$("#idProduct_UOM").autocomplete(Dt, {
  matchContains: true,
  minChars: 0,
  formatItem: function(item)
    { return item.text; }
    }
  );
});*/

////Worked////
$(document).on('focus', '#idProduct_UOM', function () {
    let Id = $(this).attr('id');
    let Pro_UOM = $("#idProduct_UOM");
    $('#idProduct_UOM').autocomplete({
        source: function (request, response) {
        debugger
            let SearchData = $('#' + Id).val();
          var list = [
                "One",
                "two",
                "Three",
                "Four",
            ];//AjaxPost('/TMS/TMSPartMaster/UOMAutoComplete', JSON.stringify({ SearchData: SearchData, Mode: "GetUOM" }))
            if (list != "") {
                response(list);
              /*  console.log(result);*/
            }
        },
        position: { my: "right top", at: "right bottom" },
        minLength: 1,
    }).bind('click', function () { $(this).autocomplete("search"); });
});

/*$(document).on('focus', '#idProduct_UOM', function () {
var items = [
                "PCS",
                "KGS",
                "LTR",
                "BOX",
                "CUPS"
            ];
$("#idProduct_UOM").autocomplete({
                // This function takes words list as a source.
                source: items
            });
});*/

$(document).on("click","#btnExit",function(){

});