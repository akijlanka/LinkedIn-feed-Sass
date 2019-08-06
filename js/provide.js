var Demo = (function($, undefined){
    $(function(){
        QuickDemo();
    });
    function QuickDemo(){
        $("#popup").PopupWindow({
            autoOpen    : false
        });
        $("#open").click(function () {
            $("#popup").PopupWindow("open");
        });
        $("#exit").click(function () {
            $("#popup").PopupWindow("close");
        });
    }
})(jQuery);
