const imageUrlInput = document.getElementById('image-url');
const addButton = document.getElementById('add-btn');
const deleteButton = document.getElementById('delete-btn');
const gallery = document.getElementById('gallery');
let selectedImage = null;

addButton.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Imagen agregada";
    img.addEventListener('click', () => {
      if (selectedImage) {
        selectedImage.classList.remove('selected');
      }
      img.classList.add('selected');
      selectedImage = img;
    });
    gallery.appendChild(img);
    imageUrlInput.value = "";
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

deleteButton.addEventListener('click', () => {
  if (selectedImage) {
    selectedImage.remove();
    selectedImage = null;
  } else {
    alert("No hay ninguna imagen seleccionada.");
  }
});
