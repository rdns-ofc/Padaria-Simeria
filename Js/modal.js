//Kit 5P
const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => 
{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => 
{
    el.addEventListener("click", toggleModal);
});


//Kit 10P
const openModalButton2 = document.querySelector("#openModal2");
const closeModalButton2 = document.querySelector(".closeModal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () => 
{
    modal2.classList.toggle("hide2");
    fade2.classList.toggle("hide2");
};

[openModalButton2, closeModalButton2, fade2].forEach((el) => 
{
    el.addEventListener("click", toggleModal2);
});

//Kit 20P
const openModalButton3 = document.querySelector("#openModal3");
const closeModalButton3 = document.querySelector(".closeModal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => 
{
    modal3.classList.toggle("hide3");
    fade3.classList.toggle("hide3");
};

[openModalButton3, closeModalButton3, fade3].forEach((el) => 
{
    el.addEventListener("click", toggleModal3);
});
