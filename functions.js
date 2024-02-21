export const onClickButtonRange = (event) => {
  const option = event.target.value;
  console.log(option);
};

export const onClickButtonRadio = (event) => {
  const option = event.target.value;
  console.log(option);
};

export const onTextBoxInput = (event) => {
  const option = event.target.value.toLowerCase();
  console.log(option);
};

export const onNumberInput = (event) => {
  const option = event.target.value;
  console.log(option);
};

export const onDropdownInput = (event) => {
  const option = event.target.value;
  console.log(option);
};

export const onCheckboxInput = (event) => {
  let toppings = [];
  const checkboxes = document.querySelectorAll('.topping');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      toppings.push(checkboxes[i].value);
    }
  }
  console.log(toppings);
};

document
  .querySelector('.doneness')
  .addEventListener('click', onClickButtonRange);
document.querySelector('.yes').addEventListener('click', onClickButtonRadio);
document.querySelector('.no').addEventListener('click', onClickButtonRadio);
document.querySelector('.protein').addEventListener('change', onTextBoxInput);
document.querySelector('.amount').addEventListener('change', onNumberInput);
document.querySelector('.bun').addEventListener('change', onDropdownInput);
document.querySelectorAll('.topping').forEach((checkbox) => {
  checkbox.addEventListener('change', onCheckboxInput);
});
