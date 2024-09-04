window.onload = () => {
    document.querySelector('.dropbtn_click').onclick = () => {
      dropdown();
    }
    document.getElementsByClassName('tab').onclick = () => {
      showMenu(value);
    };
    dropdown = () => {
        var v = document.querySelector('.dropdown-content');
        var dropbtn = document.querySelector('.dropbtn')
        v.classList.toggle('show');
        dropbtn.style.borderColor = 'rgb(94, 94, 94)';
      
  
    // 페이지 스크롤 위치 고정
    if (v.classList.contains('show')) {
        document.body.classList.add('dropdown-open');
      } else {
        document.body.classList.remove('dropdown-open');
      }
    }
  
    showMenu = (value) => {
      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');
  
      dropbtn_icon.innerText = '';
      dropbtn_content.innerText = value;
      dropbtn_content.style.color = '#252525';
      dropbtn.style.borderColor = '#3992a8';
    }
  }
  window.onclick = (e) => {
    if (!e.target.matches('.dropbtn_click')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
  
      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');
  
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          // 페이지 스크롤 위치 고정 해제
          document.body.style.overflow = 'auto';
        }
      }
    }
  }