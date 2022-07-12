// Image(4)= 0,1,2,3       4
// here the default value of the flage is 2 hence the third image is visible

let flag=0;
// because the value of the first image in the array is zero

function controller(x){
    // when we click on the left the -1 will be added to the flag when we click on the right 
    // button the +1 will be added to the flag
    flag= flag + x;
    slideshow(flag);

}

slideshow(flag);
function slideshow(num){
    // to select the all the image by using the classname
    let slides=document.getElementsByClassName("slide");

   if(num == slides.length){
       flag=0;
       num=0;

    }
    if(num <0 ){
        flag = slides.length-1;
        num= slides.length-1;
    }

    for(let y of slides){
        y.style.display="none";

    }
    // to dislplay the first image
    slides[num].style.display="block";
}