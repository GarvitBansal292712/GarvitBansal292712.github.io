
  function openPdf(pdfUrl) {

  
    window.open(pdfUrl, '_blank');
    

    return false;


    // Create an iframe element and set its attributes.
    const iframeElement = document.createElement('iframe');
    iframeElement.src = pdfUrl;
    iframeElement.width = '100%'; 
    iframeElement.height = '500px'; 

    document.body.appendChild(iframeElement);
  }




  //Category Button Logic 


  const categorybuttons = document.getElementsByClassName('categorybtns');

  for (let i = 0; i < categorybuttons.length; i++) {
    categorybuttons[i].addEventListener('click', () => {
      const selectedCategory = categorybuttons[i].id;
      filterImages(selectedCategory);
    });
  }

function filterImages(selectedCategory) {
  const images = document.getElementsByClassName('certificate-items');

  for (let i = 0; i < images.length; i++) {
    const imageCategory = images[i].classList[1]; 
    if (imageCategory === 'category-' + selectedCategory || selectedCategory === 'All') {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }
}


//Contact Form Logic 


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const textArea = document.getElementById("message");
  const submitButton = document.getElementById("submit-button");
  const emptyFieldsMessage = document.getElementById("empty-fields-message");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Form is valid, you can submit it here
      // For now, we'll just hide the form and show the success message
      form.style.display = "none";
      successMessage.style.display = "block";
    } else {
      // Form is not valid, show the "empty fields" message
      emptyFieldsMessage.style.display = "block";
    }
  });

  nameInput.addEventListener("blur", function () {
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      nameInput.nextElementSibling.textContent = "Please fill in your name.";
    } else {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
      nameInput.nextElementSibling.textContent = "";
    }
  });

  emailInput.addEventListener("blur", function () {
    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent = "Please enter a valid email address.";
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      emailInput.nextElementSibling.textContent = "";
    }
  });

  textArea.addEventListener("blur", function () {
    if (textArea.value.trim() === "") {
      textArea.classList.add("is-invalid");
      textArea.nextElementSibling.textContent = "Please enter a message.";
    } else {
      textArea.classList.remove("is-invalid");
      textArea.classList.add("is-valid");
      textArea.nextElementSibling.textContent = "";
    }
  });

  function validateForm() {
    let valid = true;

    if (nameInput.value.trim() === "") {
      nameInput.classList.add("is-invalid");
      nameInput.nextElementSibling.textContent = "Please fill in your name.";
      valid = false;
    } else {
      nameInput.classList.remove("is-invalid");
      nameInput.classList.add("is-valid");
      nameInput.nextElementSibling.textContent = "";
    }

    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
      emailInput.classList.add("is-invalid");
      emailInput.nextElementSibling.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      emailInput.nextElementSibling.textContent = "";
    }

    if (textArea.value.trim() === "") {
      textArea.classList.add("is-invalid");
      textArea.nextElementSibling.textContent = "Please enter a message.";
      valid = false;
    } else {
      textArea.classList.remove("is-invalid");
      textArea.classList.add("is-valid");
      textArea.nextElementSibling.textContent = "";
    }

    // Enable/disable the submit button based on form validity
    submitButton.disabled = !valid;

    return valid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
