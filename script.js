
(()=>{
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
    let imgDoubArr = imgUrlArr.concat(imgUrlArr);


    //___________________________START___________________________
    document.getElementById('start').addEventListener('click', ()=>{
        let imgTags = document.querySelectorAll('img');
        imgTags.forEach(el => el.remove());
        let shuffledArr = imgDoubArr.sort((a,b)=> 0.5 - Math.random())
        console.log('before for loop')
        for (let i =0 ; i < shuffledArr.length; i++){
            let parentTag = document.getElementById(`${i}`);
            let child = document.createElement('img');
            child.src = shuffledArr[i];
            child.height = '128';
            parentTag.appendChild(child);
        }
    })

})();