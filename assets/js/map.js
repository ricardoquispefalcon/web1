document.addEventListener("DOMContentLoaded",(event)=>{
   
   setTimeout(()=>{
    document.querySelector("#load-iframe-map").innerHTML=
    `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186.62502927584455!2d2.3005741!3d41.5475871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b8395d0374cb%3A0x1ce2b635e2b1d59!2sMas%20de%20Sant%20Lle%C3%AD!5e0!3m2!1ses-419!2spe!4v1716942154034!5m2!1ses-419!2spe" ></iframe>
    `;
   },500);
   
});