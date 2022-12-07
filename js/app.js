function action () {
    document.querySelector('.result1').style.backgroundColor = '#F6EEE0' ; 
    document.querySelector('.result2').style.backgroundColor = '#F6EEE0' ; 
    document.querySelector('.player1').style.color = '#423A47' ; 
    document.querySelector('.player2').style.color = '#423A47' ; 

    var x = Math.random();
    x=x*3;
    x=Math.floor(x) + 1   
    var y = Math.random();
    y=y*3;
    y=Math.floor(y) + 1 
    document.getElementById("img1").src = `img/${x}.png`
    document.getElementById("img2").src = `img/${y}.png`
    
    if(x==1 && y==1){
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
    }else if(x==1 && y==2){
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
    }else if(x==1 && y==3){
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
    }else if(x==2 && y==1){
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
    }else if(x==2 && y==2){
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
    }else if(x==2 && y==3){
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
    }else if(x==3 && y==1){
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
    }else if(x==3 && y==2){
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
    }else if(x==3 && y==3){
        document.querySelector('.result2').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player2').style.color = '#fff' ; 
        document.querySelector('.result1').style.backgroundColor = '#BC0A0F' ; 
        document.querySelector('.player1').style.color = '#fff' ; 
    }
}

