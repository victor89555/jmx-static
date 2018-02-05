var headerComponent = {
    data: {
        isOver: false
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
            let timer = setTimeout(function(){
                if(_this.data.isOver) {

                }else {
                    $('.sub-navbar').css({'height':'0px'})
                }
            },1500);
        })
        $("#sub-navbar").on('mouseover',function(){
           _this.data.isOver = true;
           $('.sub-navbar').css({'height':'40px'})
        }).on('mouseout',function(){
            let timer = setTimeout(function(){
                if(_this.data.isOver) {

                }else {
                    $('.sub-navbar').css({'height':'0px'})
                }
            },1000);
        })
    }
}

headerComponent.init();
