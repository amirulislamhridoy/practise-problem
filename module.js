//2
var h2Tag = document.getElementsByTagName("h2")
for(let h2 of h2Tag){
    h2.style.color = 'lightblue';
}
//3
document.getElementById('backpack').style.backgroundColor = 'tomato';
//4
var cards = document.getElementsByClassName('card')
for(let card of cards){
    card.style.borderRadius = '30px';
}

//5
//catagories first shoe button name: supply 350
document.getElementById('console-button').addEventListener('click',function(){
    console.log('hello')
})

//6
var buyNowButton = document.getElementsByClassName('panda-btn-now')
// for(let i =0; i < buyNowButton.length; i++){
//     var buyNow = buyNowButton[i]
//     console.log(buyNow)
//     buyNow.addEventListener('click',function(){
//         buyNow.style.display = 'none';
//     })
// }
for(let buyNow of buyNowButton){
    console.log(buyNow)
    buyNow.addEventListener('click',function(){
        buyNow.style.display = 'none';
    })
}

//7 
document.getElementById("submit-input").addEventListener("keyup",function(){
    var btn = document.getElementById('d-button');
    var inputSubmit = document.getElementById("submit-input")
    if(inputSubmit.value == 'email'){
        btn.removeAttribute('disabled');
    }
    else{
        btn.setAttribute('disabled',true);
    }
})

//8
// document.getElementById('img1').addEventListener("click",function(){
//     if(img.src != 'image/shoes/shoe-2.png'){
//         img.src = 'image/shoes/shoe-2.png'
//     }
// })

//9
document.getElementById("subscribe").addEventListener('dblclick',function(){
    const stay = document.getElementById("subscribe")
    stay.style.backgroundColor = 'skyblue';
})