//이미지 배열 생성
const images = [
    "space0.jpg", "space1.jpg", "space2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

//html에 들어갈 객체 생성
const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;

//html의 body부분에 객체가 들어갈 수 있도록
document.body.appendChild(bgImage);


