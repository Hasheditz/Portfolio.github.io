const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn  = document.querySelectorAll('.control');
const allsections = document.querySelector('.main-content');

function pagetransition()
{
    for(let i = 0 ; i < sectBtn.length ; i++)
    {
        sectBtn[i].addEventListener('click' , function(){
            let currentbtn = document.querySelectorAll('.active-btn');
            currentbtn[0].className = currentbtn[0].className.replace('active-btn' , '');
            this.className += ' active-btn';
        })
    }

    // sections active

 allsections.addEventListener('click' , (e) =>{
     const id = e.target.dataset.id;
     if(id){
         // remove seleceted from the ohter buttons
         sectBtns.forEach((btn) =>{
             btn.classList.remove('active')
         })
         e.target.classList.add('active')

         // hide other sections

         sections.forEach((section) =>{
            section.classList.remove('active')
         })
 
         const element = document.getElementById(id);
         element.classList.add('active');

     }
    })


    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click' , () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    
}



pagetransition();

// time stamp : 1.38.12 23/12/2022