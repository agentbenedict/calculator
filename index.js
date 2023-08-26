

	let display = document.getElementById("output");

let btns = document.querySelectorAll(".arit");

let blink = document.getElementById("blink");

				





			const operate = () => {

										for(let i = 0; i < btns.length; i++){

									

											btns[i].addEventListener("click", function(){

												if(display.textContent.length <= 10){

													display.textContent += btns[i].value;

												} else {

													alert("Exceeding Character Limit!")

												}

											})

										}

									}



			

			let active = document.getElementById("active");

			

			function activeSwitch (){

					if(active.value === "ON"){

							active.addEventListener("click", function(){

								if (active.value === "ON"){

									active.value = "OFF";

									active.style.background = "red";

									active.style.color = "#fff";

									active.style.border = "2px solid red";

									

									blink.textContent = "|";

						

									operate();

								}

								else if(active.value === "OFF"){

									active.value = "ON";

									active.style.background = "green";

									active.style.color = "#fff";

									active.style.border = "2px solid green";

									

									location.reload();

									

								}

							})

					} 

			}

				

				activeSwitch();

			

         
