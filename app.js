// local reviews data
const reviews = [
	{
		id: 1,
		name: "Kevin M. Kruse",
		job: "American historian",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kevin_Michael_Kruse.jpg/250px-Kevin_Michael_Kruse.jpg",
		text: "Life isn’t about getting and having, it’s about giving and being.",
	},
	{
		id: 2,
		name: "Napoleon Hill",
		job: " American author",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Napoleon_Hill_headshot.jpg/220px-Napoleon_Hill_headshot.jpg",
		text: "Whatever the mind of man can conceive and believe, it can achieve.",
	},
	{
		id: 3,
		name: "Albert Einstein",
		job: "Theoretician physician",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/220px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
		text: "Strive not to be a success, but rather to be of value.",
	},
	{
		id: 4,
		name: "Robert Frost",
		job: "American poet",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Robert_Frost_NYWTS.jpg/220px-Robert_Frost_NYWTS.jpg",
		text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
	},
	{
		id: 5,
		name: "Florence Nightingale",
		job: "English social reformer",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/220px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg",
		text: "I attribute my success to this: I never gave or took any excuse.",
	},
	{
		id: 6,
		name: "Wayne Gretzky",
		job: "Former professional ice hockey player",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Wayne_Gretzky_2006-02-18_Turin_001.jpg/220px-Wayne_Gretzky_2006-02-18_Turin_001.jpg",
		text: "You miss 100% of the shots you don’t take.",
	},
	{
		id: 7,
		name: "Michael Jordan",
		job: "basketball player",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/220px-Michael_Jordan_in_2014.jpg",
		text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
	},
	{
		id: 8,
		name: "Amelia Earhart",
		job: "American aviation pioneer",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra%2C_small.jpg/250px-Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra%2C_small.jpg",
		text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
	},
	{
		id: 9,
		name: "Babe Ruth",
		job: "American professional baseball player",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/256px-Babe_Ruth2.jpg",
		text: "Every strike brings me closer to the next home run.",
	},
	{
		id: 10,
		name: "W. Clement Stone",
		job: "American philanthropist",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Clement_stone_p_00227.jpg/220px-Clement_stone_p_00227.jpg",
		text: "Definiteness of purpose is the starting point of all achievement.",
	},
	{
		id: 11,
		name: "John Lennon",
		job: "English singer",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/220px-John_Lennon_1969_%28cropped%29.jpg",
		text: "Life is what happens to you while you’re busy making other plans.",
	},
	{
		id: 12,
		name: "Mark Twain",
		job: "American writer",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Twain_by_AF_Bradley.jpg/220px-Mark_Twain_by_AF_Bradley.jpg",
		text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
	},
	{
		id: 13,
		name: "Charles Swindoll",
		job: "author, educator, and radio preacher.",
		img: "https://insightforliving.swncdn.com/images/default-source/About/chuck-swindoll.jpg",
		text: "Life is 10% what happens to me and 90% of how I react to it.",
	},
	{
		id: 14,
		name: "Alice Walker",
		job: "American novelist",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Alice_Walker.jpg/220px-Alice_Walker.jpg",
		text: "The most common way people give up their power is by thinking they don’t have any.",
	},
	{
		id: 15,
		name: "Woody Allen",
		job: "American filmmaker",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Woody_Allen_Cannes_2016.jpg/220px-Woody_Allen_Cannes_2016.jpg",
		text: "ighty percent of success is showing up.",
	},
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//select buttons

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//initial item
currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
	showPerson();
});

// set the prev item
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson();
});

//show the next item
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

//show random item
randomBtn.addEventListener("click", function () {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
});
// show person details from reviews array
function showPerson() {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}
