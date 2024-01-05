const mail= document.getElementById("mailInput")
const password= document.getElementById("passwordInput")

const alertMail=document.getElementById("alertmail")
const help=document.getElementById("needhelp")
const alertpassword=document.getElementById("alertpassword")




mail.onclick=()=>{
    mail.focus()
}




mail.addEventListener("input", () => {
    // içerisindeki yazı 3 den küçükse uyarı yazısını ekle
    if (mail.value.length <= 3) {
      alertMail.style.display = "block";
      // aksi halde yani 3 den büyükse uyarı yazısını kaldır
    } else {
      alertMail.style.display = "none";
    }
  });

  


  password.addEventListener("input",()=>{

    if(password.value.length<=3){

        alertpassword.style.display="block"
    }
    else{
        alertpassword.style.display="none"
    }
  })