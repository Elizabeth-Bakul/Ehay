$(document).ready(function () {
  const lendingBut = $(".lending");
  const pagesBut = $(".pages");
  const submenuPages = $("#pages");
  const submenuLending = $("#lending");
  lendingBut.on("click", function () {
    submenuPages.removeClass("submenu-content--visible");
    submenuLending.toggleClass("submenu-content--visible");
    lendingBut.toggleClass("navbar-menu__button--active");
    pagesBut.removeClass("navbar-menu__button--active");
  });
  pagesBut.on("click", function () {
    submenuLending.removeClass("submenu-content--visible");
    submenuPages.toggleClass("submenu-content--visible");
    pagesBut.toggleClass("navbar-menu__button--active");
    lendingBut.removeClass("navbar-menu__button--active");
  });
  /*$(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      $(".submenu-content").removeClass("submenu-content--visible");
      $(".navbar-menu__button").removeClass("navbar-menu__button--active");
    }
  });*/
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".submenu"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      $(".submenu-content").removeClass("submenu-content--visible");
      $(".navbar-menu__button").removeClass("navbar-menu__button--active");
    }
  });

  var menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", function () {
    var menu = document.querySelector(".navbar-main");
    var body = $("body");
    menu.classList.toggle("navbar-main--visible");
    $(".to-top").toggleClass("to-top--hidden");
    body.toggleClass("body--visible");
  });

  var exampleSlider = new Swiper(".examples-slider", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".examples__button--next",
      prevEl: ".examples__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  var slider = new Swiper(".slider", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
    // Navigation arrows
    navigation: {
      nextEl: ".article-slider__button--next",
      prevEl: ".article-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  var modalButton = $('[data-toggle="modal"]');
  modalButton.each(function clickButton() {
    $(this).on("click", openModal);
  });
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", function (event) {
    event.preventDefault();
    closeModal();
  });

  //закрытие по нажатию клавиши
  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      closeModal();
    }
  });
  //открытие модального окна
  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
  }
  //закрытие модального окна
  function closeModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").css("overflow", "");
  }

  //закрытие по клику вне формы
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".modal__dialog");
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0 // и не по его дочерним элементам
    ) {
      closeModal();
    }
  });

  $(".subscribe-info__form").validate({
    errorClass: "mistake",
    messages: {
      email: {
        required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
        email: "Ваш адрес электронной почты должен быть в формате имя@домен.com.",
      },
    },
  });

  $(".modal__form").validate({
    errorClass: "mistake",
    messages: {
      name_modal: {
        required: "Введите ваше имя",
        minlength: "Имя должно быть длиннее 2-х символов",
      },
      email_modal: {
        required:
          "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
        email:
          "Ваш адрес электронной почты должен быть в формате имя@домен.com.",
      },
      phone_modal: {
        required: "Телефон обязателен",
        minlength: "Телефон должен быть 10 символов",
      },
    },
  });

  $("#modal__input-phone").mask("+7(999)999-99-99", {
    translation: { 9: { pattern: /[0-9]/, optional: false } },
  });



  if (!($("*").is(".thank-content"))){
    $(".submenu-content").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $(".navbar-main").removeClass("navbar-main--visible");
      $("body").removeClass("body--visible");
      $(".to-top").removeClass("to-top--hidden");
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  }
  const button = $(".to-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });	
  $(".to-top").on("click", function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 1500);
  });

  if ($("*").is("[data-aos]")) {
    AOS.init({
      disable: function () {
        var maxWidth = 1201;
        return window.innerWidth < maxWidth;
      },
    });
  }
});




