$(document).ready(function() {
// 메인 사이즈 조정
	var windowWidth = $(window).width();
	var windowHight = $(window).height();
	var mainMenuHeight = windowHight * 0.11;
	var $main = $('#main'),
		$scroll = $('.scroll'),
		$mainMenu = $('.main_menu'),
		$btnMenu = $('.btn_menu'),
		$verMenu = $('.ver_menu');
	
	$main.css("width", windowWidth);
	$main.css("height", windowHight);
	$mainMenu.css("height", mainMenuHeight);
//	$scroll.css("padding-top", mainMenuHeight);
//	$scroll.css("padding-bottom", mainMenuHeight);
	menuBg();

	$(window).resize(function() {
		windowWidth = $(window).width();
		windowHight = $(window).height();
		mainMenuHeight = windowHight * 0.11;
		$main.css("width", windowWidth);
		$main.css("height", windowHight);
		$mainMenu.css("height", mainMenuHeight);
//		$scroll.css("padding-top", mainMenuHeight);
		if(!(windowWidth <= 767)){ 
			$verMenu.css("display","none");
		}
		menuBg();
	});
	
//	펼침메뉴
	$verMenu.hide();
    $btnMenu.click(function() {
		$verMenu.slideToggle(300);
	});	
    
// 스크롤 메뉴
	var $menu = $('.tbl_menu_right .m'),
	$vMenu = $('.ver_menu .m'),
	$contents = $('.scroll'), 
	$doc = $('html, body');
	
// 해당 섹션으로 스크롤 이동 
	$menu.on('click','a', function(e){ 
		var $target = $(this).parent(), 
			idx = $target.index(), 
			section = $contents.eq(idx), 
			offsetTop = section.offset().top; 
		$doc.stop() 
			.animate({ 
				scrollTop :offsetTop
			}, 800); 
	return false;
	});
	
	$vMenu.on('click','a', function(e){ 
		var $target = $(this).parent(), 
			idx = $target.index(), 
			section = $contents.eq(idx), 
			offsetTop = section.offset().top; 
		$doc.stop() 
			.animate({ 
				scrollTop :offsetTop
			}, 800); 
	return false;
	});
	
// menu class 추가 
	function menuBg( ) {
		$(window).scroll(function(){
			var scltop = $(window).scrollTop()+mainMenuHeight; 
			$.each($contents, function(idx, item){ 
				var $target = $contents.eq(idx), 
					i = $target.index(), 
					targetTop = $target.offset().top; 
				
				if (targetTop <= scltop) { 
					$menu.removeClass('active'); 
					$menu.eq(idx).addClass('active'); 
					
					$vMenu.removeClass('active'); 
					$vMenu.eq(idx).addClass('active'); 
				} 
				if(!(windowWidth <= 767)){
					if (!(windowHight <= scltop)) { 
						$mainMenu.css("background","none");
					}else{
						$mainMenu.css("background","#111");
					}
				}else{
					$mainMenu.css("background","#111");
				}
				
			});  
		}); 
		
		}
	
// Go to the TOP 
	var $btnTop = $('.btn-top'); 
	$btnTop.on('click','a', function(e){
		e.preventDefault();
		$doc.stop() 
			.animate({ 
				scrollTop : 0 
			},800);
	});
	
// Go to the MORE VIEW
	var $btnMore = $('#btn_more');
	$btnMore.click(function(){
		var offsetMv = $('#portfolio').offset().top;
		$doc.stop() 
			.animate({ 
				scrollTop : offsetMv
			},800);
	  });
	
	



	
});
