$(document).ready(function() {
//$('#myModal').modal('hide');
});

$(document).on("click","#LogIn",function(){
     Login();
    // window.location.href = "/BMSApp/BMS";
});

///////Mandatory Alert///////////////


    function Login(){
          //let Login = 1;
          let UserName = $("#UserName").val();
          debugger
          let PassWord = $("#PassWord").val();
         // let Branch = $("#Branch").val();
          let AdminType = $("#ChkAdmin").is(":checked");
          let UserType = $("#ChkUser").is(":checked");
          let CommonType;
          AdminType == true ? CommonType='Admin' : UserType == true ? CommonType='User': AdminType == false && UserType == false ? CommonType='' : "" ;
          if(CommonType == ""){
            alert("Please choose the UserType,before log-in.");
          }
          else if(UserName == ""){
            alert("Please fill the Username.");
          }
          /*else if(Branch == ""){
            alert("Please choose the Branch.");
          }*/
          else if(PassWord == ""){
            alert("Please fill the Password.");
          }
          else{
            Log(CommonType,UserName,PassWord);
          }
      };

function Log(UserType,UserName,Password){
  let items = [];
  items.push("UserType : "+UserType);
  items.push("UserName : "+UserName);
  items.push("Password : "+Password);
  console.log(items);
  let JsonText = JSON.stringify(items);
  let result = AjaxPost("/BMSApp/LogIn/", {"JsonText" : JsonText});
  let Db_UserName = result.split(":")[0];
  let Db_Token = result.split(":")[1];
  console.log(Db_UserName + "_" + Db_Token)
  if(Db_UserName == UserName ){
   setTimeout(function() {SuccessAlert(Db_Token);}, 200);
   //window.location.href = "/BMSApp/Dashboard";
  }
  else{
   setTimeout(function() {FailAlert();}, 200);
  }
}

function SuccessAlert(Token){
swal({
  title: 'Logged In...',
  text: "Successfully You Are In....",
  type: 'success',
  showConfirmButton:false
});
 setTimeout(function(){CloseSwal(Token);},2500);
};

function FailAlert(){
 swal({
  title: 'Fail...',
  text: "Failed To Log In....",
  type: 'error',
  showConfirmButton:false
 });
 setTimeout(function(){CloseSwal("2");},2500);
}

function CloseSwal(Token){
  let UserName = $("#UserName").val();
  swal.close();
  if(Token != "2"){
  window.location.href = "/BMSApp/Dashboard?Token=" +Token+ "&UserName=" + UserName;
  }
};

/*
 function CheckPassword(PWD,From,CommonType){
     let ChkNumeric = 0;
     let ChkAlpha = 0;
     let UName = $('#UserName').val();
     let Pwd = $('#PassWord').val();
     let Val = PWD.split('');
     let Pointer = From;
     if (Val.length > 0) {
     debugger
        for (i = 0; Val.length > i; i++) {
            if ($.isNumeric(Val[i]) == true) {
                ChkNumeric = ChkNumeric + 1;
            }
            else if ($.isNumeric(Val[i]) == false) {
                ChkAlpha = ChkAlpha + 1;
            }
        }
        if(ChkNumeric == 0 && ChkAlpha == 0){
          alert("Please enter the valid password")
        }
        else{
         window.location.href = "/BMSApp/Dashboard";
        }
        }
     ChkAlpha = 0;
     ChkNumeric = 0;
     }
*/

///UserType////
let AdminTouch=0;
$(document).on('click', '#ChkAdmin', function () {
    UserTouch=0;
    AdminTouch = AdminTouch+1;
    AdminTouch==1  ? $('#ChkUser').prop('checked', false) : AdminTouch > 1 ? ($(this).prop('checked',false))+(AdminTouch=0):"";
});

let UserTouch=0;
$(document).on('click', '#ChkUser', function () {
    AdminTouch=0;
    UserTouch = UserTouch+1;
    UserTouch==1  ? $('#ChkAdmin').prop('checked', false) : UserTouch > 1 ? ($(this).prop('checked',false))+(UserTouch=0):"";
});
///UserType////
///Psw///
 function myFunction() {
     var x = document.getElementById("PassWord");
     if (x.type === "password") {
     x.type = "text";
     } else {
     x.type = "password";
     }
    };
///Psw///