$(
    function () {

        window.addEventListener('scroll', () => {
            const scaleValue = 1 - window.scrollY * 0.0007;
            const itemsOnABelt = document.getElementById("product_move");
            const moveXValue = window.scrollY * 1.5;
            const image = document.getElementById("banner_logo");

            if (scaleValue > 0.6) {
                image.style.transform = `scale(${scaleValue})`;
            } else {
                image.style.transform = "scale(0.604182)";
            }
            itemsOnABelt.style.transform = `translateX(${550 - moveXValue}px)`;
        });
        window.addEventListener('scroll', () => {
            const header = document.querySelector(".header");
            if (window.scrollY > 800) {
                header.classList.add('bg_river');
            }
            else {
                header.classList.remove('bg_river');
            }
        });
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY * 1.5;
            const horizontal = document.getElementById("wrap_photo");
            if (scrollValue < 9700) {
                horizontal.style.transform = `translateX(${-scrollValue}px)`;
            } else {
                image.style.transform = "";
            }
        });
        const chips = document.querySelectorAll(".chip");

        chips.forEach(chip => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * 200; 
            chip.style.left = x + "px";
            chip.style.top = y + "px";
        });

        // Responsive Mobile  version  sidebar
        // 반응형 모바일 용 사이드바
        $(document).on("click", ".icon_menu", function () {
            $(".sidebar").animate({
                right: "0",
            }, 1000);
            $(this).fadeOut();
        });
        $(document).on("click", ".nav_icon_close", function () {
            $(".sidebar").animate({
                right: "-350",
            }, 1000);
            $(".icon_menu").show();
        });

        // toast message
        // 토스트메시지
        $(".toast_message").animate({
            opacity: 1
        }, 1000);
        $(".toast_message .icon_close").click(
            function () {
                $(".toast_message").remove();
            }
        );

        // Grid view
        // 그리드 이미지 보기
        $(".toner_v2, .serum_v2, .cream_v2, .cusion_v2").on("mouseenter", function () {
            const bgName = $(this).attr("class").split(" ")[1];
            $(".main.grid_bg")
                .stop(true, true)
                .css("opacity", 0.6)
                .removeClass("table_main")
                .addClass(bgName)
                .animate({
                    opacity: 1
                }, 1000)
        });
        $(".toner_v2, .serum_v2, .cream_v2, .cusion_v2").on("mouseleave", function () {
            const bgName = $(this).attr("class").split(" ")[1];
            $(".main.grid_bg")
                .stop(true, true)
                .css("opacity", 0.6)
                .removeClass(bgName)
                .addClass("table_main")
                .animate({
                    opacity: 1
                }, 1000)
        });

        // Accordion Q&A
        // 아코디언 Q&A
        $(".answer").hide();
        $(".qna_list li").click(
            function () {
                $(this).children(".answer").stop().slideToggle();
            }
        );

        // Instagram  Card animation
        // 인스타그램카드
        $(".instagram_card").mouseenter(function () {

            const currentIndex = $(this).index();
            const cards = $(this).closest(".box_instagram_card").find(".instagram_card");

            cards.each(function (index) {
                $(this).css("transform", "");
                if (index < currentIndex) {
                    $(this).css("transform", "rotate(-5deg)");
                }
                if (index > currentIndex) {
                    $(this).css("transform", "rotate(5deg)");
                }
                if (index === currentIndex) {
                    $(this).css("transform", "translateY(-45px)");
                }
            });
        });
        $(".instagram_card")
            .mouseleave(function () {
                $(this)
                    .closest(".box_instagram_card")
                    .find(".instagram_card")
                    .css("transform", "");
            });
    }
);