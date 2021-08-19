let btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    let genders = document.getElementsByName("gender");
    console.log(genders);
    genders.forEach((gender)=>{
        if(gender.checked){
            alert(`gender : ${gender.value}`);
        }
    })

})