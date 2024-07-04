$(document).ready(function(){
   /*var Count = $('#Tbody > tr').length;
   debugger

   if(Count == 0){
    cloneRow(Count);
   }
   else{
    console.log(2 + "TableRow");
   }*/
   GetUserMasterDtls("");
});

/*function GetUserMasterDtls(SearchData){
   if(SearchData == ""){
     SearchData = 1 ;
   }
   let items = [];
   items.push("SearchData : "+SearchData);
   let JsonText = JSON.stringify(items);
   debugger
   let result = AjaxPost("/BMSApp/GetUserMaster/", {"JsonText" : JsonText});
   console.log(result);
   if(result){
      let fillData = "";
      $('#tableUserMaster').show();
      $('#tableUserMaster').DataTable().fnDestroy();
      $('#TbodyUserMaster').html('');
 *//*     $.each(Result, function (index) {
        var Obj = Result[index];
        fillData += "<tr class='chck'></td><td class='text-center clsEdit'><img src='' style='width:20px;height:20px'/></td>";
        fillData += "<td class='text-center clsToken' style='display:none;'>" + obj.TransID + "</td>";
        fillData += "<td class='text-center'>" + obj.RequestFrom + "</td>";
      });*//*
      $('#TbodyUserMaster').append(fillData);
      $('#tableUserMaster').DataTable({
            retrieve: true,
            //"destroy": true,
            //info: false,
            //searching: false,
            "dom": 'Bfrtip',
            buttons: [
                            'copy', 'csv', 'excel', 'pdf', 'print'
                        ]
        });
   }
};*/

/*
function cloneRow(id) {
debugger
    var nid = parseInt(id) + 1;
    cloneThis = $('#MainRow_').clone();
    cloneThis.find('#Token_').attr('id', 'Token_' + nid);
    cloneThis.find('#Edit_').attr('id', 'Edit_' + nid).attr('value', '');
    cloneThis.find('#Sl_No_').attr('id', 'Sl_No_' + nid);
    cloneThis.find('#User_Name_').attr('id', 'User_Name_' + nid);
    cloneThis.find('#User_Qty_').attr('id', 'User_Qty_' + nid);
    cloneThis.find('#User_UOM_').attr('id', 'User_UOM_' + nid);
    cloneThis.find('#UserPrice_').attr('id', 'UserPrice_' + nid);
    cloneThis.attr('id', 'MainRow_' + nid);
    cloneThis.appendTo('#Tbody');
}
*/

$(document).on("click","#btnNew",function(){
   window.location.href = "/BMSApp/User_Master";
});