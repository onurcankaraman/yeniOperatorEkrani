<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
</script>

<template>
  <div class="container">
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem;">
              <div class="card-body p-5 text-center">

                <div class="md-5 mt-md-4 pb-0">


                  <h2 class="fw-bold mb-2 text-uppercase">MAKİNE SEÇİNİZ</h2>
                  <p class="text-white-50 mb-5">Çalışanağınız Makineyi Seçiniz</p>

                  <div class="form-outline form-white mb-4">

                    <select id="machine" class="form-control form-select-lg">
                      <option disabled value="">Lütfen Makine Seçiniz</option>
                      <option v-for="data in posts" :value ="data">{{data}}</option>
                    </select>


                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-warning btn-md px-5 " @click="girisYap()" type="button">
                      Makine Seçimini Onayla
                      <i class="fa fa-arrow-right px-2" aria-hidden="true"></i>
                    </button>
                  </div>
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
  export default {
    created() {
      this.getPosts();
    },
    data() {
      return {
        posts: [],
        errors: []
      };
    },
    methods: {
      getPosts() {
        axios
          .get( this.$hostname + "/nodered/listMachine")
          .then(response => {
            var uzunluk = response.data.length
            for (var x = 0; x < uzunluk; x = x + 1){
              //console.log(response.data[x])
              this.posts.push(response.data[x])
            }
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
    }
  };

  //.then(response => (this.posts.push(response.data)))
 
  function girisYap(){
    var machine = document.getElementById("machine").value
    localStorage.setItem("makine", machine)
    console.log(machine)

    Swal.fire({
    icon: 'info',
    title: 'Seçim Onaylama',
    text: 'Seçtiğiniz Makine ' + machine + '. Onaylıyor musunuz?',
    footer: 'Bir Sorun Yaşadığınızı Düşünüyorsanız; IT Sorumlunuz ile iletişime geçebilirsiniz.',
    confirmButtonText:'Onayla'
    }).then(
    function(){
      setTimeout(()=>{
        window.location.href="/Application"
      },500);
      
    }
  )
  }
</script>

