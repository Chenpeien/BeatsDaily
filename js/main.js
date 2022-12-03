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