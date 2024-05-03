const categoriesList = document.querySelectorAll("#categories .item");
const numCategories = categoriesList.length;
console.log("Number of categories: " + numCategories);
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const numElements = category.querySelectorAll("li").length;
  console.log("Category: " + categoryName);
  console.log("Elements: " + numElements);
});
