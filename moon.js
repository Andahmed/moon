let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountain4 = document.getElementById('mountain4`')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let logo5ahmed = document.querySelector('.logo5ahmed')

window.onscroll =function(){
  let value = scrollY;
  stars.style.left = value  + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value  + 'px';
  boat.style.top = value  + 'px';
  boat.style.left = value *3 + 'px';
  logo5ahmed.style.fontSize = value  + 'px';
  if(scrollY >= 67){
    logo5ahmed.style.fontSize = 67 + 'px';
    logo5ahmed.style.position = 'fixed';
    if(scrollY >= 440){
      logo5ahmed.style.display ='none';
    }else{
        logo5ahmed.style.display ='block';

      
    }
    if(scrollY >=127){
      document.querySelector('.main').style.background ="linear-gradient(#147595,#10001f)";
    }else{
      document.querySelector('.main').style.background ="linear-gradient(#200016,#10001f)";

      


    }
  }
}

