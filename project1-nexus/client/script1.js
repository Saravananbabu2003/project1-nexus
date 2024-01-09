function changeTab(tab) {
  const wrapper = document.getElementById("wrapper");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (tab === "login") {
    wrapper.classList.remove("active");
    loginForm.reset();
  } else {
    wrapper.classList.add("active");
    signupForm.reset();
  }
}

function login(event) {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  fetch("http://localhost:3001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Login Response:", data);
      // Handle the response as needed (e.g., store tokens, redirect, etc.)
      if (data.token) {
        // Handle the successful login
        // For example, redirect to the loggedIn.html page
        alert("Successfully signed in");
        window.location.href = "loggedIn.html";
      } else {
        // Handle login failure, show an error message, etc.
        alert("Login failed");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function signup(event) {
  event.preventDefault();

  const username = document.getElementById("signName").value;
  const password = document.getElementById("signPassword").value;

  fetch("http://localhost:3001/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Signup Response:", data);
      alert("Successfully signed up");
      // Handle the response as needed (e.g., show success message, redirect, etc.)
    })
    .catch((error) => console.error("Error:", error));
}
