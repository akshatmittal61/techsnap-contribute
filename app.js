const courses = [
	{
		title: "Introduction to Python",
		content:
			"Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy. Master the basics of data analysis in Python. ",
		time: "16 Hours",
		level: "Beginner",
		type: "Tutorial",
		cost: "699 coins",
		updated: "21 days ago",
	},
];
const noCourses = Array(3).fill(null);
const course = courses[0];
const trendings = document.querySelector(".trending-body .row");
const alls = document.querySelector(".all-body .row");
noCourses.forEach((p) => {
	const Course = document.createElement("div");
	Course.className = "col-lg-33 col-md-50 col-sm-100";
	const card = document.createElement("div");
	card.className = "card";
	const cardHead = document.createElement("div");
	cardHead.className = "card-head";
	const cardBody = document.createElement("div");
	cardBody.className = "card-body";

	const cardTitle = document.createElement("div");
	cardTitle.className = "card-title";
	const cardTitleSpan1 = document.createElement("span");
	cardTitleSpan1.innerHTML = course.type;
	const cardTitleSpan2 = document.createElement("span");
	cardTitleSpan2.innerHTML = course.title;
	cardTitle.appendChild(cardTitleSpan1);
	cardTitle.appendChild(cardTitleSpan2);

	const cardContent = document.createElement("div");
	cardContent.className = "card-content";
	cardContent.innerHTML = course.content;

	const cardDetails = document.createElement("div");
	cardDetails.className = "card-details";

	const cardDetailsHour = document.createElement("div");
	cardDetailsHour.className = "card-details-hour";
	const cardDetailsHourIcon = document.createElement("span");
	cardDetailsHourIcon.className = "material-icons";
	cardDetailsHourIcon.innerHTML = "timer";
	const cardDetailsHourText = document.createElement("span");
	cardDetailsHourText.innerHTML = course.time;
	cardDetailsHour.appendChild(cardDetailsHourIcon);
	cardDetailsHour.appendChild(cardDetailsHourText);

	const cardDetailsLevel = document.createElement("div");
	cardDetailsLevel.className = "card-details-level";
	const cardDetailsLevelIcon = document.createElement("span");
	cardDetailsLevelIcon.className = "material-icons";
	cardDetailsLevelIcon.innerHTML = "leaderboard";
	const cardDetailsLevelText = document.createElement("span");
	cardDetailsLevelText.innerHTML = course.level;
	cardDetailsLevel.appendChild(cardDetailsLevelIcon);
	cardDetailsLevel.appendChild(cardDetailsLevelText);

	const cardDetailsCost = document.createElement("div");
	cardDetailsCost.className = "card-details-coins";
	const cardDetailsCostIcon = document.createElement("span");
	cardDetailsCostIcon.className = "material-icons";
	cardDetailsCostIcon.innerHTML = "monetization_on";
	const cardDetailsCostText = document.createElement("span");
	cardDetailsCostText.innerHTML = course.cost;
	cardDetailsCost.appendChild(cardDetailsCostIcon);
	cardDetailsCost.appendChild(cardDetailsCostText);

	cardDetails.appendChild(cardDetailsHour);
	cardDetails.appendChild(cardDetailsLevel);
	cardDetails.appendChild(cardDetailsCost);

	const cardUpdated = document.createElement("div");
	cardUpdated.className = "card-updated";
	cardUpdated.innerHTML = `Last updated ${course.updated}`;

	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardContent);
	cardBody.appendChild(cardDetails);
	cardBody.appendChild(cardUpdated);

	const cardFoot = document.createElement("div");
	cardFoot.className = "card-foot";
	const cardFootLink = document.createElement("a");
	cardFootLink.className = "card-foot__link";
	cardFootLink.setAttribute("href", `/course/${_.kebabCase(course.title)}`);
	const cardFootButton = document.createElement("button");
	cardFootButton.className = "btn btn-primary";
	cardFootButton.innerHTML = "View in Detail";
	cardFootLink.appendChild(cardFootButton);
	cardFoot.appendChild(cardFootLink);

	card.appendChild(cardHead);
	card.appendChild(cardBody);
	card.appendChild(cardFoot);
	Course.appendChild(card);
	trendings.appendChild(Course);
	alls.appendChild(Course.cloneNode(true));
	alls.appendChild(Course.cloneNode(true));
});

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
