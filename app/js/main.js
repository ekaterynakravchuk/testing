
$(function () {
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
    slidesPerView: 3,
    spaceBetween: 20
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

