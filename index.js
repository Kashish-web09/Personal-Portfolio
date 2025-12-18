const inputEl=document.querySelectorAll(".inputfield");
const formEl=document.getElementById("contact-form");
formEl.addEventListener('submit',(e)=>{
    e.preventDefault();

  let allFilled=true;
  inputEl.forEach(input=>{
    if(input.value.trim()===""){
        allFilled=false;
    }
  });
  if (!allFilled) {
    alert("Please fill in all the fields!");
  }else{
    alert("Message sent!");
    formEl.reset();
  }
});
