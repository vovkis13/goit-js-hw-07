const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("ul#gallery");
const styleRef = document.querySelector("style");
let listOfImagesText = "";
images.forEach(
  ({ url, alt }) =>
    (listOfImagesText += `<li><img src='${url}' alt='${alt}'></li>`)
);

const listOfImagesStylesText = `
 
  ul#gallery {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }
  img {
    width: 100%;
  }`;

galleryRef.insertAdjacentHTML("afterbegin", listOfImagesText);
styleRef.insertAdjacentHTML("beforeend", listOfImagesStylesText);
