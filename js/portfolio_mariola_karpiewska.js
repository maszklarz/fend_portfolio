
	/*
	 * Open the navigation list when the hamburger ison is clicked.
	 */
function jsInit() {
	var burger = document.querySelector(".hamburger");
	var body = document.querySelector("body");
	var navList = document.querySelector(".nav-list");

	burger.addEventListener("click", function(e) {
		navList.classList.toggle("open");
		e.stopPropagation();
	});
	body.addEventListener("click", function() {
		navList.classList.remove("open");
	});
}
