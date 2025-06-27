$(function() {
    // #tab1以外を非表示にする
    $('#contents div[id != "tab1"]').hide();
    // 
$("a").click(function() {
    // 
    $('#contents div').hide();

    // 
    $($(this).attr("href")).show(); // 

    // 
    $(".current").removeClass("current");

    return false;
    
})
});
