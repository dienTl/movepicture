const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach((item) =>{
    console.log(item);
    item.addEventListener("click",() =>{
        removeactive();
        item.classList.add("active");
    })
});
function removeactive(){
    panels.forEach(item =>{
        item.classList.remove("active");
    })
}