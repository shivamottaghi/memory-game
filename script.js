
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
    let imgDoubArr = imgUrlArr.concat(imgUrlArr)
    console.log('original' + imgDoubArr);

    //___________________________START___________________________
    document.getElementById('start').addEventListener('click', ()=>{
        let shuffledArr = imgDoubArr.sort((a,b)=> 0.5 - Math.random())
        console.log('shuffle' + shuffledArr);
        for (let i =0 ; i < shuffledArr; i++){
            
        }
    })

})();