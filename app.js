const footerLinks = document.querySelectorAll(".footer-body-right-group__link");
footerLinks.forEach((item) => {
	item.setAttribute("href", `/${_.kebabCase(item.innerHTML)}`);
});

const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
const checkOpt = () => {
	if (
		document.querySelector("select").value ===
		document.querySelector("select option").innerHTML
	)
		document.querySelector("select").style.color = "rgba(0,0,0,0.5)";
	else document.querySelector("select").style.color = "var(--tcolor)";
};
document.querySelector("select").addEventListener("change", checkOpt);
checkOpt();
