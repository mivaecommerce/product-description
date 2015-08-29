# Product Description - Read More/Read Less

Simple js function to hide/show the full or shortened description for a product.

**How To Use:**<br>
Copy and paste in the `readMoreLess` function code to a script that will be run on the page.

Ex: Calling `readMoreLess` on the `.product-information--description .small` class selector
```javascript
$(document).ready(function() {
	readMoreLess($('.product-information--description .small'), 50);
});
```

**Notes About the Function**<br>
The functionality is fairly straight-forward. The comments in the function should be able to explain
what is going on if customization/expansion is needed. Basically, the first parameter should be a
jQuery object and the second parameter should be the number of words to allow before the product
description cut-off. The function will then hide/show the shortened or full product description
based on the user's interaction with the 'Read More' and 'Read Less' links.

The function is also made to play nicely with CSS transitions if desired when the shortened and full
product descriptions are show/hidden. The CSS selector to target for transitions is '.mva-read-more-desc'.

Ex:
```css
.mva-read-more-desc {
	-webkit-transition: opacity 0.3s linear;
	transition: opacity 0.3s linear;
}
```
Note that opacity or font-size can be used for the transition-property, however, I find that opacity
flows much smoother.