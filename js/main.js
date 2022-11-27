// $(function(){
// 	// 先取得必要的元素並用 jQuery 包裝
// 	// 再來取得 $block 的高度及設定動畫時間
// 	var $block = $('#abgneBlock'),
// 		$slides = $('ul.list', $block),
// 		_width = $block.width(),
// 		$li = $('li', $slides),
// 		_animateSpeed = 600, 
// 		// 加入計時器, 輪播時間及控制開關
// 		timer, _showSpeed = 3000, _stop = false;
 
// 	// 產生 li 選項
// 	var _str = '';
// 	for(var i=0, j=$li.length;i<j;i++){
// 		// 每一個 li 都有自己的 className = playerControl_號碼
// 		_str += '<li class="playerControl_' + (i+1) + '"></li>';
// 	}
 
// 	// 產生 ul 並把 li 選項加到其中
// 	var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
// 		// 把 .playerControl 移到置中的位置
// 		return (_width - $(this).width()) / 2;
// 	});
 
// 	// 幫 li 加上 click 事件
// 	var $playerControlLi = $playerControl.find('li').click(function(){
// 		var $this = $(this);
// 		$this.addClass('current').siblings('.current').removeClass('current');
 
// 		clearTimeout(timer);
// 		// 移動位置到相對應的號碼
// 		$slides.stop().animate({
// 			left: _width * $this.index() * -1
// 		}, _animateSpeed, function(){
// 			// 當廣告移動到正確位置後, 依判斷來啟動計時器
// 			if(!_stop) timer = setTimeout(move, _showSpeed);
// 		});
 
// 		return false;
// 	}).eq(0).click().end();
 
// 	// 如果滑鼠移入 $block 時
// 	$block.hover(function(){
// 		// 關閉開關及計時器
// 		_stop = true;
// 		clearTimeout(timer);
// 	}, function(){
// 		// 如果滑鼠移出 $block 時
// 		// 開啟開關及計時器
// 		_stop = false;
// 		timer = setTimeout(move, _showSpeed);
// 	});
 
// 	// 計時器使用
// 	function move(){
// 		var _index = $('.current').index();
// 		$playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
// 	}
// });

$(function(){
	// 先取得必要的元素並用 jQuery 包裝
	// 再來取得 $block 的寬度及設定動畫時間
	var $block = $('#abgne-block-20110406'), 
		$slides = $block.find('.slides'), 
		$ul = $slides.find('ul'), 
		_width = $slides.width(), 
		_left = _width * -1, 
		_animateSpeed = 400;
 
	// 先把最後一個 li 的內容插入到第一個 li 前面
	// 並設定 $ul 的 left 及 width
	$ul.find('li:first').before($ul.find('li:last')).end().css({
		left: _left,
		width: _width * ($ul.find('li').length + 1)
	});
 
	// 當點擊到 a.prev 時
	$block.find('a.prev').click(function(){
		// 移動 $ul
		$ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, function () {
			// 把最後一個 li 的內容插入到第一個 li 前面
			$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
		});
		return false;
	});
 
	// 當點擊到 a.next 時
	$block.find('a.next').click(function(){
		// 移動 $ul
		$ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, function () {
			// 把第一個 li 的內容插入到最後一個 li 後面
			$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
		});
		return false;
	});
 
	$block.find('a').focus(function(){
		this.blur();
	});
});