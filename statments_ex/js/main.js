window.addEventListener("load", function () {
  // 모바일 메뉴 토글
  const menuBtn = this.document.querySelector(".menu-btn");
  const menu = this.document.querySelector(".menu");
  menuBtn.addEventListener("click", function () {
    // menu.classList.add("open")
    // contains: 특정문자를 포함하고 있는지 확인하는 함수
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });
  //   클릭메뉴
  const clickBtn = this.document.querySelector(".click-btn");
  const clickMenu = this.document.querySelector(".click-menu");
  clickBtn.addEventListener("click", function () {
    clickMenu.classList.toggle("toggleOpen");
  });
});
