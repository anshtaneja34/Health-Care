
  document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    const inputs = this.querySelectorAll("input");
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (!allFilled) {
      alert("Please fill out all the fields before submitting.");
    } else {
      alert("Your appointment has been booked successfully! Dr. contact you soon and share the date and timing of appointment");
      this.reset(); // Clear form fields
    }
  });
  const navContactBtn = document.getElementById("navContactBtn");
  const navContactOptions = document.getElementById("navContactOptions");

  navContactBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent triggering document click
    navContactOptions.style.display =
      navContactOptions.style.display === "none" ? "block" : "none";
  });

  // Hide dropdown if user clicks outside
  document.addEventListener("click", (e) => {
    if (
      !navContactBtn.contains(e.target) &&
      !navContactOptions.contains(e.target)
    ) {
      navContactOptions.style.display = "none";
    }
  });