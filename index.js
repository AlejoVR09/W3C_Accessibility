window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document.querySelector(".send-button").addEventListener("click", e => validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.addEventListener("keyup", e=> listenToEsc(e))
};

function clickRight() {
  const currentLeft = parseInt(getComputedStyle(document.querySelector(".project-container")).left,10);
  console.log(currentLeft)
  if (currentLeft < -270) {
    return;
  }
  let newValue = currentLeft - 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
      document.querySelector('.project1').setAttribute("tabindex", "-1");
      document.querySelector('.project1-container').setAttribute("aria-hidden", true);
      document.querySelector('.project4').removeAttribute("tabindex");
      document.querySelector('.project4-container').removeAttribute("aria-hidden")
      break;
    case -540:
      document.querySelector('.project2').setAttribute("tabindex", "-1");
      document.querySelector('.project2-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project5').removeAttribute("tabindex");
      document.querySelector('.project5-container').removeAttribute("aria-hidden");
      break;
    default:
      break;
  }
}

function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) {
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
      document.querySelector('.project5').setAttribute("tabindex", "-1");
      document.querySelector('.project5-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project2').removeAttribute("tabindex");
      document.querySelector('.project2-container').removeAttribute("aria-hidden");
      break;
    case 0:
      document.querySelector('.project4').setAttribute("tabindex", "-1");
      document.querySelector('.project4-container').setAttribute("aria-hidden", "true");
      document.querySelector('.project1').removeAttribute("tabindex");
      document.querySelector('.project1-container').removeAttribute("aria-hidden");
      break;
    default:
      break;
  }
}

function validateForm(e) {
  e.preventDefault()
  const name=document.querySelector("#name")
  if (name.value==="") {
    document.querySelector("#name-error").innerHTML="!! Debes escribir tu nombre para enviar el formulario"
  } else {
    showNotification()
  }
}


function showNotification() {
  document.querySelector("#name-error").innerHTML=""
  document.querySelector(".form-container").reset()
  document.querySelector(".notification").style.display = "flex";
  document.querySelector(".notification").innerHTML="El formulario fue enviado sin errores"
  
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

function listenToEsc(e){
  if (e.keyCode==27) {
    closeModal(e)
  }
}


function openModal() {
  document.querySelector(".modal-container").style.display = "flex";
  document.querySelector("#modal-header").focus();
}

function closeModal(e) {
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
