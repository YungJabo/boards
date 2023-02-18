const closeEveryItem = container =>{
    const items = container.find('.board');
    const content = container.find('.board__content');
    content.width(0);
    items.removeClass('board--active');
    items.removeClass('board--unactive');
    $('.board').css({
        right: `0px`
    })
};

checkWidth = setInterval(()=>{
     isPhone = window.matchMedia("(max-width:480px)").matches;
},1000)


const open = item =>{
    const hiddenContent = item.find('.board__content');
    console.log("open");
    hiddenContent.width(requireWidth(item).container);
    const textBlock = item.find('.board__text');
    textBlock.width(requireWidth(item).textContainer);

}
$('.board__link').click(e=>{
    e.preventDefault();
    $this = $(e.currentTarget);
    item=$this.closest('.board');
    const container = item.closest('.boards');
    const isOpen = item.hasClass('board--active');
    if(isOpen){
        closeEveryItem(container);
        
    }
    else{
        
        if(isPhone){
        item.addClass('board--active').siblings().addClass('board--unactive');
        $('.board--unactive').first().css({
            right: `102px`
        })
        }
        else{
            closeEveryItem(container);
            item.addClass('board--active');
        }
        open(item);
    }
    
});

$('.board__close').click(e=>{
    e.preventDefault();
    closeEveryItem($('.boards'));
})

const requireWidth = item =>{
    
    const screenWidth= $(window).width();
    const container = item.closest('.boards');
    const titleBlocks = container.find('.board__link');
    const titlesWidth = titleBlocks.width()*titleBlocks.length;
    const isMobile = window.matchMedia("(max-width:768px)").matches;
    const textContainer = item.find('.board__text');
    var paddingLeft = parseInt(textContainer.css('padding-left'));
    var paddingRight = parseInt(textContainer.css('padding-right'));

    
    
    
    if(isMobile){
        resultItemWidth= screenWidth-titlesWidth;
    }
    else{
        resultItemWidth = 500;
    }
    if(isPhone){
        resultItemWidth = screenWidth-titleBlocks.width();
        return  {
            container: resultItemWidth,
            textContainer:resultItemWidth-paddingLeft-paddingRight
        }

    }
    else{
    return{
        container: resultItemWidth,
        textContainer: resultItemWidth - paddingLeft -paddingRight
    }
    }

    
}