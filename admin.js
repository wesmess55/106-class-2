function register(){
    var code= $("#txtCode").val();
    var title= $("#txtTitle").val();
    var price= $("#txtPrice").val();
    var cat= $("#txtCategory").val();
    var image=$("#txtImage").val();
    console.log(code,title,price,cat,image);
}

function init(){
    $("#btnSave").click(register);

}

window.onload = init;