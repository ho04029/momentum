const colors = [
    "#F2F2F2", "#FFFFFF", "#F0EDE9"
];

const {body} = document;

const chosenColor = colors[Math.floor(Math.random()*colors.length)];
body.style.background=chosenColor;


