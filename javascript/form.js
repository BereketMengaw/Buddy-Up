// form.js
export function handleSubmit(event) {
  // form submission logic
  function validateAge(input) {
    const age = parseInt(input.value);

    if (isNaN(age) || age < 0) {
      input.setCustomValidity("Please enter a valid positive age.");
    } else {
      input.setCustomValidity("");
    }
  }
}
