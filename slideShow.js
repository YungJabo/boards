const findBlock = attr =>{
    return $('.reviews__item').filter((ndx,item)=>{
        return $(item).attr('data-link')==attr;
    }
    )
}

$('.reviews__link').click(e=>{
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = findBlock(target);
    const item = $this.closest('.reviews__icon');
    item.addClass('reviews__icon--active').siblings().removeClass('reviews__icon--active');
    itemToShow.addClass('reviews__item--active').siblings().removeClass('reviews__item--active');
})