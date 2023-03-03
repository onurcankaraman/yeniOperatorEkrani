<script setup>
  import Swal from 'sweetalert2/dist/sweetalert2.js'
</script>

<template>
<div class="container">
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">GİRİŞ YAPINIZ</h2>
              <p class="text-white-50 mb-5">Operatör ID ve size verilen şifreyi giriniz</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="operatorNo" class="form-control form-control-lg" />
                <label class="form-label" for="operatorNo">Operator ID</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="operatorPassword" class="form-control form-control-lg" />
                <label class="form-label" for="operatorPassword">Şifrenizi Giriniz</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="javascript:void(0);" @click="parolaUnuttum(this)" >Parolomı Unuttum</a></p>

              <button class="btn btn-outline-light btn-lg px-5" @click="girisYap(this)" type="button">Giriş Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
function girisYap(){
  let operatorNo = document.getElementById("operatorNo").value;
  let operatorPassword = document.getElementById("operatorPassword").value;

  if((operatorNo === "admin") && (operatorPassword === "123456")){
    window.location.href="/select-machine";
  }
  else{
    Swal.fire({
    icon: 'error',
    title: 'Bilgilendirme',
    text: 'Operatör Numaranızı veya Şifrenizi Hatalı Girmiş Olabilirsiniz',
    footer: 'Bir Sorun Yaşadığınızı Düşünüyorsanız; IT Sorumlunuz ile iletişime geçebilirsiniz.',
    confirmButtonText:'Tekrar Dene'
  }).then(
    function(){
      setTimeout(()=>{
        /* Buraya Nesneleri temizle */
        document.getElementById("operatorNo").focus();
      },500);
      
    }
  )
  }


}

function parolaUnuttum(){
  Swal.fire({
    icon: 'info',
    title: 'Bilgilendirme',
    text: 'Bir Sorun Yaşadığınızı Düşünüyorsanız; IT Departmanı ile iletişime geçiniz',
    confirmButtonText:'Tamamdır'
  });
}


</script>