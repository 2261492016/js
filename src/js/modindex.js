define([], function() {
    return {
        init: function() {
            const $lunbo = $('.slideshow');
            const $pic = $('.slideshow_pic li ');
            const $btn_left = $('.slideshow .btn_left');
            const $btn_right = $('.slideshow .btn_right');
            const $list = $('.circle li');
            const $menu_left = $('.arealeft');
            const $menu_leftNum = $('.arealeft>div');
            const $menu_two = $('.List_level2');
            const $menu_size = $('.arealeft>div>a');
            let index = 0;
            let time = null;

            function lb() {
                $list.eq(index).addClass('active').siblings('.circle li').removeClass('active');
                $pic.eq(index).stop(true).animate({ opacity: 1 }).siblings('.slideshow_pic li ').stop(true).animate({ opacity: 0 });

            }

            $list.on('mouseover', function() {

                index = $(this).index();
                // $list.eq($(this).index()).addClass('active').siblings('.circle li').removeClass('active');
                // $pic.eq(index).stop(true).animate({ opacity: 1 }).siblings('.slideshow_pic li ').stop(true).animate({ opacity: 0 });
                lb();
            });
            $btn_left.on('click', function() {
                index--;
                if (index < 0) {
                    index = $list.length - 1;
                }
                lb();
            })
            $btn_right.on('click', function() {
                index++;
                if (index > $list.length - 1) {
                    index = 0;
                }
                lb();
            })

            time = setInterval(function() {
                $btn_right.click();
            }, 1500)
            $lunbo.hover(function() {
                    clearInterval(time);

                }, function() {
                    time = setInterval(function() {
                        $btn_right.click();
                    }, 1500)
                }, 1500),


                $menu_leftNum.on('mouseover', function() {

                    $(this).addClass('act1').siblings('.arealeft>div').removeClass('act1');
                });

            $menu_size.on('mouseover', function() {
                // $(this).addClass('act2').siblings('.arealeft>div>a').removeClass('act2');
                $(this).css({ "color": "red" }).siblings('.arealeft>div>a').css({ "color": "black" });
            })
        }

    }
});