<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import config from '../config'
</script>

<template>
  <div class="container py-5 h-10">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 border">
        <div class="container" style = "height:550px">
          <div class="row mt-2">
            <div class="col border"><label>Makine: </label></div>
            <div class="col border"><label id="makine">{{makine}}</label></div>
          </div>

          <div class="row mt-2">
            <div class="col border"><label>Makine Durumu: </label></div>
            <div class="col border"><label id="makineDurumu">{{makineDurumu.state}}</label></div>
          </div>

          <div class="row mt-2">
            <div class="col border w-100">
              <div class="row"> <label>İş Emri Seç </label> </div>
              <div class="w-100 mt-2"></div>
              <div class="row mt-2"> 
                  <select id="machine" class="form-control form-select-sm">
                    <option disabled value="">Lütfen İş Emri Seçiniz</option>
                    <option v-for="data in isEmri" :value ="data">{{data}}</option>
                  </select>
               </div>
            </div>
          </div>
        </div>
        Uygulama Alanı <br>
        Şu Link İyi https://stackblitz.com/edit/vue-1bngkw?file=src%2FApp.vue

        <label id="makine"></label>
        
      </div>
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 border mh-100">    
        <div class="container">
          <div class="row mt-2">
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100 w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="w-100 mt-2"></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="w-100 mt-2"></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="w-100 mt-2"></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-secondary w-100 h-100">Secondary</button></div>
            <div class="w-100 mt-2"></div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    created() {
      this.makineGetir();
      this.makineDurumuGetir();
      this.funcSiparisGetir();
    },
    data() {
      return {
        makine: "",
        makineDurumu:"",
        isEmri : []
      };
    },
    methods: {
      makineGetir(){
        this.makine = localStorage.makine
        console.log(this.makine)
        
      },

      makineDurumuGetir() {
        axios
          .get( this.$hostname + "/nodered/checkMachineState")
          .then(response => {
            this.makineDurumu = response.data
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
    },

    funcSiparisGetir(){

    }
  };



</script>