export const getOrder = () => {
  let mainSection = document.querySelector('.main');
  let billSection = document.querySelector('.factura');

  const determinePrice = (order) => {
    let cost = 2;
    if (order.carne === 'pollo') {
      cost += 2;
    }
    if (order.carne === 'ternera') {
      cost += 4;
    }
    if (order.carne === 'añojo') {
      cost += 6;
    }
    if (order.filetes === 2) {
      cost += 2;
    } else if (order.filetes === 3) {
      cost += 4;
    }
    if (order.topping.length !== 0) {
      cost += 1;
    }
    if (order.queso === 'si') {
      cost += 1;
    }
    if (order.salsa.length !== 0) {
      cost += 1;
    }
    if (order.extras) {
      cost += 1;
    }
    return cost;
  };

  const onClickButtonRange = (event) => {
    let plancha;
    const option = event.target.value;
    if (option === '1') {
      plancha = 'vuelta y vuelta';
    }
    if (option === '2') {
      plancha = 'poco hecha';
    }
    if (option === '3') {
      plancha = 'al punto';
    }
    if (option === '4') {
      plancha = 'hecha';
    }
    if (option === '5') {
      plancha = 'muy hecha';
    }
    return plancha;
  };

  const onClickButtonRadio = (event) => {
    const option = event.target.value;
    let queso = option;
    return queso;
  };

  const onTextBoxInput = (event) => {
    const option = event.target.value;
    let carne = option;
  };

  const onNumberInput = (event) => {
    const option = event.target.value;
    let filetes = option;
    return filetes;
  };

  const onDropdownInput = (event) => {
    const option = event.target.value;
    let pan = option;
    return pan;
  };

  const onCheckboxInput = (event) => {
    let toppings = [];
    const checkboxes = document.querySelectorAll('.topping');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        toppings.push(checkboxes[i].value);
      }
    }
    return toppings;
  };

  const onCheckbox2 = (event) => {
    let sauces = [];
    const checkboxes = document.querySelectorAll('.sauces');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        sauces.push(checkboxes[i].value);
      }
    }
    return sauces;
  };

  const onTextarea = (event) => {
    const option = event.target.value;
    let extras = option;
    return extras;
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    let carne = onTextBoxInput();
    let filetes = onNumberInput();
    let plancha = onClickButtonRange();
    let topping = onCheckboxInput();
    let queso = onClickButtonRadio();
    let pan = onDropdownInput();
    let salsa = onCheckbox2();
    let extras = onTextarea();

    let order = {
      carne,
      filetes,
      plancha,
      topping,
      queso,
      pan,
      salsa,
      extras,
    };

    let cost = 2 + determinePrice(order);
    let yourOrder = document.querySelector('.object');
    yourOrder.innerHTML = JSON.stringify(order);
    let yourAmount = document.querySelector('.amount');
    yourAmount.innerHTML = `${cost} euros`;
    mainSection.setAttribute('hidden', true);
    billSection.removeAttribute('hidden');
  };
  document
    .querySelector('.doneness')
    .addEventListener('click', onClickButtonRange);
  document.querySelector('.yes').addEventListener('click', onClickButtonRadio);
  document.querySelector('.no').addEventListener('click', onClickButtonRadio);
  document.querySelector('.protein').addEventListener('change', onTextBoxInput);
  document.querySelector('.amount').addEventListener('change', onNumberInput);
  document.querySelector('.pan').addEventListener('change', onDropdownInput);
  document.querySelectorAll('.topping').forEach((checkbox) => {
    checkbox.addEventListener('change', onCheckboxInput);
  });
  document.querySelectorAll('.sauces').forEach((checkbox) => {
    checkbox.addEventListener('change', onCheckbox2);
  });
  document.querySelector('.extras').addEventListener('change', onTextarea);
  document
    .querySelector('.formulario')
    .addEventListener('submit', onSubmitForm);
};
