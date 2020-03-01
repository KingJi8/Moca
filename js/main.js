$(function(){
    //wrap 높이
    var back = $('.back');
    var winW = $(window).width();
    var winH = $(window).height();
    back.outerHeight(winH)
    
    
    //오프닝
    var $open = $('.open')
    var openbox = $('.open-box')
    var obw = openbox.width()
    var obh = openbox.height()
    openbox.css({'margin-left':'calc(50% - '+obw/2+'px)'})
    openbox.css({'margin-top':'calc(25% - '+obh/2+'px)'})
    
    openbox.click(function(){
        $open.stop().css({'background-color':'#121220'})
        $('.open-title, .open-txt').stop().css({'color':'#ffffff', transition:'2s'})
        openbox.delay(1000).animate({opacity:0},1000,function(){
            $(this).css({display:'none'});
            $open.stop().animate({opacity:0},1000);
            $('.wrap').delay(500).animate({opacity:1},2500,function(){
                $('.date').animate({opacity:1},700);
                $('.l-text-box').animate({opacity:1,left:'-80px'},700);
                $('.o-text-box').animate({opacity:1,right:'-100px'},700,function(){
                    $open.css({display:'none'})
                    lamouse();
                    osmouse();
                });
            });
        })
    });
    
    
    //애들 마우스오버
    var morak = $('.lamorak');
    var oscar = $('.oscar');
    var laimg = $('.l-img-box');
    var osimg = $('.o-img-box')
    var laimgimg = laimg.children('.mainimg');
    var osimgimg = osimg.children('.mainimg');
    function lamouse() {
        laimgimg.on({        
            mouseenter: function(){
                $(this).stop().animate({width:'81%', height:'81%'},500);
                morak.css({'z-index':'99999'});
                oscar.stop().animate({opacity:'0.6'},300);
                osimgimg.stop().animate({width:'79%', height:'79%'},300);
            },
            mouseleave: function(){
                $(this).stop().animate({width:'80%', height:'80%'},500);
                morak.css({'z-index':'0'});
                oscar.stop().animate({opacity:'1'},500);
                osimgimg.stop().animate({width:'80%', height:'80%'},500);
            }
        });
    };
    function osmouse() {
        osimgimg.on({
            mouseenter: function(){
                $(this).stop().animate({width:'81%', height:'81%'},500);
                oscar.css({'z-index':'99999'});
                morak.stop().animate({opacity:'0.6'},300);
                laimgimg.stop().animate({width:'79%', height:'79%'},300);
            },
            mouseleave: function(){
                $(this).animate({width:'80%', height:'80%'},500);
                oscar.css({'z-index':'0'});
                morak.stop().animate({opacity:'1'},500);
                laimgimg.stop().animate({width:'80%', height:'80%'},500);
            }
        });
    };
    lamouse();
    osmouse();
    
    //profile 클릭시
    var latxt = $('.l-text-box')
    var ostxt = $('.o-text-box')
    var date = $('.date');
    var laprofile = $('.la-profile');
    var lapclose = laprofile.children('.close');
    var osprofile = $('.os-profile');
    var ospclose = osprofile.children('.close');
    function laclick(){
        laimgimg.click(function(){
            $('.gnav').animate({opacity:0, visibility:'hidden', top:'-105%'},700);
            oscar.stop().animate({opacity:0, visibility:'hidden', right:'90px'},300,function(){
                $(this).css({display:'none'});
            });
            latxt.stop().animate({opacity:0},300);
            date.stop().animate({opacity:0},300);        
            morak.stop().animate({left:'0px'},500);
            laimgimg.stop().animate({width:'81%', height:'81%'},500);
            laimgimg.off('mouseover');
            osimgimg.off('mouseover');
            laimgimg.off('mouseleave');
            osimgimg.off('mouseleave');
            laimgimg.css({cursor:'auto'});
            laprofile.css({visibility:'visible'});
            laprofile.delay(300).animate({opacity:1,right:'50px'},700);
        });
        lapclose.click(function(){
            laprofile.animate({opacity:0,right:'50px'},300,function(){
                laprofile.css({visibility:'hidden'});
            });
            morak.animate({left:'120px'},500,function(){
                laimgimg.animate({width:'80%', height:'80%'},500);
                latxt.animate({opacity:1},700);
                date.animate({opacity:1},700);
                oscar.css({display:'initial', right:'90px'});
                oscar.animate({opacity:1,visibility:'visible', right:'140px'},700,function(){
                    lamouse();
                    osmouse();
                    laimgimg.css({cursor:'pointer'});
                });
            });
            $('.gnav').animate({opacity:1, visibility:'visible', top:'0%'},700);
        });
    };
    function osclick(){
        osimgimg.click(function(){
            $('.gnav').animate({opacity:0, visibility:'hidden', top:'-105%'},700);
            morak.stop().animate({opacity:0,visibility:'hidden', left:'70px'},300,function(){
                $(this).css({display:'none'});
            });
            ostxt.stop().animate({opacity:0},300);
            date.stop().animate({opacity:0},300);
            oscar.stop().animate({right:'0px'},500);
            osimgimg.stop().animate({width:'81%', height:'81%'},500);
            osimgimg.off('mouseover');
            laimgimg.off('mouseover');
            osimgimg.off('mouseleave');
            laimgimg.off('mouseleave');
            osimgimg.css({cursor:'auto'});
            osprofile.css({visibility:'visible'});
            osprofile.delay(300).animate({opacity:1,left:'50px'},700);
        });
        ospclose.click(function(){
            osprofile.animate({opacity:0, right:'50px'},300,function(){
                osprofile.css({visibility:'hidden'});
            });
            oscar.animate({right:'140px'},500,function(){
                osimgimg.animate({width:'80%', height:'80%'},500);
                ostxt.animate({opacity:1},700);
                date.animate({opacity:1},700);
                morak.css({display:'initial', left:'70px'});
                morak.animate({opacity:1,visibility:'visible', left:'120px'},700,function(){
                    osmouse();
                    lamouse();
                    osimgimg.css({cursor:'pointer'});
                });
                $('.gnav').animate({opacity:1, visibility:'visible', top:'0%'},700);
            });
        });
    };
    laclick();
    osclick();
    
    //클릭하면 움직이기
    var menu = $('.menu'),
        meach = menu.children('li'),
        mlogo = menu.children('.nav-logo'),
        mlist = menu.children('.menuicon');
    var slides = $('.slides'),
        slide = $('.slide');
    var menuicon = $('.menuicon');
    
    function slideback(){
        ostxt.animate({opacity:0},300);
        latxt.animate({opacity:0},300);
        date.animate({opacity:0},300);
        osimgimg.animate({opacity:0.2},700);
        laimgimg.animate({opacity:0.2},700);        
    }
    menuicon.click(function(){
        var slideIndex = $(this).index();
        if(slideIndex<=0) {
            slides.stop().animate({'left':-1200*(slideIndex+1)},700);
            slideback();
        }else if(slideIndex>=2){
            slides.stop().animate({'left':-1200*slideIndex},700);
            slideback();
        };
    });
    $('.nav-logo').click(function(){
        slides.animate({'left':0},500);
        ostxt.stop().animate({opacity:1},900);
        latxt.stop().animate({opacity:1},900);
        date.stop().animate({opacity:1},900);
        osimgimg.stop().animate({opacity:1},900);
        laimgimg.stop().animate({opacity:1},900,function(){
            slides.css({left:0});
        });
    });
    
    
    //D-day 카운트
    var $date = $('.d-date')
    var dateday = $date.children('span')
    var Dday = new Date(2015, 2, 4);
    var now = new Date();
    var daygap = now.getTime() - Dday.getTime();
    var resultdate = Math.floor(daygap / (1000 * 60 * 60 * 24) +1);    
    dateday.text(resultdate);
    
    //celebration
    var $cday = $('.c-day');
    var godate = new Date(Dday);
    godate.setDate(godate.getDate() - 1);
    
    function getFormatDate(date){
        var year = date.getFullYear();              //yyyy
        var month = (1 + date.getMonth());          //M
        month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
        var day = date.getDate();                   //d
        day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
        return  year + '.' + month + '.' + day;
    }
    
    var n = ['0'];
    var a = 0;
    var b = 0;
    for(var i=1; i<=7000; i++){
        var newdate = new Date(godate); //Dday 가져오기        
        newdate.setDate(godate.getDate() + i); //i일째 구하기
        var celdate = new Date(newdate); //i일 date 객체 재저장
        
        var dy = godate.getFullYear();
        var dm = godate.getMonth();
        var cm = celdate.getMonth();
        var dd = godate.getDate();
        var cd = celdate.getDate();
        var check = dm==cm && dd==cd; //n주년 참거짓 여부        
        
        var celday = getFormatDate(newdate); //i일 yyyy.mm.dd 형식 저장
        var kgap; //기념일 확인용
        
        //n백일째+n주년 계산
        if(i%100 == 0 || check == true) {
            n.push(i); //날짜 저장
            a = a+1; //li 위치
            if(i%100 == 0){
                $cday.eq(a).children('.cddate').text(celday);
                $cday.eq(a).children('.cdtxt').text(n[a]+'일')
                kgap = (now.getTime() - celdate.getTime());
                var kdategap = kgap/(1000*60*60*24);
                if(kdategap <= 0 && kdategap > -1) {
                    $cday.eq(a).children('.cddate').text('Today');
                    $cday.eq(a).children('.cddate').css({'color':'#121220','font-weight':'700'});
                    $cday.eq(a).children('.cdtxt').css({'color':'#121220'});
                    $cday.eq(a).css({'background-color':'#ffffff'});
                }else if(kdategap <= -1) {
                    $cday.eq(a).css({'border':'1px solid #a8a8ba'});
                    $cday.eq(a).children('.cddate').css({'color':'#a8a8ba'});
                    $cday.eq(a).children('.cdtxt').css({'color':'#a8a8ba'});
                };
            }else if(check == true) {
                b = b+1;
                var anndate = new Date (dy+b, dm, dd+1);
                var annday = getFormatDate(anndate);
                $cday.eq(a).children('.cddate').text(annday);
                $cday.eq(a).children('.cdtxt').text(b+'주년');
                kgap = (now.getTime() - anndate.getTime());
                var kdategap = kgap/(1000*60*60*24);
                if(kdategap <= 0 && kdategap > -1) {
                    $cday.eq(a).children('.cddate').text('Today');
                    $cday.eq(a).children('.cddate').css({'color':'#121220','font-weight':'700'});
                    $cday.eq(a).children('.cdtxt').css({'color':'#121220'});
                    $cday.eq(a).css({'background-color':'#ffffff'});
                }else if(kdategap <= -1) {
                    $cday.eq(a).css({'border':'1px solid #a8a8ba'});
                    $cday.eq(a).children('.cddate').css({'color':'#a8a8ba'});
                    $cday.eq(a).children('.cdtxt').css({'color':'#a8a8ba'});
                };
            };
        }
    };
        
    //celebration 클릭하면 바꾸기
    $cday.click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).children('.cddate').stop().animate({opacity:0},300,function(){
                $(this).css({display:'none'});
                $(this).siblings('.cdtxt').css({display:'initial'});
                $(this).siblings('.cdtxt').stop().animate({opacity:1},300);            
            });
        }else{
            $(this).children('.cdtxt').stop().animate({opacity:0},300,function(){
                $(this).css({display:'none'});
                $(this).siblings('.cddate').css({display:'initial'});
                $(this).siblings('.cddate').stop().animate({opacity:1},300);            
            });
        };
    });
    
    
    //gallery 앞뒤 버튼
    
    var gal = $('.gallery'),
        galEach = gal.children('li'),
        galLen = galEach.length,
        firstIndex = 4,
        viewIndex = 4;
    
    //갤러리 앞뒤 추가 (4개 보이기 기준)
    var galimg = [],
        galplus = [];
    for(i=0;i<galLen; i++) {
        galimg[i] = galEach.eq(i).html();
        galplus[i] = '<li class="galImgbox">'+galimg[i]+'</li>';
    };
     
    galEach.first().before(galplus[galLen-4],galplus[galLen-3],galplus[galLen-2],galplus[galLen-1]);
    galEach.last().after(galplus[0],galplus[1],galplus[2],galplus[3]);
    
    galLen = gal.children('li').length;
    
    var galleryW = gal.width(),
        galWnum = galleryW/viewIndex,
        galMargin = 60;
    gal.children('li').css({
        width:galWnum-galMargin,
        'margin-left':galMargin/2+'px',
        'margin-right':galMargin/2+'px',
    });
    
    var galW = gal.children('li').width();
    galleryW = gal.css({width:(galW+galMargin)*galLen});
    
    gal.css({left:-((galW+galMargin)*viewIndex)});
   
    
    //갤러리 움직이기
    function galMove(index){
        var left = -index*(galW+galMargin);
        gal.animate({left:left},300,function(){
            
            if(viewIndex <= 0) {
                gal.css({left:-(galLen-firstIndex*2)*(galW+galMargin)});
                viewIndex = galLen-firstIndex*2;
            };
            if(viewIndex+4 >= galLen) {
                gal.css({left:-(firstIndex)*(galW+galMargin)});
                viewIndex = firstIndex;
            };
            
        });
    };
    
    $('.gbtnPrev').click(function(){
        viewIndex--;
        galMove(viewIndex);
    });
    $('.gbtnNext').click(function(){
        viewIndex++;
        galMove(viewIndex);
    });
    
    gal.children('li').each(function(){
        //if($(this).children('span').hasClass('img') == true) {
            $(this).click(function(){
                var modalhtml = $(this).html();
                var modalClose = '<span onclick="modalClose()" class="mCloseBtn"><img src="img/modal_close.png" alt="모달창 닫기버튼"></span>';
                $('.modal').html(modalhtml+modalClose);
                $('.modal').css({display:'flex'});
            });
        //};
    });
    
    function returnFalse(){
        return false;
    };
    
    
    $(window).resize(function(){
        var winH = $(window).height();
        back.outerHeight(winH);
        //$('.lamorak, .oscar').css({bottom:0});
    });
    
});