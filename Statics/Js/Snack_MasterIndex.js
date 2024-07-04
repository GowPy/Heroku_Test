$(document).ready(function(){
   /*var Count = $('#Tbody > tr').length;
   debugger

   if(Count == 0){
    cloneRow(Count);
   }
   else{
    console.log(2 + "TableRow");
   }*/
   GetSnackMasterDtls("0");
});

$(document).on("click","#btnSearch",function(){
   debugger
   let SearchData = $("#idSearch").val();
       if(SearchData != ""){
      if ($.fn.DataTable.fnIsDataTable("#" + tableId)) {
            var oldTable = $("#" + tableId).DataTable();
            oldTable.destroy(true);
            $("#divFor_" + tableId).append(htmlTable);
        }
      //$('#tableSnackMaster tbody').empty();
      //$('#tableSnackMaster').empty();
      $('#tableSnackMaster').destroy();
      //$('#tableSnackMaster').dataTable().destroy();
      //$('#TbodySnackMaster').html('');
      GetSnackMasterDtls(SearchData);
   }
   else{
      setTimeout(function(){EmptyAlert('Search.');},200);
   }
});

function EmptyAlert(result){
//var Drink_Name = $("#idDrinkName").val();
swal({
  title: " No Data Found to " + result ,
  //text: result,
  type: 'warning',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal();},2500);
};

function CloseSwal(){
  swal.close();
  window.location.href="/BMSApp/Snack_MasterIndex";
};

function GetSnackMasterDtls(SearchData){
   debugger
   let items = [];
   items.push("SearchData : "+SearchData);
   let JsonText = JSON.stringify(items);
   debugger
   let result = AjaxPost("/BMSApp/GetSnackMaster/", {"JsonText" : JsonText});
   console.log(result);
   if(result != ''){
      let fillData = "";
      $('#tableSnackMaster').show();
      $('#tableSnackMaster').DataTable().destroy();
      $('#TbodySnackMaster').html('');
      let Join_Dic = result.split('}{').join('}_{')
      let Split_Array = Join_Dic.split('_');
      let Array = [] ;
      for(var i=0; i < Split_Array.length; i++){
        Array.push(JSON.parse((Split_Array[i]).replace(/'/g,"\"")));
      }
      console.log(Array);
      $.each(Array, function (index) {
      var obj = Array[index];
        fillData += "<tr class='chck'><td class='text-center clsToken' style='display:none;'>" + obj.token + "</td>";
        fillData += "<td class='text-center clsEdit'><i class='fa fa-edit' style='font-size: 22px;'></></td>";
        fillData += "<td class='text-center'>" + parseInt(index+1) + "</td>";
        fillData += "<td class='text-center'>" + obj.snackname + "</td>";
        fillData += "<td class='text-center'>" + obj.snackquantity + "</td>";
        fillData += "<td class='text-center'>" + obj.snackuom + "</td>";
        fillData += "<td class='text-center'>" + obj.snackprice + "</td></tr>";
   /*     fillData += "<td class='text-center'>" + obj.RequestFrom + "</td> ";*/
      });
     /* */
 /*     $.each(Result, function (index) {
        var Obj = Result[index];
        fillData += "<tr class='chck'></td><td class='text-center clsEdit'><img src='' style='width:20px;height:20px'/></td>";
        fillData += "<td class='text-center clsToken' style='display:none;'>" + obj.TransID + "</td>";
        fillData += "<td class='text-center'>" + obj.RequestFrom + "</td>";
      });*/
      $('#TbodySnackMaster').append(fillData);
      $('#tableSnackMaster').DataTable({
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
};

$(document).on("click",".clsEdit",function(){
   let TokenNo = $(this).parent().find('.clsToken').text();
   window.location.href = '/BMSApp/Snack_Master?TokenNo=' + TokenNo ;
});


$(document).on("click","#btnNew",function(){
   window.location.href = "/BMSApp/Snack_Master";
});