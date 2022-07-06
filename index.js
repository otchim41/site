const openPopUp = document.getElementById('open_pop_up');
const openPopUp1 = document.getElementById('open_pop_up1');
const openPopUp2 = document.getElementById('open_pop_up2');
const openPopUp3 = document.getElementById('open_pop_up3');
const closePopUp = document.getElementById('pop_up_close');
const anchors = document.querySelectorAll('a[href*="#"]');
const popUp = document.getElementById('pop_up');
const popUpButton = document.getElementById('pop_up_button');
const popUpBody = document.getElementById('pop_up_body');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

openPopUp.addEventListener('click' , function(e){
    e.preventDefault();
    popUp.classList.add('active');
})
openPopUp1.addEventListener('click' , function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

openPopUp2.addEventListener('click' , function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

openPopUp3.addEventListener('click' , function(e){
    e.preventDefault();
    popUp.classList.add('active');
})


closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


popUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.remove('active');
})

$(document).ready(function() {


	$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

