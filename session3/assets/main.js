// let showBtn = document.getElementById("showBtn")
// let password = document.getElementById("password")

// showBtn.onclick = ()=>{
//     if(password.type == "password"){
//         password.type = "text"
//         showBtn.innerText = "hide"
//     }else {
//         password.type = "password"
//         showBtn.innerText = "show"
//     }
// }


// let showBtn = $('#showBtn')
// let password = $("#password")

// showBtn.click(()=>{
//     if(password.attr("type") == "password"){
//         password.attr("type","text")
//         showBtn.text("hide")
//     }else{
//         password.attr("type","password")
//         showBtn.text("show")
//     }
// })



// let text = document.getElementById("text")
// let res = document.getElementById("res")
// text.onkeyup = ()=>{
//     res.innerText  ="count is :"+text.value.length
//     if(text.value.length >= 20){
//         text.style.cssText = "border:1px solid red;outline:1px solid red"
//     }else {
//         text.style.cssText = "border:1px solid black;outline:1px solid black"
//     }
// }





// let text = $("#text")
// let res = $("#res")

// text.keyup(()=>{
//     if(text.val().length>=20){
//         text.css({"border":"1px solid red","outline":"1px solid red"})
//     }else{
//         text.css({"border":"1px solid black","outline":"1px solid black"})
//     }
//     res.text(`count is :${text.val().length}`)
// })


// let imgs = document.querySelector(".imgs")
// let  mainimg = document.querySelector(".container > img")

// imgs.onclick = (e)=>{
//     if(e.target.src){
//         mainimg.src = e.target.src 
//     }
// }


// let imgs = $(".imgs")
// let mainimg = $(".container > img")
// imgs.click((e)=>{
//     if(e.target.src){
//         mainimg.attr("src",e.target.src) 
//     }
// })





// let box = document.querySelector(".box")

// box.onclick = function(e){
//     let cssClass = e.target.getAttribute("class")
//     document.body.style.background = cssClass.split(" ")[1]
// }

// let box = $(".box")
// box.click((e)=>{
//     $("body").css("background",e.target.className.split(" ")[1])
// })


// $.ajax({
//     url:"https://jsonplaceholder.typicode.com/users",
//     method:"GET",
//     success:function(w){
//         console.log(w)
//     }
// })


// let ajax = new XMLHttpRequest
// ajax.open("GET","https://jsonplaceholder.typicode.com/users")
// ajax.send()
// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4){
//         console.log(JSON.parse(ajax.response))
//     }
// }



$("#btn").click(()=>{
    $(".box").slideToggle(2000)
})