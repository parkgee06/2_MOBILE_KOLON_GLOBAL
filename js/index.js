// box1 호출코드
var swiper = new Swiper('.box1 .swiper-container', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    //spaceBetween: 5,  //단사이 여백
    loop: true,  //무한 loop
    initialSlide: 0, //초기 슬라이드 번호(0부터시작)
    //freeMode: true,  //터치 만큼 자유롭게 이동, 풀면 미친듯이 옆으로 가네?
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      //clickable: true,
    //   type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    autoplay: {  //자동
      delay: 3000,
      disableOnInteraction: false
    },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });

  // box2 호출코드
var swiper = new Swiper('.box2 .swiper-container', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
    //spaceBetween: 5,  //단사이 여백
    loop: true,  //무한 loop
    initialSlide: 0, //초기 슬라이드 번호(0부터시작)
    //freeMode: true,  //터치 만큼 자유롭게 이동, 풀면 미친듯이 옆으로 가네?
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {   //페이지 네이션
    //   el: '.swiper-pagination',
      //dynamicBullets: true,
      //clickable: true,
    //   type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    //},
    // autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true
    // }
  });


  //사업영역 스와이퍼 탭
  var swiper_tab = new Swiper('.swiper_tab', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1,  //단수
  });

  swiper_tab.on('slideChange', function () {
    $(".mid_menu .active").removeClass('active');
    $(".mid_menu a").eq(swiper_tab.activeIndex).addClass('active');
  });
  
  $(".mid_menu li a").on('touchstart mousedown', function(e) {
    e.preventDefault();
    $(".mid_menu .active").removeClass('active');
    
    $(this).addClass('active');

    //swiper.swipeTo($(this).index());					
    swiper_tab.slideTo($(this).index('.mid_menu li a'));
  });
  
  $(".mid_menu li a").click(function(e) {
  
    e.preventDefault();
  
  });


    // box3 호출코드
    var swiper3 = new Swiper('.box3 .swiper3', {
      //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView:'auto',  //단수
      spaceBetween: 10,  //단사이 여백
      //loop: true,  //무한 loop
      inutialSlides: 1,
      //freeMode: true,  //터치 만큼 자유롭게 이동
      centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      // navigation: {    //이전/다음 버튼
      //     nextEl: '.next1',
      //     prevEl: '.prev1',
      // },
      // pagination: {   //페이지 네이션
      // el: '.pagination1',
      // dynamicBullets: true,
      //clickable: true,
      //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      // },
      // autoplay: {  //자동
      // delay: 3000,
      // disableOnInteraction: false
      // },
  
      // scrollbar: {  //하단 스크롤바
      // el: '.swiper-scrollbar',
      // hide: true
      // }
  });