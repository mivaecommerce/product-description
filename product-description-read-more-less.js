/*------------------------------------------------------------------------------
* Product Description Read More/Less
*   Hide/Show the full description for a product
*
* @param  $el, jQuery selector - The element containing the product description
--------------------------------------------------------------------------------*/
function readMoreLess($el) {
	var origDesc      = $el.text();  // Cache the full description text
	var shortDesc     = origDesc.trim().split(/\s+/g);  // Strip out all white space and store the words of the description
	var cutOff        = 50;  // Number of words to show before cut off point
	var shortDescShow = '';
	var shortDescHide = '';

	// If number of words in the description are greater than the cut off point...
	if ( shortDesc.length > cutOff ) {
		// Create the shortened product description by slicing off all words from the
		// original description up to the cut off point. Add a space between each word and
		// add '...' to the end of the shortened description.
		shortDesc = shortDesc.slice(0, cutOff).join(' ') + '...';
		// Re-populate the element's html with the shortened product description
		// and a 'Read More' link.
		$el.html(shortDesc + '<a href="#" class="read-more">Read More</a>');
	}
	// 'Read More' link was clicked...
	$el.on('click', '.read-more', function() {
		// Re-populate the element's html with the original product description
		// and a 'Read Less' link.
		$el.html(origDesc + '<br><a href="#" class="read-less">Read Less</a>');

		return false;
	});
	// 'Read Less' link was clicked...
	$el.on('click', '.read-less', function() {
		// Re-populate the element's html with the shortened product description
		// and a 'Read More' link.
		$el.html(shortDesc + '<a href="#" class="read-more">Read More</a>');

		return false;
	});
}
readMoreLess($('.product-information--description .small'));

/*------------------------------------------------------------------------------
* Product Description Read More/Less
*   Hide/Show the full description for a product
*
* @param $el, jQuery selector - The element containing the product description
* @param maxShow, int - The number of words to show before cut off point
--------------------------------------------------------------------------------*/
function readMoreLess($el, maxShow) {
			var origDesc      = $el.text();  // Cache the full description text
			var shortDesc     = origDesc.trim().split(/\s+/g);  // Strip out all white space and store the words of the description
			var cutOff        = maxShow;
			var shortDescShow = '';
			// Build the span elements for the Read More/Read Less functionality
			var $spanReadMore = $('<span>... <a href="#" class="mva-read-more">Read More</a></span>');
			var $spanReadLess = $('<span style="display:none"><br><a href="#" class="mva-read-less">Read Less</a></span>');
			var $spanDescHide = $('<span class="mva-read-more-desc" style="opacity:0; max-height:0; font-size:0"></span>');

			// If number of words in the description are greater than the cut off point...
			if (shortDesc.length > cutOff ) {
				// Create the shortened product description by slicing off all words from the
				// original description up to the cut off point.
				shortDescShow = shortDesc.slice(0, cutOff).join(' ');
				// Add a space before the hidden text
				$spanDescHide.text(' ' + shortDesc.slice(cutOff).join(' '));
				// Edit the element's text to only show the short description and 'Read More' link
				// Also add the hidden description and 'Read Less' link to the element
				$el.text(shortDescShow)
				   .append($spanReadMore)
				   .append($spanDescHide)
				   .append($spanReadLess);
			}
			// 'Read More' link was clicked...
			$el.on('click', '.mva-read-more', function() {
				// Hide the 'Read More' link and show the full product description
				$spanReadMore.hide();
				$spanDescHide.css({
					'opacity'   : '1',
					'max-height': '999rem',
					'font-size' : 'inherit'
				})
				// Show the 'Read Less' link
				$spanReadLess.show();

				return false;
			});
			// 'Read Less' link was clicked...
			$el.on('click', '.mva-read-less', function() {
				// Hide the 'Read Less' link and only show the shortened product description
				$spanReadLess.hide();
				$spanDescHide.css({
					'opacity'   :'0',
					'max-height':'0',
					'font-size' :'0'
				});
				// Show the 'Read More' link
				$spanReadMore.show();

				return false;
			});
		}
		readMoreLess($('.product-information--description .small'), 50);