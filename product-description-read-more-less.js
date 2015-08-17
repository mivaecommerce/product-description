/*------------------------------------------------------------------------------
* Product Description Read More/Less
*   Hide/Show the full description for a product
*
* @param  $el, jQuery selector - The element containing the product description
--------------------------------------------------------------------------------*/
function readMoreLess($el) {
	var origDesc  = $el.text();  // Cache the full description text
	var shortDesc = origDesc.trim().split(/\s+/g);  // Strip out all white space and store the words of the description
	var cutOff    = 47;  // Number of words to show before cut off point

	// If number of words in the description are greater than the cut off point...
	if ( shortDesc > cutOff ) {
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