<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import config from '../config'
</script>

<template>
    <div class="container py-5 h-10">
        <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-12 col-md-8 col-lg-6 col-xl-5 border">
      Uygulama Alanı <br>
      Şu Link İyi https://stackblitz.com/edit/vue-1bngkw?file=src%2FApp.vue

      <label id="makine"></label>
      
    </div>
    <div class="col-12 col-md-8 col-lg-6 col-xl-5 border">
      Bu Butonu Çoğaltacağız <br>
      <button type="button" class="btn btn-secondary">Secondary</button>
    </div>
  </div>
</div>
</template>

<script>
var makine = localStorage.makine
console.log(makine)

</script>