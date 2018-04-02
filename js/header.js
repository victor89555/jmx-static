var headerComponent = {
    data: {
        height: 40,
        isOver: false,
        isMoving: false,
        timer: null
    },
    init: function() {
        this.setClick();
        // this.checkMoving();
        this.checkOver();
        this.checkNav();
    },
    setClick: function() {
        var _this = this;
        _this.onMouseOver();
        _this.onMouseOut();
    },
    openSubNav: function(){
        var _this = this;
        $('.sub-navbar').css({'height': _this.data.height + 'px'});
    },
    closeSubNav: function(){
        var _this = this;
        $('.sub-navbar').css({'height':'0px'});
    },
    checkMoving: function(){
        var _this = this;
        var t = setInterval(function(){
            var h = parseFloat($('.sub-navbar').css('height'));
            if(h==_this.data.height || h == 0){
                _this.data.isMoving = false;
            }else{
                _this.data.isMoving = true;
            }
        })
    },
    checkOver: function(){
        var _this = this;
        var t = setInterval(function(){
            if(!_this.data.isMoving && !_this.data.isOver){
                _this.data.timer = setTimeout(function(){
                    _this.closeSubNav();
                    clearTimeout(_this.data.timer);
                    _this.data.timer = null;
                },500);
            }else if(_this.data.isOver){
                clearTimeout(_this.data.timer);
                _this.data.timer = null;
                _this.openSubNav();
            }
        })
    },
    onMouseOver: function (){
        var _this = this;
        $('.navitem:not(".empty")').on('mouseover',function(){
            _this.data.isOver = true;
            var i = $('.navitem').index(this);
            $('#sub-navbar>ul>li').eq(i).show().siblings().hide();
        });
        $('#sub-navbar').on('mouseover',function(){
            _this.data.isOver = true;
        })
    },
    onMouseOut: function () {
        var _this = this;
        $('.navitem:not(".empty")').on('mouseout',function(){
            _this.data.isOver = false;
        });
        $('#sub-navbar').on('mouseout',function(){
            _this.data.isOver = false;
        });
    },
    checkNav:function(){
        var _this = this;
        var href = document.location.href;
        var nav = [
            ['brand','news'],
            ['series'],
            ['selling'],
            ['map'],
            ['agent','quality','search'],
            ['join']
        ];
        for(var i in nav){
            for(var j in nav[i]){
                if(href.indexOf(nav[i][j]) >= 0){
                    $('.navitem').eq(i).addClass('active').siblings().removeClass('active');
                    break;
                }
            }
        }
    }
}

headerComponent.init();