# Product Description - Read More/Read Less

Simple js function to hide/show the full description for a product.

**How To Use:**<br>
Copy and paste in the `readMoreLess` function code, and run it in any type of ready function.

Ex: Calling `readMoreLess` on the `.product-information--description .small` class selector
```javascript
$(document).ready(function() {
	readMoreLess($('.product-information--description .small'));
});

...
function readMoreLess($el) {
	// code content
}
```

**Notes About the Function**<br>
The functionality is fairly straight-forward. The comments in the function should be able to explain
what is going on if customization/expansion is needed.