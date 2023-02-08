$('.form').submit(e =>{
e.preventDefault();



const modal = $('.modal');
const modalContent = modal.find('.modal__content');


const close = modal.find('.app-close-modal');
close.click(e=>{
    console.log('click');
    e.preventDefault();
    modal.removeClass('modal--open');
})


const form = $(e.currentTarget);
const name = form.find("[name='name']");
const phone = form.find("[name='phone']");
const comment = form.find("[name='comment']");
const to = form.find("[name='to']");


[name,phone,comment,to].forEach(elem =>{
    elem.removeClass('input-error');
    if(elem.val().trim() == ""){
        elem.addClass('input-error');
    }
});

const errorElements = form.find('.input-error');
modalContent.removeClass('modal__content--error');
if(errorElements.length==0){
    $.ajax({
        url:"https://webdev-api.loftschool.com/sendmail",
        method: "POST",
        data:{
            name: name.val(),
            phone:phone.val(),
            comment:comment.val(),
            to:to.val()
    
        },
        success: data=>{
            modalContent.text(data.message);
            modal.addClass('modal--open');
        },
        error: data=>{
            
            modalContent.text("Ошибка!");
            modalContent.addClass('modal__content--error');
            modal.addClass('modal--open');
            

        }
    })
}


});

