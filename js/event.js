

let events = [
	{
        img: src="./img/commingevents/comming-events (3).jpg",
		name: "Edm ",
		note: "Book your Ticket as early as now and get a chance to meet top Djs Happy ...",
		date: "Event on 25th jully 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (2).jpg",
		name: "Tomorrowland ",
		note: "Book your Ticket as early as now  See you There...",
		date: "Event on 25th May 2022",
		button:"Ticket",
		info:"Info",
	},
  
    {
        img: src="./img/commingevents/comming-events (1).jpg",
		name: "🎸 Rock-Base ",
		note: "Book your Ticket as early as now See you There...",
		date: "Event 23 September 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (11).jpg",
		name: "Edm ",
		note: "Book your Ticket as early as now and get a chance to meet top Djs Happy ...",
		date: "Event on 25th jully 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (4).jpg",
		name: "Tomorrowland",
		note: "Book your Ticket as early as now   See you There...",
		date: "Event on 12th December 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (6).jpg",
		name: "Edm ",
		note: "Book your Ticket as early as now and get a chance to meet top Djs Happy ...",
		date: "Event on 25th jully 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (5).jpg",
		name: "Tomorrowland ",
		note: "Book your Ticket as early as now  See you There...",
		date: "Event on 25th May 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (10).jpg",
		name: "Edm ",
		note: "Book your Ticket as early as now  See you There..",
		date: "Event on 19th October 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (7).jpg",
		name: "Color Splash",
		note: "Book your Ticket as early as now  See you soon... ",
		date: "Event on 2nd jully 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (8).jpg",
		name: "Music & Grill ",
		note: "Book your Ticket as early as now and get a chance to meet top Djs Happy ...",
		date: "Event on 25th jully 2022",
		button:"Ticket",
		info:"Info",
	},
    {
        img: src="./img/commingevents/comming-events (9).jpg",
		name: "Colorfest",
		note: "Book your Ticket as early as now See you There... ",
		date: "Event on 11th June  2022",
		button:"Ticket",
		info:"Info",
	},
	{
        img: src="./img/commingevents/comming-events (12).jpg",
		name: "Edm-Camp",
		note: "Book your Ticket as early as now See you There... ",
		date: "Event on 29th June  2022",
		button:"Ticket",
		info:"Info",
		
	},
	
	
];
function createEventsCard(event){
    return`
  <div class="card">
    <img src="${event.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.note}</p>
      <p class="card-text">${event.date}</small></p>
    </div>
	<ul class=" deco text-center text-decoration-none flex-d-inline " >
	<li><button  onclick="visitPagelink();" type="button" class="btn btn-outline-dark ">${event.button}</button></li>
	<li><button  onclick="visitPageifo();" type="button" class="btn btn-outline-dark ">${event.info}</a></button></li>
	<li></li>
	</ul>
  </div>
  </div>  `
};


function visitPagelink(){
	window.location='./added/ticket.html';
}
function visitPageinfo(){
	window.Location='';
}

function paintevents(events){
let cards =events .map((dev)=>createEventsCard(dev)).join("  ");
document.getElementById("root").innerHTML=cards;}
 paintevents(events);

