$(document).ready(function(){
debugger
   TokenNo = getParameterByName("TokenNo");
   console.log(TokenNo)
   if(TokenNo == '' || TokenNo == 'undefined' ){
    var Count = $('#Tbody > tr').length;
   }
   else{
    $('#btnSave').html('<i class="fa fa-save"></i> Update');
    $('#btnExit').css('margin-left', '22px');
    $('#btnDelete').css('margin-left', '7px');
    GetSnackDtls(TokenNo);
   }
   if(Count == 0){
    cloneRow(Count);
   }
});

$(document).on("click","#btnSave",function(){
     var Snack_Name = $("#idSnackName").val();
     var Snack_Qty = $("#idSnackQty").val();
     var Snack_Price = $("#idSnackPrice").val();
     var Snack_UOM = $("#idSnackUOM").val();
     let CreatedBy = $("#lblUserName").text();
     let Token = $("#lblToken").text();
     console.log(CreatedBy);
     console.log(Token);
     if(Snack_Name == ""){
       alert("Please Fill The Snack Name")
     }
     else if(Snack_Qty == ""){
       alert("Please Fill The Snack Quantity");
     }
     else if(Snack_UOM == ""){
       alert("Please Fill The Snack UOM");
     }
     else if(Snack_Price == ""){
       alert("Please Fill The Snack Price");
     }
     else{
     let items = [];
     debugger
     items.push("Snack_Name : "+Snack_Name);
     items.push("Snack_Qty : "+Snack_Qty);
     items.push("Snack_Price : "+Snack_Price);
     items.push("Snack_UOM : "+Snack_UOM);
     items.push("CreatedBy : "+CreatedBy);
     console.log(items);
     let JsonText = JSON.stringify(items);
     let result = AjaxPost("/BMSApp/SaveSnack/", {"JsonText" : JsonText});
    if(result == "Data has been inserted successfully."){
      setTimeout(function() {SuccessAlert(result);}, 200);
     }
     else if(result == "Data has been modified successfully."){
      setTimeout(function() {SuccessAlert(result);}, 200);
     }
     else{
      setTimeout(function() {FailAlert();}, 200);
     }
     }
});

$(document).on("click","#btnDelete",function(){
  let Token = $("#idToken").val();
  let Mode = "Snack";
  let items = [];
  items.push("SearchData : "+Token);
  items.push("Mode : "+Mode);
  let JsonText = JSON.stringify(items);
  debugger
  let result  = AjaxPost("/BMSApp/DeleteData/", {"JsonText" : JsonText});
  console.log(result);
  if(result == "Snack Deleted."){
    setTimeout(function() {DeleteAlert(result);}, 200);
  }
  else{
    setTimeout(function(){EmptyAlert('Delete');},200);
  }
});

function cloneRow(id) {
debugger
    var nid = parseInt(id) + 1;
    cloneThis = $('#MainRow_').clone();
    cloneThis.find('#Sl_No_').attr('id', 'Sl_No_' + nid);
    cloneThis.find('#Snack_Name_').attr('id', 'Snack_Name_' + nid);
    cloneThis.find('#Snack_Qty_').attr('id', 'Snack_Qty_' + nid);
    cloneThis.find('#Snack_UOM_').attr('id', 'Snack_UOM_' + nid);
    cloneThis.find('#SnackPrice_').attr('id', 'SnackPrice_' + nid);
    cloneThis.find('#Edit_').attr('id', 'Edit_' + nid).attr('value', '');
    cloneThis.find('#Delete_').attr('id', 'Delete_' + nid).attr('value', '');
    cloneThis.attr('id', 'MainRow_' + nid);
    cloneThis.appendTo('#Tbody');
}

$(document).on('keyup focus', '#idSnackUOM', function () {
    debugger
    let SearchData = $("#idSnackUOM").val();
    let Mode = "Snack";
    let items = [];
    items.push("SearchData : "+SearchData);
    items.push("Mode : "+Mode);
    let JsonText = JSON.stringify(items);
    let Result = AjaxPost("/BMSApp/GetData/",{"JsonText" : JsonText});
    let Join_Dic = Result.split('}{').join('}_{')
    let Split_Array = Join_Dic.split('_');
    let Array = [] ;
    for(var i=0; i < Split_Array.length; i++){
      var SplitVal = Split_Array[i].split("{");
      var SplitAgn = SplitVal[1].split("}");
      let Str = SplitAgn[0].split("'");
      Array.push((Str[1]));
    }
    console.log(Array);
    var Obj = Array[0];
    if(Result != ""){
     Ac();
    }
    function Ac(){
      $('#idSnackUOM').autocomplete({
        source: function (request, responce) {
           if(Array != ""){
            responce(Array);
           }
        },
        minLength: 0,
      }).bind('click', function () { $(this).autocomplete("search"); });
    }
});

