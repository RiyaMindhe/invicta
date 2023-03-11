var submit_btn = document.querySelector(".submit-btn"),
  answer_input = document.querySelector(".answer"),
  qustion = document.querySelector(".qustion"),
  alert_box = document.querySelector(".alert-box"),
  images = document.getElementById("image");
  nextButton = document.getElementById(".next");
  var slider_img = document.querySelector(".slider-img");


var images = [
 { question: "a.png",
  answer: "angular javascript"
 },
 { question: "b.png",
  answer: "opel"
 },
{ question: "c.png",
  answer: "blackberry"
 },
{ question: "d.png",
  answer: "vue javascript"
 },
{ question: "e.png",
  answer: "webpack"
 },
{ question: "f.png",
  answer: "redux"
 },
{ question: "g.png",
  answer: "purescript"
 },
{ question: "i.png",
  answer: "dart"
 },
{ question: "j.png",
  answer: "elm"
 },
{ question: "l.png",
  answer: "lisp"
 },
{ question: "q.png",
  answer: "morris garage"
 },
{ question: "t.png",
  answer: "capgemini"
 },
{ question: "v.png",
  answer: "wipro"
 },
{ question: "w.png",
  answer: "cisco"
 },
{ question: "h.png",
  answer: "rust"
 },
 { question: "h.jpg",
  answer: "nbc"
 },
{ question: "m.jpg",
  answer: "unilever"
 },
{ question: "n.jpg",
  answer: "toyota"
 },
{ question: "o.jpg",
  answer: "audi"
 },
{ question: "aa.jpg",
  answer: "perl"
 },
{ question: "r.jpg",
  answer: "redbull"
 },
{ question: "k.jpg",
  answer: "atlassian"
 },
{ question: "x.jpg",
  answer: "emporio armani"
 },
{ question: "y.jpg",
  answer: "target"
 },
{ question: "z.jpg",
  answer: "olay"
 },
 { question: "p.webp",
  answer: "dior"
 },
{ question: "u.webp",
  answer: "accenture"
 }
];


var i = 0;

function ready() {
  backButton.disabled = true;
}


function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}


submit_btn.addEventListener("click", () => {
  var set_answer = answer_input.value;
  var final_answer = set_answer.toLowerCase();
  if (i == 26) {
    show_alert("Response Submitted");
    qustion.innerHTML = "Loading new question ...";
    qustion.style = "color: blue;";
    setTimeout(getQuestion, 2500);
  } 
});

function show_alert(alert_title, bg_color) {
  alert_box.style = "display: block; background:" + bg_color;
  alert_box.innerHTML = alert_title;
}




