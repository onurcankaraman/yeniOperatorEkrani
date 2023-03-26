<script setup>
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'
import config from '../config'
</script>

<template>
  <div class="container py-5 h-10">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 border">
        <div class="container" style = "height:100%">
          <div class="row mt-2">
            <div class="col border"><label>Makine: </label></div>
            <div class="col border"><label id="makine">{{makine}}</label></div>
          </div>

          <div class="row mt-2">
            <div class="col border"><label>Makine Durumu: </label></div>
            <div class="col border"><label id="makineDurumu">{{makineDurumu.state}}</label></div>
          </div>

          <div class="row mt-2" v-if="alanIsEmri" id="alanIsEmri">
            <div class="col border w-100">
              <div class="row"> <label>İş Emri Seç </label> </div>
              <div class="w-100 mt-2"></div>
              <div class="row mt-2"> 
                  <select id="isEmri" class="form-control form-select-sm">
                    <option disabled value="">Lütfen İş Emri Seçiniz</option>
                    <option v-for="data in isEmri" :value ="data">{{data[1]}}</option>
                  </select>
              </div>
              <div class="row mt-2"> 
                <button type="button" @click="uretimEmriOnayla" class="btn btn-warning w-100 h-100 w-100 h-100">Üretim Emrini Onayla</button>
              </div>
            </div>
          </div>

          <div class="row mt-2" v-if="alanUretimBasla" id="alanUretimBasla">
            <div class="col border w-100">
              <div class="row">
                <div class="col border w-100" ><label>Üretilecek Ürün</label></div>
                <div class="col border w-100" ><label>{{uretimEmri[1]}}</label></div>
              </div>

              <div class="row">
                <div class="col border w-100" ><label>Üretim Numarası</label></div>
                <div class="col border w-100" ><label>{{uretimEmri[0]}}</label></div>
              </div>

              <div class="row">
                <div class="col border w-100" ><label>Üretilecek Adet</label></div>
                <div class="col border w-100" ><label>{{uretimEmri[2]}}</label></div>
              </div>

              <div class="row">
                <div class="col p-1 border"><button type="button" @click="uygulamaBaslangic(true,false,false)" class="btn btn-warning w-100 h-100 w-100 h-100">Yeniden Seç</button></div>
                <div class="col p-1 border"><button type="button" @click="uretimBasla(uretimEmri[0])" class="btn btn-success w-100 h-100 w-100 h-100">Üretimi Başlat</button></div>
              </div>
            </div>
          </div>

          <div class="row mt-2" v-if="alanUretimTakip"  id="alanUretimTakip">
            <div class="col border w-100">
              <div class="row" style="height: 25px;">
                <div class="col border w-100" ><label>Üretilecek Ürün</label></div>
                <div class="col border w-100" ><label>{{uretimEmri[1]}}</label></div>
              </div>
              <div class="row mt-2" style="height: 25px;">
                <div class="col border w-100" ><label>Hedef Adet</label></div>
                <div class="col border w-100" ><label>Sağlam Üretim</label></div>
                <div class="col border w-100"><label>Hurda Üretim</label></div>
              </div>

              <div class="row" style="height: 50px;">
                <div class="col border w-100"><label>{{ kalanUrun }}</label></div>
                <div class="col border w-100"><label>{{ saglam }}</label></div>
                <div class="col border w-100"><label>{{ hurda }}</label></div>
              </div>

              <div class="row">
                <div class="col p-1 border w-100" style="height: 75px;"><button type="button" :disabled="!saglamBtn" @click="saglam++; this.kalanUrun = this.kalanUrun - 1; adetKontrol();" class="btn btn-success w-100 h-100 w-100 h-100">Sağlam Üretim</button></div>
                <div class="col p-1 border w-100" style="height: 75px;"><button type="button" :disabled="!hurdaBtn" @click="hurda++;" class="btn btn-danger w-100 h-100 w-100 h-100">Hurda Üretim</button></div>
                <div class="col p-1 border w-100" style="height: 75px;"><button type="button" :disabled="!araBtn" @click="urunSay(saglam,hurda)" class="btn btn-warning w-100 h-100 w-100 h-100">(Ara) Kayıt</button></div>
              </div>

              <div class="row mt-2">
                <div class="col p-1 border w-100" style="height: 75px;"><button type="button" :disabled="!uretimBitirBtn" @click="uretimBitir()" class="btn btn-primary w-100 h-100 w-100 h-100">Üretimi Bitir</button></div>
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
      this.uygulamaBaslangic(true,false,false);

      setInterval(()=>{
        this.makineDurumuGetir();
      },3000)

      this.makineGetir();
      this.siparisGetir();
    },
    data() {
      return {

        //MACHİNE DATAS
        makine: "",
        makineDurumu:"",


        //APPLICATION CONTROL DATAS
        alanIsEmri: false,
        alanUretimTakip : false,
        alanUretimBasla: false,

        //DIV CONTROL
        saglamBtn : true,
        hurdaBtn : true,
        araBtn : true,
        uretimBitirBtn:true,


        //PRODUCTION DATAS
        isEmri : [],
        uretimEmri: [],
        kalanUrun : 0,
        saglam:0,
        hurda:0
      };
    },
    methods: {

      uretimBitir(uretimNo){

        const veriler = {
          "machine":this.makine,
          "order_id" : uretimNo
        }
        
        
        axios
          .post( this.$hostname + "/nodered/endOrderByMachine",veriler)
          .then(response => {
            this.isEmri = []
            this.uygulamaBaslangic(true,false,false)
            this.saglam = 0
            this.hurda = 0
            this.uretimEmri = []
            this.kalanUrun = 0
          })
          .catch(error => {
            this.errors.push(error);
          })

      },
       
      urunSay(saglam,hurda){
        var toplamParca = saglam + hurda
        const veriler = {
          "total": toplamParca,
          "hurda":hurda,
          "machine":this.makine
        }
        axios
          .post( this.$hostname + "/nodered/countByMachine",veriler)
          .then(response => {
            this.uretimEmri[2] = this.kalanUrun
            this.saglam = 0
            this.hurda = 0
            
          })
          .catch(error => {
            this.errors.push(error);
        });
        
      },

      adetKontrol(){
        if(this.saglam == this.uretimEmri[2]){
          this.uretimBtnKontrol(false,false,false,true)
          this.urunSay(this.saglam, this.hurda)
        }
      },


      uretimBtnKontrol(saglam,hurda,ara,uretimBitir){
        this.saglamBtn = saglam
        this.hurdaBtn = hurda
        this.araBtn = ara
        this.uretimBitirBtn = uretimBitir
      },

      uretimBasla(uretimNo){
        console.log(uretimNo)
        const veriler = {
          "machine":this.makine,
          "order_id" : uretimNo
        }
        
        axios
          .post( this.$hostname + "/nodered/startOderByMachine",veriler)
          .then(response => {
            this.kalanUrun = this.uretimEmri[2]
            this.uygulamaBaslangic(false,false,true)
            this.uretimBtnKontrol(true,true,true,true)
          })
          .catch(error => {
            this.errors.push(error);
          })

      },

      uretimEmriOnayla(){
        var veri = document.getElementById('isEmri').value
        this.uretimEmri = veri.split(",")
        console.log(this.uretimEmri)
        this.uygulamaBaslangic(false,true,false);
      },

      uygulamaBaslangic(alanIsEmri, alanUretimBasla, alanUretimTakip ){
        this.alanIsEmri = alanIsEmri
        this.alanUretimBasla = alanUretimBasla
        this.alanUretimTakip = alanUretimTakip
        this.isEmri = []
        this.siparisGetir()
      },

      makineGetir(){
        this.makine = localStorage.makine
        console.log(this.makine)
        
      },

      makineDurumuGetir() {
        const stateMakine = {"machine":this.makine}
        axios
          .post( this.$hostname + "/nodered/checkMachineState",stateMakine)
          .then(response => {
            this.makineDurumu = response.data
            
          })
          .catch(error => {
            this.errors.push(error);
          });
      },

      siparisGetir() {
        const stateMakine = {"machine":this.makine}
        axios
          .post( this.$hostname + "/nodered/orderSelectbyMachine",stateMakine)
          .then(response => {
            var uzunluk = response.data.length
            for (var x = 0; x < uzunluk; x = x + 1){
              console.log(response.data[x])
              this.isEmri.push(response.data[x])
            }
          })
          .catch(error => {
            this.errors.push(error);
          });
      },   
    } 
  };



</script>