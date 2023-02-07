
const closeItems = container =>{
    const items = container.find('.team__content');
    const arrow = container.find('.icon');
    items.height(0);
    const itemContainer = container.find('.team__item');
    itemContainer.removeClass('active');
    arrow.removeClass('icon--active');
}
const openItem = item =>{
    const container = item.closest('.team__item');
    const contentBlock = container.find('.team__content');
    const textBlock = container.find('.team__content-block');
    const height = textBlock.height();
    const arrow = item.find('.icon');
    contentBlock.height(height);
    container.addClass("active");
    arrow.addClass("icon--active");
}
$('.team__title').click(e =>{
    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');
    const elemContainer = $this.closest('.team__item');
    if(elemContainer.hasClass('active')){
        closeItems(container);
    }
    else{
        closeItems(container);
        openItem($this);
    }
    
    
});