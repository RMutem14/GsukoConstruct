const burger = document.querySelector(".menuPhoto");
const links = document.querySelector(".navDesktop");
const cas1 = document.querySelectorAll('.slider1');
const cas2 = document.querySelectorAll('.slider2');
const cas3 = document.querySelectorAll('.slider3');
const cas4 = document.querySelectorAll('.slider4');
const cas5 = document.querySelectorAll('.slider5');
const accordion = document.getElementsByClassName('contentBx')


burger.addEventListener("click", () => {
  links.classList.toggle("mobile");
});

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}


const slider1 = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {
                    transform :'translateX(200px)', opacity : 0
                },
                {
                    transform :'translateX(0px)', opacity : 1
                }
            ],{
                duration : 700
            })
            slider1.unobserve(entry.target)
        }

    }
})

const slider2 = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {
                    transform :'translateX(-100px)', opacity : 0
                },
                {
                    transform :'translateX(0px)', opacity : 1
                }
            ],{
                duration : 700
            })
            slider2.unobserve(entry.target)
        }
    }
})

const slider3 = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {
                    transform :'translateY(100px)', opacity : 0
                },
                {
                    transform :'translateY(0px)', opacity : 1
                }
            ],{
                duration : 700
            })
            slider3.unobserve(entry.target)
        }
    }
})

const slider4 = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {
                    transform :'translateY(-100px)', opacity : 0
                },
                {
                    transform :'translateY(0px)', opacity : 1
                }
            ],{
                duration : 700
            })
            slider4.unobserve(entry.target)
        }
    }
})

const slider5 = new IntersectionObserver((entries)=>{
    for(const entry of entries){
        if(entry.isIntersecting){
            entry.target.animate([
                {
                    opacity : 0
                },
                {
                    opacity : 1
                }
            ],{
                duration : 700
            })
            slider5.unobserve(entry.target)
        }
    }
})

cas1.forEach(slider => {
    slider1.observe(slider)
});
cas2.forEach(slider => {
    slider2.observe(slider)
});
cas3.forEach(slider => {
    slider3.observe(slider)
});
cas4.forEach(slider => {
    slider4.observe(slider)
});
cas5.forEach(slider => {
    slider5.observe(slider)
});