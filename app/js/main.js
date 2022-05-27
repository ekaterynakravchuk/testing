
$(function () {
    // fixed header
    let header = $('.header');
    let top = $('.top');
    let topH = top.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll resize load', function() {
        topH = top.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > topH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    })

    // open menu
    $('.header__burger').on('click', function(e) {
        e.preventDefault();
        $('.header__menu').toggleClass('open');
        $('.header__burger').toggleClass('close');
        $('.top__info').toggleClass('hidden');
    });
	// close click outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.header').length) {
          $('.header__menu').removeClass('open');
          $('.top__info').removeClass('hidden');
        }
        e.stopPropagation();
    });


    // popup
    const popupLink = $('.popup__link');
    const popup = $('.popup');
    const closePopup = $('.popup__close');

    popupLink.on('click', function(e) {
        e.preventDefault();
        popup.addClass('open');
    })

    closePopup.on('click', function() {
        popup.removeClass('open');
    });

    popup.on('click', function(e) {
        if (!$(e.target).closest('.popup__content').length) {
            popup.removeClass('open');
        }
        e.stopPropagation();
    });
})

// upload button

const uploadFile = document.querySelector('.contacts__hidden-input');
const uploadBtn = document.querySelector('.contacts__form-upload');
const uploadText = document.querySelector('.contacts__upload-text');

uploadBtn.addEventListener('click', function () {
    uploadFile.click();
});

uploadFile.addEventListener('change', function () {
    if (uploadFile.value) {
        uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
    }
});

// partners tabs

const tabsBtns = document.querySelectorAll('.partners__tab-btn');
const tabsItems = document.querySelectorAll('.partners__info-item');

tabsBtns.forEach(button => {
    button.addEventListener('click', function () {
        let tabID = button.getAttribute('data-tab');
        let activeTab = document.querySelector(tabID);

        if (!button.classList.contains('active')) {
            tabsBtns.forEach(button => {
                button.classList.remove('active');
            });

            tabsItems.forEach(item => {
                item.classList.remove('active');
            });

            button.classList.add('active');
            activeTab.classList.add('active');
        };

    });
});

// swiper

const swiper = new Swiper('.team__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        890: {
            slidesPerView: 3
        },
        600: {
            slidesPerView: 2
        },
        440: {
            slidesPerView: 1.25
        }
    }
});

// team tabs

const teamBtns = document.querySelectorAll('.team__tab-btn');
const teamItems = document.querySelectorAll('.team__swiper');

teamBtns.forEach(button => {
    button.addEventListener('click', function() {
        let teamID = button.getAttribute('data-tab');
        let activeTab = document.querySelector(teamID);

        teamItems.forEach(item => {
            item.classList.remove('active');
        });

        activeTab.classList.add('active');
    });
});

// smooth scroll

const menuLinks = document.querySelectorAll('.header__menu-link[data-scroll]');

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            const scrollToBlock = document.querySelector(menuLink.dataset.scroll);
            const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: scrollToBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
            document.querySelector('.header__menu').classList.remove('open');
            document.querySelector('.header__burger').classList.remove('close');
        }
    }
}