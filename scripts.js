// search bar 
function searchFunction() {
  let query = document.getElementById("searchInput").value;
  alert("You searched for: " + query);
}
  
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    const slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
  
    // Increment slide index
    slideIndex++;
  
    // Loop back to the first slide if at the end
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
  
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
  
    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
  }




  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to checkout page!');
    });
});

// seller page 
document.getElementById('sellerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Seller registered successfully!');
});


// registration page 
const form = document.getElementById('sellerForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Submitted:', data);

    alert('Registration successful!');
    form.reset();
});






function openProductPage(name, price, image) {
  sessionStorage.setItem("productName", name);
  sessionStorage.setItem("productPrice", price);
  sessionStorage.setItem("productImage", image);
  window.location.href = "product.html";
}


// chat bot 

function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "flex" : "none";
}

function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  if (!userInput.trim()) return;
  
  appendMessage("You", userInput);
  document.getElementById("userInput").value = "";
  
  setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      appendMessage("Bot", botResponse);
  }, 1000);
}

function appendMessage(sender, message) {
  const chatBody = document.getElementById("chatBody");
  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBody.appendChild(messageElement);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotResponse(input) {
  const responses = {
      "hello": "Hi there! How can I assist you with our furniture?",
      "price": "We have a range of furniture at different prices. Can you specify which item?",
      "delivery": "We offer free delivery for orders above $500!",
      "return policy": "You can return items within 30 days if they're unused and in original condition."
  };
  
  input = input.toLowerCase();
  for (let key in responses) {
      if (input.includes(key)) {
          return responses[key];
      }
  }
  return "I'm not sure about that. Please visit our FAQ section or contact support.";
}


// advertiesment 
// Get the popup and close button elements
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// When the close button is clicked, hide the popup
closeBtn.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
  popup.style.opacity = '0';
});




