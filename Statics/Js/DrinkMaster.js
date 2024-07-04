$(document).ready(function(){
   TokenNo = getParameterByName("TokenNo");
   console.log(TokenNo)
   if(TokenNo == '' || TokenNo == 'undefined' ){
    var Count = $('#Tbody > tr').length;
   }
   else{
    $('#btnSave').html('<i class="fa fa-save"></i> Update');
    $('#btnExit').css('margin-left', '22px');
    $('#btnDelete').css('margin-left', '7px');
    GetDrinkDtls(TokenNo);
   }
   if(Count == 0){
    cloneRow(Count);
   }
});

$(document).on("click","#btnSave",function(){
     var Drink_Name = $("#idDrinkName").val();
     var Drink_Qty = $("#idDrinkQty").val();
     var Drink_Price = $("#idDrinkPrice").val();
     var Drink_UOM = $("#idDrinkUOM").val();
     let CreatedBy = $("#lblUserName").text();
     let Token = $("#lblToken").text();
     console.log(CreatedBy);
     console.log(Token);
     if(Drink_Name == ""){
       alert("Please Fill The Drink Name")
     }
     else if(Drink_Qty == ""){
       alert("Please Fill The Drink Quantity");
     }
     else if(Drink_UOM == ""){
       alert("Please Fill The Drink UOM");
     }
     else if(Drink_Price == ""){
       alert("Please Fill The Drink Price");
     }
     else{
     let items = [];
     debugger
     items.push("Drink_Name : "+Drink_Name);
     items.push("Drink_Qty : "+Drink_Qty);
     items.push("Drink_Price : "+Drink_Price);
     items.push("Drink_UOM : "+Drink_UOM);
     items.push("CreatedBy : "+CreatedBy);
     console.log(items);
     let JsonText = JSON.stringify(items);
     let result = AjaxPost("/BMSApp/SaveDrink/", {"JsonText" : JsonText});
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
  let Mode = "Drink";
  let items = [];
  items.push("SearchData : "+Token);
  items.push("Mode : "+Mode);
  let JsonText = JSON.stringify(items);
  debugger
  let result  = AjaxPost("/BMSApp/DeleteData/", {"JsonText" : JsonText});
  console.log(result);
  if(result == "Drink Deleted."){
    setTimeout(function() {DeleteAlert(result);}, 200);
  }
  else{
    setTimeout(function(){EmptyAlert('Delete');},200);
  }
});


$(document).on('keyup focus', '#idDrinkUOM', function () {
    debugger
    let SearchData = $("#idDrinkUOM").val();
    let Mode = "Drink";
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
      $('#idDrinkUOM').autocomplete({
        source: function (request, responce) {
           if(Array != ""){
            responce(Array);
           }
        },
        minLength: 0,
      }).bind('click', function () { $(this).autocomplete("search"); });
    }
});

$(document).on('blur', '#idDrinkUOM', function () {
debugger
    let SearchData = $("#idDrinkUOM").val();
    if(SearchData != ''){
     let Mode = "Check_DrinkUOM";
     let items = [];
     items.push("SearchData : "+SearchData);
     items.push("Mode : "+Mode);
     let JsonText = JSON.stringify(items);
     let Result = AjaxPost("/BMSApp/DeleteData/",{"JsonText" : JsonText});
     if (Result != SearchData){
      $("#idDrinkUOM").val('');
     }
    }
});

$(document).on('keyup focus', '#idDrinkName', function () {
    debugger
    let SearchData = $("#idDrinkName").val();
    let Mode = "Drink_Name";
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
      $('#idDrinkName').autocomplete({
        source: function (request, responce) {
           if(Array != ""){
            responce(Array);
           }
        },
        minLength: 0,
      }).bind('click', function () { $(this).autocomplete("search"); });
    }
});

$(document).on('blur', '#idDrinkName', function () {
debugger
    let SearchData = $("#idDrinkName").val();
    if(SearchData != ''){
     let Mode = "Check_DrinkName";
     let items = [];
     items.push("SearchData : "+SearchData);
     items.push("Mode : "+Mode);
     let JsonText = JSON.stringify(items);
     let Result = AjaxPost("/BMSApp/DeleteData/",{"JsonText" : JsonText});
     if (Result != SearchData){
      $("#idDrinkName").val('');
     }
    }
});

function GetDrinkDtls(TokenNo){
   let items = [];
   items.push("SearchData : "+TokenNo);
   //items.push("Mode :"+Mode);
   let JsonText = JSON.stringify(items);
   debugger
   let result  = AjaxPost("/BMSApp/GetDrinkMaster/", {"JsonText" : JsonText});
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
      $('#idDrinkName').val(Obj.drinkname);
      $('#idDrinkQty').val(Obj.drinkquantity);
      $('#idDrinkUOM').val(Obj.drinkuom);
      $('#idDrinkPrice').val(Obj.drinkprice);
   }
};


function SuccessAlert(result){
var Drink_Name = $("#idDrinkName").val();
swal({
  title: Drink_Name + " Saved. " ,
  text: result,
  type: 'success',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal();},2500);
};

function DeleteAlert(result){
var Drink_Name = $("#idDrinkName").val();
swal({
  title: Drink_Name + " Deleted. " ,
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
  window.location.href="/BMSApp/Drink_MasterIndex";
};

function cloneRow(id) {
debugger
    var nid = parseInt(id) + 1;
    cloneThis = $('#MainRow_').clone();
    cloneThis.find('#Sl_No_').attr('id', 'Sl_No_' + nid);
    cloneThis.find('#Drink_Name_').attr('id', 'Drink_Name_' + nid);
    cloneThis.find('#Drink_Qty_').attr('id', 'Drink_Qty_' + nid);
    cloneThis.find('#Drink_UOM_').attr('id', 'Drink_UOM_' + nid);
    cloneThis.find('#DrinkPrice_').attr('id', 'DrinkPrice_' + nid);
    cloneThis.find('#Edit_').attr('id', 'Edit_' + nid).attr('value', '');
    cloneThis.find('#Delete_').attr('id', 'Delete_' + nid).attr('value', '');
    cloneThis.attr('id', 'MainRow_' + nid);
    cloneThis.appendTo('#Tbody');
}


$(document).on("click","#btnExit",function(){
   window.location.href = "/BMSApp/Drink_MasterIndex";
});