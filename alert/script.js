$(function() {
    // 
    $("#bg").hide();

    $("#click").click(function() {
        $("#bg").fadeIn(300);
    });

//  「OK」ボタンをクリック
$("#ok").click(function() {
    // 
    $("#bg").fadeOut(300)
})
});