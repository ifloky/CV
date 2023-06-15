

//открываем карточку
const modalWrp = document.querySelector('.modal-wrapper')
let cards = document.getElementsByClassName('pets-carusel__card');
const modalCard = document.querySelector('.modal-window__card')
const closeBtn = document.querySelector('.modal-window__btn-close')
let namePet;
let img;
let type;
let breed;
let description;
let age;
let inoculations;
let diseases;
let parasites;
let innerCard;


function funcOp(cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
      cards[i].getAttribute('data-name');
      let id = cards[i].getAttribute('data-id')
      namePet = PETS[id].name;
      img = PETS[id].img
      type = PETS[id].type;
      breed = PETS[id].breed;
      description = PETS[id].description;
      age = PETS[id].age;
      inoculations = PETS[id].inoculations;
      diseases = PETS[id].diseases;
      parasites = PETS[id].parasites;
      innerCard = `
              <div class="modal-window__img"><img src="${img}" alt="pet"></div>
              <div class="modal-window__info">
              <p class="modal-window__header">${namePet}</p>
              <p class="modal-window__sub-header">${type} - ${breed}</p>
              <p class="modal-window__main-info">${description}</p>
              <ul class="add-info">
                  <li><span>Age:</span>${age}</li>
                  <li><span>Inoculations:</span> ${inoculations}</li>
                  <li><span>Diseases:</span> ${diseases}</li>
                  <li><span>Parasites:</span> ${parasites}</li>
              </ul>
              </div>`
      modalCard.innerHTML = innerCard;
      modalWrp.style.display = 'flex';
      if (modalWrp.style.display === 'flex') {
        document.body.addEventListener('click', function (e) {
          if (e.target.closest('.modal-wrapper') && !e.target.closest('.modal-window')) {
            modalWrp.style.display = 'none';
          }
        });
      }
    })

  }
}

funcOp(cards)

closeBtn.addEventListener('click', function (e) {
  modalWrp.style.display = 'none'
});




