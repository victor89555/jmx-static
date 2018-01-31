var headerComponent = {
    data: {

    },
    init: function() {
        this.setClick();
    },
    setClick: function() {
        var _this = this;
        $('.navitem').on('mouseover',function(){
            $('.sub-navbar').css({'height':'40px'})
            var i = $('.navitem').index(this);
            $('#sub-navbar>ul>li').eq(i).show().siblings().hide()
        })
        $('.navbar').on('mouseout',function(){
            $('.sub-navbar').css({'height':'0px'})
        })
    }
}

headerComponent.init();
