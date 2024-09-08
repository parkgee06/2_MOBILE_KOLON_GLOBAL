"use strict";

function onOff() {
    let attractionXhr = new XMLHttpRequest();
    let attractionObject;
    const pushList = document.querySelector('.chemical_1 ul');
    const popupContent = document.querySelector('.popup_content');
    const popupBack = document.querySelector('.popup_back');
    const popupContainer = document.querySelector('.popup_container');
    const closeBtn = document.querySelector('.close_btn');

    function deleteAll() {
        // 팝업 닫기 애니메이션
        popupContainer.classList.remove('show');
        setTimeout(() => {
            document.body.classList.remove('scroll_lock');
            popupBack.style.display = 'none';
            popupContainer.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300); // 팝업 닫는 애니메이션 시간 (300ms 정도)
    }

    function dataPrint(data) {
        let attractionContent = '';
        for (let i = 0; i < data.length; i++) {
            attractionContent += `
                <li>
                    <a href="#" class="popbtn">
                        <div class="top_img">
                            <img src="${data[i].attImg}" alt="${data[i].attTitle}">
                        </div>
                        <dl>
                            <dt class="attTitle">${data[i].attTitle}</dt>
                            <dd class="attText1">${data[i].attText1}</dd>
                        </dl>
                        <p class="more_btn">
                            자세히 보기
                            <i class="fa-solid fa-angles-right"></i>
                        </p>
                    </a>
                </li>
            `;
        }
        pushList.innerHTML = attractionContent;
    }

    function popupPrint(popupData) {
        const popupBtns = document.querySelectorAll('.popbtn');
    
        popupBtns.forEach(function(popupBtn, index) {
            popupBtn.addEventListener('click', function(e) {
                e.preventDefault();
                popupBack.style.display = 'block';
                popupContainer.style.display = 'block';
                
                // 팝업 열기 애니메이션
                setTimeout(() => {
                    popupContainer.classList.add('show');
                }, 10);

                document.body.classList.add('scroll_lock');
                document.body.style.overflow = 'hidden';

                let popupContent = `
                    <p>${popupData[index].popupHead}</p>
                    <ul>
                        <li>
                            <img src="${popupData[index].popupImg1}" alt="${popupData[index].popupHead}">
                        </li>
                        <li>
                            <img src="${popupData[index].popupImg2}" alt="${popupData[index].popupHead}">
                        </li>
                    </ul>
                    <p>${popupData[index].main_tex}</p>
                    <dl>
                        <dt>
                            <span></span>
                            <p>사업내용</p>
                        </dt>
                        <dd>${popupData[index].td}</dd>
                        <dd>${popupData[index].td1}</dd>
                        <dd>${popupData[index].td2}</dd>
                        <dd>${popupData[index].td3}</dd>
                        <dd>${popupData[index].td4}</dd>
                        <dt>
                            <span></span>
                            <div>
                                <p>사업문의</p>
                                <p>질문이나 상담을 원하시면 전화로 문의 부탁드립니다.</p>
                            </div>
                        </dt>
                        <dd>
                            <table>
                                <thead>
                                    <tr>
                                        <th>업무</th>
                                        <th>담당</th>
                                        <th>연락처</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>${popupData[index].tel1}</td>
                                    <td>${popupData[index].tel2}</td>
                                    <td>${popupData[index].tel3}</td>
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                `;
                document.querySelector('.popup_content').innerHTML = popupContent;
            });
        });
    }

    attractionXhr.onload = function() {
        attractionObject = JSON.parse(attractionXhr.responseText);
        dataPrint(attractionObject.chemical);
        popupPrint(attractionObject.chemical);

        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            deleteAll();
        });

        popupBack.addEventListener('click', deleteAll);
    }

    attractionXhr.open('GET', './data/chemical_data.json', true);
    attractionXhr.send();
}

onOff(); 