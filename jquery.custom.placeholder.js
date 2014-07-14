/*!
 * jQuery qustom placeholder
 * Version: 1.1
 * http://www.intensa.ru
 */

jQuery.fn.customPlaceholder = function() {
	$('.custom_placeholder').remove();
	$(this).each(function(indx, element){
		var plTest = document.createElement('input');
		if( !('placeholder' in plTest) || 1 ){
			$(this).each(function(){
				var el = $(this);
				var elParent = el.parent();
				el.attr('custom_placeholder', el.attr('placeholder'));
				el.removeAttr('placeholder')
				var placeholder = el.attr('custom_placeholder');
				if( placeholder ){
					elParent.css('position', 'relative');

					var elPlaceholder = $('<div></div>', {'class': 'custom_placeholder'})
						.css({
							position: 'absolute',
							top: el.position().top + (parseInt(el.css('border-top-width')) || 0) + (parseInt(el.css('margin-top')) || 0),
							left: el.position().left + (parseInt(el.css('border-left-width')) || 0) + (parseInt(el.css('margin-left')) || 0),
							paddingTop: el.css('padding-top'),
							paddingLeft: el.css('padding-left'),
							paddingBottom: el.css('padding-bottom'),
							height: el.css('height'),
							font: el.css('font'),
							fontSize: el.css('fontSize'),
							fontWeight: el.css('fontWeight'),
							textAlign: el.css('text-align'),
							color: el.css('color'),
							zIndex: 2
						}).text(placeholder);

					if ( el.val().length > 0 ){
						elPlaceholder.hide();
					}

					elParent.append(elPlaceholder);

					elPlaceholder.click(function(){
						el.focus();
					});

					el.blur(function(){
						if ( el.val().length == 0 ){
							elPlaceholder.show()
						}
					});

					el.on('keydown', function(){
						var o = $(this);
						setTimeout(function(){
							var length = o.val().length;
							if( length > 0 ){
								elPlaceholder.hide(0);
							}else{
								elPlaceholder.show(0);
							}
						},0);
					});
				}
			});
		}
		delete plTest;
	});
}