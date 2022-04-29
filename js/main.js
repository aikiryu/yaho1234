

function mobile(){
    let navWidth = $('nav').width();
    $('nav').css({'left' : -navWidth-30});


    $('.navBtn').on('click',function(){
  
        $('nav').stop().animate({'left':0})
    }); //Nav open
    
    $('.close').on('click',function(){
        let navWidth2 = $('nav').width();
        $('nav').stop().animate({'left' : -navWidth2-30});
    }); //Nav close


}

function pc(){
    $('nav').css({left:0});

}

function common(){

/**************gallary*************/

$('.gallItems').on('click',function(e){

    e.preventDefault();

    let img = $(this).find('figure').html();
    let titTxt = $(this).find('h4').text();
    let conTxt = $(this).find('p').text();

    $('.view').stop().fadeIn();
    $('.viewPic').html(img);
    $('.view h4').text(titTxt);
    $('.view p').text(conTxt);
});

$('.viewX, .bgClose').on('click',function(){
    $('.view').fadeOut();
}); //view Close


// mouse over시 자동재생되는 영상 구현 
//1. 먼저 꼭 muted 설정을 비디오에 해둬야함!!!!

$('.vidItems').on('mouseover',function(){
  //그 video를 가져와야함
  let vid = $(this).find('video').get(0);
  
  //vid의 재생을 합니다
  vid.play();

});// 1.vidItems 에 마우스를 올리면!!!


//마우스 떼면 멈추기!!
$('.vidItems').on('mouseout', function(){
    //그  video 또 가져와야함
    let vid = $(this).find('video').get(0);
    //vid의 재생을 멈춘다!!
    vid.pause();
    vid.currentTime = 0;

});

//.vidItems를 누르면 .videoView가 뜰것임!!!

$('.vidItems').on('click',function(e){
    e.preventDefault(); //a기능 막는거!
    $('.videoView').show();

    let vid = $(this).find('figure').html();
    $('.videoView').find('.viewVid').html(vid);

    //클릭했을때 뜰 video는 muted 옵션 사라짐 !
    $('.videoView').find('video').attr('muted','false');

    let vid2 = $('.videoView').find('video').get(0);

    vid2.play();

});// vidItems 를 클릭하면 해당 비디오를 띄우는것 

$('.vidBgClose').on('click',function(){

    $(this).find('.viewVid').children().remove();
    $('.videoView').hide();
    
});


$('.vidItems2').on('click',function(){

     //해당 아이템 내부의 vidKey
     let vidKey = $(this).find('.vidKey');
     let vidUrl = 
     '<iframe width="1280" height="720" src="https://www.youtube.com/embed/'+vidKey+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

     $('.videoView2').show().find('.viewVid2').html(vidUrl)
});

$('.vidBgClose2').on('click',function(){
    
    $('.viewVid2').html('');
    $('.videoView2').hide();

});



}//common


function responsive(){
    
let winWidth = $(window).width();
if(winWidth <= 760){
    mobile()
}else{
    pc()
}
}//responsive

responsive();
common();

$(window).on('resize',responsive);



