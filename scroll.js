const sections = $('.section');
const display = $('.wrapper__content');
sections.first().addClass('active');

let inScroll = false;

const transition = sectionEq =>{
    if(inScroll == false){
        inScroll = true;
        const position = sectionEq *-100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-side-menu");
        const sideMenu = $('.fixed-menu');
        
        if(menuTheme == "black"){
            sideMenu.addClass("fixed-menu--black");

        }
        else{
            sideMenu.removeClass("fixed-menu--black")
        }

        display.css({
            transform: `translateY(${position}%)`
        })
        sections.eq(sectionEq).addClass('active').siblings().removeClass('active'); 

        setTimeout(()=>{
            inScroll = false;
            sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");
        }, 600)

    }
    
}

const scrollViewport = direction =>{
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    
    if(direction=="next" && nextSection.length){
        transition(nextSection.index());
    }
    if(direction=="prev" && prevSection.length){
        transition(prevSection.index());
    }
}
$(window).on('wheel',e=>{
    const deltaY = e.originalEvent.deltaY;
    

    if(deltaY > 0){
        scrollViewport("next");
    }
    else{
        scrollViewport("prev");
    }
})

$(window).on('keydown', e=>{
    const tagName = e.target.tagName.toLowerCase();
    if(tagName !='input' && tagName !='textarea'){

        switch(e.keyCode){
            case 40:
                scrollViewport('next');
                break;
            case 38:
                scrollViewport('prev');
                break;
        }
    }
    
})

$("[data-scroll-to]").click(e=>{
    e.preventDefault();
    $('.overlay').css({
        display: `none`
    })
    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);
    transition(reqSection.index()); 
})

$('.wrapper').on('touchmove',e => e.preventDefault());
$('body').swipe({
    swipe: function (event,direction)
    {
        
        
        
        let scrollDirection = "";

        if(direction == "up"){
            alert(direction);
            scrollDirection == "next";
        }
        if(direction == "down"){
            alert(direction);
            scrollDirection = "prev";
        }
        scrollViewport(scrollDirection);
        
    }
})