$(document).ready(function(){
   /*var Count = $('#Tbody > tr').length;
   debugger

   if(Count == 0){
    cloneRow(Count);
   }
   else{
    console.log(2 + "TableRow");
   }*/
   GetDrinkMasterDtls("0");
});

function GetDrinkMasterDtls(SearchData){
   let items = [];
   items.push("SearchData : "+SearchData);
   let JsonText = JSON.stringify(items);
   debugger
   let result = AjaxPost("/BMSApp/GetDrinkMaster/", {"JsonText" : JsonText});
   console.log(result);
   if(result){
      let fillData = "";
      $('#tableDrinkMaster').show();
      $('#tableDrinkMaster').DataTable().destroy();
      $('#TbodyDrinkMaster').html('');
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
        fillData += "<td class='text-center'>" + obj.drinkname + "</td>";
        fillData += "<td class='text-center'>" + obj.drinkquantity + "</td>";
        fillData += "<td class='text-center'>" + obj.drinkuom + "</td>";
        fillData += "<td class='text-center'>" + obj.drinkprice + "</td></tr>";
   /*     fillData += "<td class='text-center'>" + obj.RequestFrom + "</td> ";*/
      });
     /* */
 /*     $.each(Result, function (index) {
        var Obj = Result[index];
        fillData += "<tr class='chck'></td><td class='text-center clsEdit'><img src='' style='width:20px;height:20px'/></td>";
        fillData += "<td class='text-center clsToken' style='display:none;'>" + obj.TransID + "</td>";
        fillData += "<td class='text-center'>" + obj.RequestFrom + "</td>";
      });*/
      $('#TbodyDrinkMaster').append(fillData);
      $('#tableDrinkMaster').DataTable({
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
   window.location.href = '/BMSApp/Drink_Master?TokenNo=' + TokenNo ;
});

$(document).on("click","#btnNew",function(){
   window.location.href = "/BMSApp/Drink_Master";
});