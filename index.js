document
  .getElementById("arrow-button")
  .addEventListener("click", clickevent => {
    const email = document.getElementById("input-value").value;
    const regex = new RegExp(
      "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$"
    );

    if (regex.test(email)) {
      document.getElementById("input-value").classList.remove("error");
      document.getElementById("error-icon").classList.remove("show");
      document.getElementById("error-message").classList.remove("show");
    } else {
      document.getElementById("input-value").classList.add("error");
      document.getElementById("error-icon").classList.add("show");
      document.getElementById("error-message").classList.add("show");
    }
  });
