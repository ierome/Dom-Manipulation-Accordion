let className = 0;  
  
  function makeImage(itemz) {
    return `<div class="imageInsert${className}">
    <img src="${itemz.img}">
    <div class="imageShit${className}">
        <h5>"${itemz.title}" By ${itemz.photographer}</h5>
        </div>
    </div>`
}
let htmlStr = ''
carouselImages.forEach(itemz => {
   htmlStr += makeImage({
       img: itemz.image_url,
       title: itemz.title,
       photographer: itemz.photographer_id
   })
   className++
})
//console.log(htmlStr)

document.querySelector(".imageWrapper").innerHTML = htmlStr

$(document).ready(() => {
let imageActive = 0;
let zDex = 0;
$(".next").on("click", function(e) {
    if (imageActive > 3) {
        imageActive = 0;
    } else {
        let activeItem = $(".imageInsert" + imageActive)
        $(activeItem).css('z-index', zDex);
        zDex++
        imageActive++
    }
})

})