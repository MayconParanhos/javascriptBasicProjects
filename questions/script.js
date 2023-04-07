let text = document.getElementsByClassName("question-text");
let minus_icon = document.getElementsByClassName("minus-icon");
let plus_icon = document.getElementsByClassName("plus-icon");

for(el of plus_icon){
    el.addEventListener("click", function(){
        closeAll()
        this.style.display = 'none';
        this.nextElementSibling.style.display = 'block';
        this.parentElement.parentElement.nextElementSibling.style.display = 'block';
    });

    for(el of minus_icon){
        el.addEventListener("click", function(){
            this.style.display = 'none';
        this.previousElementSibling.style.display = 'block';
        this.parentElement.parentElement.nextElementSibling.style.display = 'none';
        })
    }

    function closeAll(){
        for(el of text){
            el.style.display = 'none';
        }
        for(el of minus_icon){
            el.style.display = 'none';
        }
        for(el of plus_icon){
            el.style.display = 'block';
        }
    }
}