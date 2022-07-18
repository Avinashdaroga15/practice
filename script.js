let div = document.createElement("div");
        div.setAttribute("class","img-container");
        document.body.prepend(div);
        function intialImage()
        {   for(let i=0;i<16;i++){
            let div1 = document.createElement("div");
            // div1.setAttribute("class","img");
            let img = document.createElement("img");
            img.setAttribute("id","img"+(i+1));
            img.setAttribute("src","./img/smile.jpg");
            div1.append(img);
            div.append(div1);
            }
        }
        intialImage();

        let headDiv = document.createElement("div");
        headDiv.setAttribute("class","button");
        let btn = document.createElement("button");
        btn.setAttribute("id","myBtn");
        btn.textContent = "Play Again"
        headDiv.appendChild(btn);
        div.before(headDiv);
        

        let item1 = document.getElementById('img1');
        console.log(item1);
        let item2 = document.getElementById('img2');
        // console.log(item2);
        let item3 = document.getElementById('img3');
        let item4 = document.getElementById('img4');
        let item5 = document.getElementById('img5');
        let item6 = document.getElementById('img6');
        let item7 = document.getElementById('img7');
        let item8 = document.getElementById('img8');
        let item9 = document.getElementById('img9');
        let item10 = document.getElementById('img10');
        let item11 = document.getElementById('img11');
        let item12 = document.getElementById('img12');
        let item13 = document.getElementById('img13');
        let item14 = document.getElementById('img14');
        let item15 = document.getElementById('img15');
        let item16 = document.getElementById('img16');
        
        let game_images = ['./img/images.png', './img/html1.png', './img/css.jpeg', './img/C_Programming_Language.svg.png', './img/bootstrap-stack.png', './img/JavaScript-Logo.png',
            './img/jquery.png', './img/python-logo.png']
        let smile = './img/smile.jpg';
        
        let previousEvSrc;
        let previousEvent = 1;
        let previousEventName;
        let success = 0;
        let Move = 0;
        let moveDiv = document.getElementById('moves');
        const successfulMove = document.getElementById('doneMove');
        function shuffleArray(array) {
             for (var i = array.length - 1; i > 0; i--) {
                 var j = Math.floor(Math.random() * (i + 1));
                 var temp = array[i];
                 array[i] = array[j];
                 array[j] = temp;
             }
        }           
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
                        successfulMove.textContent = "Successful Moves :" + success;
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
        
        item1.addEventListener('click', () => { fun(item1, smile, game_images[0])});
        item2.addEventListener('click', () => { fun(item2, smile, game_images[1])});
        item3.addEventListener('click', () => { fun(item3, smile, game_images[2])});
        item4.addEventListener('click', () => { fun(item4, smile, game_images[3])});
        item5.addEventListener('click', () => { fun(item5, smile, game_images[4])});
        item6.addEventListener('click', () => { fun(item6, smile, game_images[5])});
        item7.addEventListener('click', () => { fun(item7, smile, game_images[6])});
        item8.addEventListener('click', () => { fun(item8, smile, game_images[7])});
        item9.addEventListener('click', () => { fun(item9, smile, game_images[0])});
        item10.addEventListener('click', () => { fun(item10, smile, game_images[1])});
        item11.addEventListener('click', () => { fun(item11, smile, game_images[2])});
        item12.addEventListener('click', () => { fun(item12, smile, game_images[3])});
        item13.addEventListener('click', () => { fun(item13, smile, game_images[4])});
        item14.addEventListener('click', () => { fun(item14, smile, game_images[5])});
        item15.addEventListener('click', () => { fun(item15, smile, game_images[6])});
        item16.addEventListener('click', () => { fun(item16, smile, game_images[7])});
        
        let myBtn = document.getElementById("myBtn");
        myBtn.addEventListener('click',()=>{
            shuffleArray(game_images);
            for(let i=0;i<16;i++){
                document.getElementById("img"+(i+1)).setAttribute("src","./img/smile.jpg");
        
            }
            previousEvent = 1;
            success = 0;
            Move = 0;
            console.log("it is running ");
        })