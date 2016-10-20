document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const addLocation = (e) => {
    e.preventDefault();
    const ul = document.getElementById("sf-places");
    const input = document.getElementsByClassName("favorite-input")[0];
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  }
  // --- your code here!

  document.getElementsByClassName("favorite-submit")[0].addEventListener("click", addLocation)


  const togglePhotoForm = (e) => {
    const div = document.getElementsByClassName("photo-form-container")[0];
    const classes = div.className;
    if (classes === "photo-form-container hidden") {
      div.className = "photo-form-container";
    } else {
      div.className = "photo-form-container hidden";
    }
  }

  const toggleButton = document.getElementsByClassName("photo-show-button")[0];

  toggleButton.addEventListener("click", togglePhotoForm);

  const addPhoto = (e) => {
    e.preventDefault();
    const url = document.getElementsByClassName("photo-url-input")[0].value;
    const ul = document.getElementsByClassName("dog-photos")[0];
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = url;
    li.appendChild(img);
    ul.appendChild(li);
  }

  const photoSubmit = document.getElementsByClassName("photo-url-submit")[0];

  photoSubmit.addEventListener("click", addPhoto)


});
