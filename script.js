
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
          row.setAttribute('class', 'row my-2');
          for (let j = 0 ; j < 4 ; j++){
              let col = document.createElement('div');
              col.setAttribute('id', `col${colId}`);
              col.setAttribute('class', 'col-6 col-md-3 text-center');
              col = addFlipBox(col , colId);
              colId ++;
              row.appendChild(col);
          }
          parentTag.appendChild(row);
      }
    }

    const addFlipBox = (col , colId) => {
      let divFlipBox = document.createElement('div');
      divFlipBox.setAttribute('class' , 'flip-box' );
      let divFlipInner = document.createElement('div');
      divFlipInner.setAttribute('class', 'flip-box-inner');
      let divFlipFront = document.createElement('div');
      divFlipFront.setAttribute('class' , 'flip-box-front');
      divFlipFront.setAttribute('id' , `${colId}`);
      let divFlipBack = document.createElement('div');
      divFlipBack.setAttribute('class' , 'flip-box-back' );
      let parForBack = document.createElement('p');
      parForBack.innerHTML = 'Turn it around to see the card';
      divFlipBack.appendChild(parForBack);
      divFlipInner.appendChild(divFlipFront);
      divFlipInner.appendChild(divFlipBack);
      divFlipBox.appendChild(divFlipInner);
      col.appendChild(divFlipBox);
      return col ;
    }

    const displayImages = () => {
        let imgTags = document.querySelectorAll('img');
        imgTags.forEach(el => el.remove());
        let shuffledArr = imgDoubArr.sort((a,b)=> 0.5 - Math.random())
        console.log('before for loop')
        for (let i =0 ; i < shuffledArr.length; i++){
            let parentTag = document.getElementById(`${i}`);

            let child = document.createElement('img');
            child.src = shuffledArr[i];
            child.height = '200';
            parentTag.appendChild(child);
        }
    }

    //_________________________ MY Functions End ____________________

    makeRowsAndCols();
    displayImages();

    //___________________________START___________________________

    document.getElementById('start').addEventListener('click', ()=>{
        displayImages();
    })

})();