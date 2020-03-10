
// select dom elements
let pics = document.getElementsByClassName('productImg');

let curPic = 0; // track the pics to update
let picCount = 3; // out the 15
let allPics = [
    'pic1.jpg', 'pic2.jpg', 'pic3.jpg',
    'pic4.jpg', 'pic5.jpg', 'pic6.jpg',
    'pic7.jpg', 'pic8.jpg', 'pic9.jpg',
    'pic10.jpg', 'pic11.jpg', 'pic12.jpg',
    'pic13.jpg', 'pic14.jpg', 'pic15.jpg'
];
let picTimer = setInterval('ChangePic()', 500);

function ChangePic() {
    pics[curPic].setAttribute('src', 'assets/images/' + allPics[picCount]);
    curPic++;
    picCount++;
    if(curPic >= 3)
        curPic = 0;
    if(picCount >= 15)
        picCount = 0;
}