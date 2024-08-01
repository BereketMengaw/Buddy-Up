// Function to toggle display of elements

function display(show, hideOne, hideTwo) {
  document.getElementById(show).style.display = "block";
  document.getElementById(hideOne).style.display = "none";
  document.getElementById(hideTwo).style.display = "none";
}

// Function to fetch and display list of friends
function listFriends() {
  const buddy = document.getElementById("data");
  buddy.innerHTML = ""; // Clear the content before appending

  fetch("http://localhost:3008/ask-info")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((friend) => {
        buddy.innerHTML += `
            <div class="row small text-black">
              <h2 style="font-size: 1.25rem;" class="col-2">${friend.ID}</h2>
              <h2 style="font-size: 1.25rem;" class="col-2">${friend.column1}</h2>
              <h2 style="font-size: 1.25rem;" class="col-2">${friend.age}</h2>
              <h2 style="font-size: 1.25rem;" class="col-3">${friend.place}</h2>
              <h2 style="font-size: 1.25rem;" class="col-3">${friend.comment}</h2>
            </div>
            <hr> <!-- Proper usage of hr tag -->
          `;
      });
      console.log("data presonted");
    })
    .catch((err) => console.error("Error fetching data:", err));
}

// Add event listener to the element with ID 'list'

document.addEventListener("DOMContentLoaded", () => {
  // ... existing code here ...

  const listButton = document.getElementById("list");
  if (listButton) {
    listButton.addEventListener("click", listFriends);
    console.log("clicked now");
  } else {
    console.error("Element with ID 'list' not found");
  }
});
