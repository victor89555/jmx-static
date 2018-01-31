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
        $("#weibo-link").on("click", function(){
            if(_this.data.wbCodeShow){
                _this.data.wbCodeShow = false;
                $("#wb-code").hide();
            }else {
                _this.data.wbCodeShow = true;
                $("#wb-code").show();
            }
            if(_this.data.wxCodeShow){
                _this.data.wxCodeShow = false;
                $("#wx-code").hide();
            }
            if(_this.data.langulageShow){
                _this.data.langulageShow = false;
                $("#btn-langulage").removeClass("active");
                $("#list-langulage").hide();
            }
        });
        $("#weixin-link").on("click", function(){
            if(_this.data.wxCodeShow){
                _this.data.wxCodeShow = false;
                $("#wx-code").hide();
            }else {
                _this.data.wxCodeShow = true;
                $("#wx-code").show();
            }
            if(_this.data.wbCodeShow){
                _this.data.wbCodeShow = false;
                $("#wb-code").hide();
            }
            if(_this.data.langulageShow){
                _this.data.langulageShow = false;
                $("#btn-langulage").removeClass("active");
                $("#list-langulage").hide();
            }
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
            if(_this.data.wxCodeShow){
                _this.data.wxCodeShow = false;
                $("#wx-code").hide();
            }
            if(_this.data.wbCodeShow){
                _this.data.wbCodeShow = false;
                $("#wb-code").hide();
            }
        });
    }
}

footerComponent.init();
