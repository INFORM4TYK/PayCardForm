function handleInputChange(event) {
    return event.target.value;
  }
  //---------------------------------------------------------------------//
  const inputName = document.getElementById("inputName");
  const pElementName = document.getElementById("elementName");
  const displayName = document.getElementById("displayName");
  inputName.addEventListener("input", (event) => {
    const inputValue = handleInputChange(event);
    displayName.textContent = inputValue;
    const input = document.querySelector("input");
    input.addEventListener("keyup", function (event) {
      let value = event.target.value;
  
      if (value.length > 0) {
        const words = value.split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        const newValue = words.join(" ");
        event.target.value = newValue;
      }
    });
    if (inputValue === "") {
      pElementName.classList.remove("none");
    } else {
      pElementName.classList.add("none");
    }
  });
  //---------------------------------------------------------------------//
  const inputNumber = document.getElementById("inputNumber");
  const spans = document.querySelectorAll(".sec-numb span");
  inputNumber.addEventListener("input", (event) => {
    const value = handleInputChange(event);
    for (let i = 0; i < spans.length; i++) {
      if (value[i]) {
        spans[i].textContent = value[i];
        spans[i].classList.add("drop");
      } else {
        spans[i].textContent = "#";
        spans[i].classList.remove("drop");
      }
    }
    if (value.length === 0) {
      for (let i = 0; i < spans.length; i++) {
        spans[i].textContent = "#";
      }
    }
  });
  //---------------------------------------------------------------------//
  const inputDate = document.getElementById("inputDate");
  const pElementDate = document.getElementById("p3");
  const displayDate = document.getElementById("displaydate");
  
  inputDate.addEventListener("input", (event) => {
    const inputValue = handleInputChange(event);
  
    if (inputValue.length === 7) {
      const month = inputValue.slice(5, 7);
      const year = inputValue.slice(2, 4);
      const newValue = month + "/" + year;
      displayDate.textContent = newValue;
    }
    if (inputValue === "") {
      pElementDate.classList.remove("none");
      displayDate.classList.add("none");
    } else {
      pElementDate.classList.add("none");
      displayDate.classList.remove("none");
    }
  });
  //---------------------------------------------------------------------//
  const flipButton = document.getElementById("flip-card");
  const cardSection = document.getElementById("card");
  
  function toggleCard() {
    cardSection.classList.toggle("flipped");
  }
  flipButton.addEventListener("click", toggleCard);
  
  let pressed = false;
  flipButton.addEventListener("click", function () {
    pressed = !pressed;
    flipButton.setAttribute("aria-pressed", pressed);
    console.log(flipButton)
  });
  const inputCvv = document.getElementById("inputCvv");
  inputCvv.addEventListener("focus", () => {
    if (pressed == false) {
      toggleCard();
      pressed = true;
    }
  });
  
  inputCvv.addEventListener("blur", () => {
    if (pressed == true) {
      toggleCard();
      pressed = false;
    }
  });
  
  const pElementCvv = document.getElementById("p4");
  const displayCvv = document.getElementById("displaycvv");
  inputCvv.addEventListener("input", (event) => {
    const inputValue = handleInputChange(event);
    displayCvv.textContent = inputValue;
    if (inputValue === "") {
      pElementCvv.classList.remove("none");
    } else {
      pElementCvv.classList.add("none");
    }
  });
  