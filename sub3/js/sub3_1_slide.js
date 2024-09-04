 // 안전보건 경영시스템 index
 var memo = [
    {title: 'ACTION', 
    sub: ['안전보건 계획 및 실적 이사회 승인', '분기, 연간 성과측정 모니터링', '안전보건 예산 투자확대', '안전보건문화확대'],
    imgsrc: 'safety_manage_01.png'},
    {title: 'PLAN', 
    sub: ['사전 위험성 평가', '사전 작업허가서(Permit To Work)', '안전보건 정기 협의회', '협력사 생생 운영위원회'],
    imgsrc: 'safety_manage_02.png'},
    {title: 'CHECK', 
    sub: ['안전검사', '상시 안전보건 점검 체재운영', '외무전문가 컨설팅', '계층별 안전보건교육', '종사자 의견청취', '저격수급엽체 안전보건 평가 및 개편', '안전보건 평가 및 상벌규정 적용'],
    imgsrc: 'safety_manage_03.png'},
    {title: 'DO', 
    sub: ['경영책임자 안전보건 메시지', '안전보건 전문가 육성', '첨단 건설안전 Smart IOT 기술 투자', 'Safety Plus Kolon 문화운동', '안전보건 R&R (Role and Responsibility)'],
    imgsrc: 'safety_manage_04.png'}
];

var ind = 0;
var total = memo.length;

function conchange(){
    $('.safety_manage .img_box img').attr('src','./images/content1/'+memo[ind].imgsrc).hide().fadeIn('fast');
    $('.safety_manage .text').text( (ind+1)+'/'+total);
    $('.safety_manage dt').text(memo[ind].title);
    var liItems = memo[ind].sub.map(item => `<li>${item}</li>`).join('');
    $('.safety_manage dd ul').html(liItems);
}

$('.safety_manage .prev').click(function(e){ 
    e.preventDefault();
    ind--; 
    if(ind == -1) ind = total - 1;
    conchange();
});

$('.safety_manage .next').click(function(e){ 
    e.preventDefault();
    ind++; 
    if(ind == total) ind = 0;
    conchange();
});