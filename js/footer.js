var footerComponent = {
    data:{
        wbCodeShow: false,
        wxCodeShowL: false,
        langulageShow: false,
    },
    init: function() {
        this.setClick()
    },
    setClick: function() {
        var _this = this;
        $("#weibo-link").on("mouseover", function(){
            $("#wb-code").show();
        });
        $("#weibo-link").on("mouseout", function(){
            $("#wb-code").hide();
        });
        $("#weixin-link").on("mouseover", function(){
            $("#wx-code").show();
        });
        $("#weixin-link").on("mouseout", function(){
            $("#wx-code").hide();
        });
        $("#btn-langulage").on("click",function(){
            if(_this.data.langulageShow){
                _this.data.langulageShow = false;
                $(this).removeClass("active");
                $("#list-langulage").hide();
            }else {
                _this.data.langulageShow = true;
                $(this).addClass("active")
                $("#list-langulage").show();
            }
        });
    }
}

footerComponent.init();
