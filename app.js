$(document).ready(function () {

  let allUsers = [];

  // Show loader
  $("#loading").slideDown();

  // Fetch data using AJAX
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function (data) {
      allUsers = data;

      // Hide loader with smooth animation
      $("#loading").slideUp();

      // Display users initially
      displayUsers(allUsers);
    },
    error: function () {
      $("#loading").text("❌ Error loading users.");
    }
  });

  // Function to display users
  function displayUsers(users) {
    $("#userList").html(""); // Clear old results

    users.forEach((user, index) => {
      let card = `
        <div class="user-card">
          <div class="name">${user.name}</div>
          <div class="email">${user.email}</div>
          <div class="city">📍 ${user.address.city}</div>
        </div>
      `;

      $("#userList").append(card);
    });

    // Fade each card with a small delay
    $(".user-card").each(function (i) {
      $(this).delay(150 * i).fadeIn(400);
    });
  }

  // 🔍 Live search feature
  $("#searchBox").on("keyup", function () {
    let text = $(this).val().toLowerCase();

    let filtered = allUsers.filter(user =>
      user.name.toLowerCase().includes(text)
    );

    displayUsers(filtered);
  });

});

