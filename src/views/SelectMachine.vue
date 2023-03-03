<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import config from '../config'
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

                    <select class="form-control form-select-lg">
                      <option>Deneme1</option>
                      <option>Deneme1</option>
                      <option>Deneme1</option>
                    </select>


                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-warning btn-md px-5 " @click="girisYap(this)" type="button">
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
          .get("http://localhost:1880/nodered/listMachine")
          .then(response => (this.posts.push(response.data)))
          .catch(error => {
            this.errors.push(error);
          });
      }
    }
  };

</script>

