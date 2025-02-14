const newSwiper = new Swiper('.new_swiper',{
    loop: true,
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
    on: {
        init: function (){
            const sBar = document.querySelector('.new_swiper .scroll_progress');
            sBar.style.width = (1 / this.slides.length * 100) * 2 + "%"; 
        },
        slideChange: function (){
            const sBar = document.querySelector('.new_swiper .scroll_progress');
            sBar.style.left = (this.realIndex / (this.slides.length / 2) * 100) / 2 + "%"; 
        }
    },
    breakPoints: {
        1024 : {
            spaceBetween: 0,
        }
    }
})
const bestSwiper = new Swiper('.best_swiper',{
    loop: true,
    autoplay: {
        delay: 6000,
    },
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 2,
    on: {
        init: function (){
            const sBar = document.querySelector('.best_swiper .scroll_progress');
            sBar.style.width = (1 / this.slides.length * 100) * 2 + "%"; 
        },
        slideChange: function (){

            const sBar = document.querySelector('.best_swiper .scroll_progress');
            sBar.style.left = (this.realIndex / (this.slides.length / 2) * 100) / 2 + "%"; 
        }
    },
    breakPoints: {
        1024 : {
            spaceBetween: 0,
        }
    }
})
const row5slide = new Swiper('.row5s',{
    loop: true,
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: ".row5s .right_arrow",
        prevEl: ".row5s .left_arrow",
   },
})
const row4slide = new Swiper('.row4-slide',{
    loop: true,
    autoplay: {
        delay: 6000,
    },
    on: {
        init: function (){
            const sBar = document.querySelector('.row4-slide .scroll_progress');
            sBar.style.width = (1 / this.slides.length * 100) + "%"; 
        },
        slideChange: function (){
            const sBar = document.querySelector('.row4-slide .scroll_progress');
            sBar.style.left = (this.realIndex / (this.slides.length) * 100) + "%"; 
        }
    },

})


// row 6

const row6TabMenu = document.querySelectorAll('.row6 .menu_tap button');
const row6MainImg = document.querySelectorAll('.row6 .row6_main');

row6TabMenu.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        let callName = item.innerText;
        document.querySelector('.row6 .row6_main.active').classList.remove('active');
        row6TabMenu.forEach(item2 =>{
            item2.classList.remove('active');
        })
        
        row6MainImg[index].classList.add('active');
        row6TabMenu[index].classList.add('active');


        row6Create(rankProduct[callName])
    })
})


const row6Create = (prd)=>{
    const row6Prod = document.querySelector('.prod_list');
    console.log(prd)
    const insert = prd.map(item => {
        
        return `
            <li class='prod_item'>
                <span class="rank">No.${item.rank}</span>
                <div class='img_area'><img src="./images/${item.src}" alt="lank${item.rank}"/> </div>
                <div class='row6_title'>${item.tit}</div>
                <div class='row6_en_tit'>${item.enTit}</div>
                <div class='row6_price'>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
            </li>
        `
    })

    row6Prod.innerHTML = insert.join('');


}

row6Create(rankProduct['ALL'])



// row7

const row7NextBtn = document.querySelector('.row7 .right_arrow')
const row7PrevBtn = document.querySelector('.row7 .left_arrow')
let nowIdx = 0;
const row7LeftProd = document.querySelectorAll('.row7 .left_prod')
const row7RightProd = document.querySelectorAll('.row7 .right_prod')

row7NextBtn.addEventListener('click', ()=>{

    if(nowIdx < row7LeftProd.length - 1){
        nowIdx++;
        row7Active(nowIdx);
    }
})
row7PrevBtn.addEventListener('click', ()=>{

    if(nowIdx > 0){
        nowIdx--;
        row7Active(nowIdx);
    }
})



const row7Active = (number)=>{
    row7LeftProd.forEach(item => {
        item.classList.remove('active');
    })
    row7RightProd.forEach(item => {
        item.classList.remove('active');
    })

    row7LeftProd[number].classList.add('active')
    row7RightProd[number].classList.add('active')

}



$('.left_catg').click(function(){
    $('.category_box').addClass('active');
})

$('.close_btn').click(function(){
    $('.category_box').removeClass('active');
})