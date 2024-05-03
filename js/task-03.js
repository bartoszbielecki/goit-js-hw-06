const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("ul.gallery");

// Usuwamy kropki przedstawiające listę
galleryList.style.listStyleType = "none";

// Dodajemy klasę i style bezpośrednio do elementu <ul>
galleryList.classList.add("gallery", "gallery-container");
galleryList.style.display = "flex";
galleryList.style.flexWrap = "wrap";
galleryList.style.justifyContent = "center";
galleryList.style.padding = "0";

images.forEach((image) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");
  galleryItem.style.margin = "10px"; // Dodajemy margines za pomocą stylu inline
  galleryItem.innerHTML = `<img src="${image.url}" alt="${image.alt}" style="max-width: 400px;">`; // Dodajemy maksymalną szerokość dla obrazka
  galleryList.appendChild(galleryItem);
});
