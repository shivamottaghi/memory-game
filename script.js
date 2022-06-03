
(()=>{
    //___________________________ Image urls___________________________

    let imgUrlArr = [
        'images/ice-cream.png'
        ,'images/palm-tree.png'
        ,'images/photo-camera.png'
        ,'images/pineapple.png'
        ,'images/sun.png'
        ,'images/sunglasses.png'
        ,'images/umbrella.png'
        ,'images/watermelon.png'
    ];

    //____________________duplicate the image urls______________________

    let imgDoubArr = imgUrlArr.concat(imgUrlArr);

    //_________________________ MY FUNCTIONS ___________________________

    const makeRowsAndCols = () => {
      let numberOfRows = imgDoubArr.length/4 ;
      let parentTag = document.getElementById('page-Content');
      let colId = 0 ;
      for (let i = 0 ; i < numberOfRows ; i ++){
          let row = document.createElement('div');
          row.setAttribute('id', `row${i}`);
          row.setAttribute('class', 'row my-1');
          for (let j = 0 ; j < 4 ; j++){
              let col = document.createElement('div');
              col.setAttribute('id', `col${colId}`);
              col.setAttribute('class', 'col-6 col-md-3 text-center flip-box');
              col = addFlipBox(col , colId);
              colId ++;
              row.appendChild(col);
          }
          parentTag.appendChild(row);
      }
    }

    const addFlipBox = (col , colId) => {
      let divFlipContainer = document.createElement('div');
        divFlipContainer.setAttribute('class' , 'flipImgContainer' );
      let frontImg = document.createElement('div');
      frontImg.setAttribute('class', 'frontImage questionImg');
      let backImg = document.createElement('div');
      backImg.setAttribute('class' , 'backImg');

      backImg.setAttribute('id' , `${colId}`);
      divFlipContainer.appendChild(frontImg);
      divFlipContainer.appendChild(backImg);
      col.appendChild(divFlipContainer);
      return col ;
    }

    const displayImages = () => {
        let imgTags = document.querySelectorAll('img');
        imgTags.forEach(el => el.remove());
        let frontImageTag = document.querySelectorAll('.questionImg');
        frontImageTag.forEach(elm => {
            let qImg = document.createElement('img');
            qImg.src = 'images/question.png';
            qImg.height = 150;
            elm.appendChild(qImg);
        })
        let shuffledArr = imgDoubArr.sort((a,b)=> 0.5 - Math.random())
        for (let i =0 ; i < shuffledArr.length; i++){
            let parentTag = document.getElementById(`${i}`);
            let child = document.createElement('img');
            child.src = shuffledArr[i];
            child.height = 150;
            parentTag.appendChild(child);
        }
    }
    const imagesEventListener = () => {
        let imageFound = 0;
        let prevClicked
        let numberOfClicks = 0;
        let images = document.querySelectorAll('.flipImgContainer')
        images.forEach((el) => {
            el.addEventListener('click' , ()=>{
                if(numberOfClicks !== 2){
                    el.classList.add("flipImg");
                    numberOfClicks ++ ;
                    console.log(numberOfClicks);
                    if (numberOfClicks === 1){
                        prevClicked = el;
                    }
                    if (numberOfClicks == 2){
                        if(el.querySelector('.backImg>img').src !== prevClicked.querySelector('.backImg>img').src){
                            setTimeout(()=>{
                                console.log('not match');
                                el.classList.remove("flipImg");
                                prevClicked.classList.remove("flipImg");
                                numberOfClicks = 0;
                            }, 1000)
                        }else {
                            setTimeout(()=>{
                                console.log('first'+ el.querySelector('img').src);
                                console.log('second' + prevClicked.querySelector('img').src);
                                numberOfClicks = 0
                                imageFound ++;
                                if (imageFound === imgUrlArr.length){
                                    document.getElementById('start').innerText = 'You won! press to restart';
                                }
                                console.log('match')
                            } , 1000);
                        }
                    }
                }

            })
        })
    }

    //_________________________ MY Functions End ____________________

    makeRowsAndCols();
    displayImages();
    imagesEventListener();

    //___________________________START___________________________

    document.getElementById('start').addEventListener('click', ()=>{
        displayImages();
    })

})();