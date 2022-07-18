
//function to suffle array elements
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }      
//function for making divs with setting smile image
    function intialImage()
    {   
        for(let i=0;i<16;i++){
            let div1 = document.createElement("div");
            // div1.setAttribute("class","img");
            let img = document.createElement("img");
            img.setAttribute("id","img"+(i+1));
            img.setAttribute("src", smileImg);
            div1.append(img);
            div.append(div1);
        }
    }

//Array of contain images 
    let game_images = ['./img/images.png', './img/html1.png', './img/css.jpeg', './img/C_Programming_Language.svg.png', './img/bootstrap-stack.png', './img/JavaScript-Logo.png',
        './img/jquery.png', './img/python-logo.png']
    let newArrOfImg = [];
    newArrOfImg.push(...game_images);
    newArrOfImg.push(...game_images);
    shuffleArray(newArrOfImg);
       
//Variable useful in fun function and counters
    let previousEvSrc;
    let previousEvent = 1;
    let previousEventName;
    let success = 0;
    let Move = 0;
    const moveDiv = document.getElementById('moves');
    const successfulMove = document.getElementById('doneMove');
        
//Adding image container after head container in html
    let div = document.createElement("div");
    let headCont = document.getElementById("head-container");
    let smileImg = './img/smile.jpg';
    div.setAttribute("class","img-container");
    headCont.after(div)

//calling function for making divs with smile image
    intialImage();
        
//adding play button befor image conatiner div
    let headDiv = document.createElement("div");
    let btn = document.createElement("button");
    headDiv.setAttribute("class","button");
    btn.setAttribute("id","myBtn");
    btn.textContent = "Play Again"
    headDiv.appendChild(btn);
    div.before(headDiv);
        
//storing image dives in variable for later use in property setting
    let img = "img1";
    let arrItm= [document.getElementById(img)];
    for(let i=1;i<16;i++){
        let img = "img"+(i+1);
        arrItm[i]= document.getElementById(img)
    }
            
//function for item event listeners      
    function fun(item, smil, img) { 
        // console.log("image",smil,"url ","."+item.src.slice(21));
        if (previousEvent) {
            console.log("Image : ",item, item.src)
            if ("."+item.src.slice(21) == smil) {
                item.setAttribute('src', img);
                previousEvSrc = "."+item.src.slice(21);
                previousEvent = 0;
                previousEventName = item;
            }
        }else{
            if ("."+item.src.slice(21) == smil) {
                item.setAttribute('src', img);
                previousEvent = 1;
                Move++;
            }
            setTimeout(function () {
                if ("."+item.src.slice(21) == previousEvSrc) {
                    previousEventName.removeEventListener('click', fun);
                    item.removeEventListener('click', fun);
                    success++;
                    previousEvent = 1;
                    previousEventName = " ";
                    moveDiv.textContent = "Move : " + Move;
                    successfulMove.textContent = "Successful Moves : " + success;
                    if (success == 8) {
                        alert("Great You have won game");
                    }
                } else {
                    item.setAttribute('src', smil)
                    previousEventName.setAttribute('src', smil);
                    previousEventName = " ";
                    moveDiv.textContent = "Move : " + Move;
                }
            }, 400);
        }
    }
        
//Event Listeners 
    for(let i = 0; i<16; i++)
    {
        arrItm[i].addEventListener('click', () => { fun(arrItm[i], smileImg, newArrOfImg[i])});
    }

//button event listener
    let myBtn = document.getElementById("myBtn");  
    myBtn.addEventListener('click',()=>{
        shuffleArray(newArrOfImg);
        shuffleArray(game_images);
        for(let i=0;i<16;i++){
            document.getElementById("img"+(i+1)).setAttribute("src",smileImg);
        }
        previousEvent = 1;
        success = 0;
        Move = 0;
        moveDiv.textContent = "Move : " + Move;
        successfulMove.textContent = "Successful Moves : " + success;
        console.log("it is running ");
    })