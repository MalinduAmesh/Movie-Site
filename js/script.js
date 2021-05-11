/*------------------------------------------------------------------------- Nav Bar ----------------------------------------------------*/


const toggleButton  = document.getElementsByClassName('toggle-button')[0]
const navbarLink  = document.getElementsByClassName('navBar-links')[0]

toggleButton.addEventListener('click',()=>{
    navbarLink.classList.toggle('active')
})

/*------------------------------------------------------------------------- END OF  Nav Bar ----------------------------------------------------*/

/* <!-----------------------------------------------------image slider start------------------------------------------------------> */

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000)

/* <!-----------------------------------------------------END OF image slider start------------------------------------------------------> */