$(document).on('blur', '#idSnackUOM', function () {
debugger
    let SearchData = $("#idSnackUOM").val();
    if(SearchData != ''){
     let Mode = "Check_SnackUOM";
     let items = [];
     items.push("SearchData : "+SearchData);
     items.push("Mode : "+Mode);
     let JsonText = JSON.stringify(items);
     let Result = AjaxPost("/BMSApp/DeleteData/",{"JsonText" : JsonText});
     if (Result != SearchData){
      $("#idSnackUOM").val('');
     }
    }
});

$(document).on('keyup focus', '#idSnackName', function () {
    debugger
    let SearchData = $("#idSnackName").val();
    let Mode = "Snack_Name";
    let items = [];
    items.push("SearchData : "+SearchData);
    items.push("Mode : "+Mode);
    let JsonText = JSON.stringify(items);
    let Result = AjaxPost("/BMSApp/GetData/",{"JsonText" : JsonText});
    let Join_Dic = Result.split('}{').join('}_{')
    let Split_Array = Join_Dic.split('_');
    let Array = [] ;
    for(var i=0; i < Split_Array.length; i++){
      var SplitVal = Split_Array[i].split("{");
      var SplitAgn = SplitVal[1].split("}");
      let Str = SplitAgn[0].split("'");
      Array.push((Str[1]));
    }
    console.log(Array);
    var Obj = Array[0];
    if(Result != ""){
     Ac();
    }
    function Ac(){
      $('#idSnackName').autocomplete({
        source: function (request, responce) {
           if(Array != ""){
            responce(Array);
           }
        },
        minLength: 0,
      }).bind('click', function () { $(this).autocomplete("search"); });
    }
});

$(document).on('blur', '#idSnackName', function () {
debugger
    let SearchData = $("#idSnackName").val();
    if(SearchData != ''){
     let Mode = "Check_SnackName";
     let items = [];
     items.push("SearchData : "+SearchData);
     items.push("Mode : "+Mode);
     let JsonText = JSON.stringify(items);
     let Result = AjaxPost("/BMSApp/DeleteData/",{"JsonText" : JsonText});
     if (Result != SearchData){
      $("#idSnackName").val('');
     }
    }
});

function GetSnackDtls(TokenNo){
   let items = [];
   items.push("SearchData : "+TokenNo);
   //items.push("Mode :"+Mode);
   let JsonText = JSON.stringify(items);
   debugger
   let result  = AjaxPost("/BMSApp/GetSnackMaster/", {"JsonText" : JsonText});
   //let Count = (result.match(/{/g) || []).length;
   if(result){
      let Join_Dic = result.split('}{').join('}_{')
      let Split_Array = Join_Dic.split('_');
      let Array = [] ;
      for(var i=0; i < Split_Array.length; i++){
        Array.push(JSON.parse((Split_Array[i]).replace(/'/g,"\"")));
      }
      console.log(Array);
      var Obj = Array[0];
      $('#idToken').val(Obj.token);
      $('#idSnackName').val(Obj.snackname);
      $('#idSnackQty').val(Obj.snackquantity);
      $('#idSnackUOM').val(Obj.snackuom);
      $('#idSnackPrice').val(Obj.snackprice);
   }
};

function SuccessAlert(result){
var Snack_Name = $("#idSnackName").val();
swal({
  title: Snack_Name + " Saved. " ,
  text: result,
  type: 'success',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal();},2500);
};

function DeleteAlert(result){
var Snack_Name = $("#idSnackName").val();
swal({
  title: Snack_Name + " Deleted. " ,
  text: result,
  type: 'warning',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal();},2500);
};

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


function FailAlert(){
 swal({
  title: 'Fail...',
  text: "Please Enter the data correctly...",
  type: 'error',
  showConfirmButton:false
 });
 setTimeout(function(){CloseSwal();},2500);
}

function CloseSwal(){
  swal.close();
  window.location.href="/BMSApp/Snack_MasterIndex";
};

$(document).on("click","#btnExit",function(){
   window.location.href = "/BMSApp/Snack_MasterIndex";
});
