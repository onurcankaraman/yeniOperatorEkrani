<script setup>
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
</script>

<template>
  <div class="container align-items-start py-5 h-10">
    <div class="row d-flex justify-content-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div class="row ps-1 ">
            <div class="col"><label class="h2 text-muted">{{ application1 }} </label></div>
        </div>

        <div class="container mt-2 align-self-center" style = "height:100%">

          <div class="row mt-2 align-items-center">
            <div class="col "><label class="h5 text-primary">{{ labelMachine }} </label></div>
            <div class="col "><label class="h2 text-muted" id="makine">{{makine}}</label></div>
          </div>

          <div class="row mt-2 pb-2 align-items-center border-bottom border-2 border-dark">
            <div class="col "><label class="h5 text-primary">{{labelMachineStatus}} </label></div>
            <div class="col "><label class="h2 text-muted" id="makineDurumu">{{makineDurumu.state}}</label></div>
          </div>

          <div class="row mt-2 align-items-center" v-if="alanIsEmri" id="alanIsEmri">
            <div class="col  w-100">
              <div class="row"> <label class="h5 text-muted">{{labelSelectOrder}} </label> </div>
              <div class="w-100 mt-2"></div>
              <div class="row mt-2"> 
                  <select id="isEmri" class="form-control form-select-m">
                    <option disabled value="">{{labelSelectOrder}}</option>
                    <option v-for="data in isEmri" :value ="data">{{data[1]}}</option>
                  </select>
              </div>
              <div class="row mt-2 pb-5 border-bottom border-2 border-gray"> 
                <button type="button" @click="uretimEmriOnayla" class="btn btn-warning w-100 h-100 w-100 h-100">{{labelOrderDetail}}</button>
              </div>
            </div>
          </div>

          <div class="row mt-3 aling-items-center" v-if="alanUretimBasla" id="alanUretimBasla">
            <div class="col w-100">
              <div class="row mt-2 aling-items-center">
                <div class="col w-100" ><label class="h5 text-primary">{{order}}</label></div>
                <div class="col w-100" ><label class="h5 - text-success">{{uretimEmri[1]}}</label></div>
              </div>

              <div class="row mt-2 aling-items-center">
                <div class="col w-100" ><label class="h5 text-primary">{{orderNumber}}</label></div>
                <div class="col w-100" ><label class="h5 text-success">{{uretimEmri[0]}}</label></div>
              </div>

              <div class="row mt-2 aling-items-center">
                <div class="col w-100" ><label class="h5 text-primary">{{pieces}}</label></div>
                <div class="col w-100" ><label class="h5 text-success">{{uretimEmri[2]}}</label></div>
              </div>

              <div class="row mt-2 aling-items-center pb-5 border-bottom border-2 border-dark">
                <div class="col p-1"><button type="button" @click="uygulamaBaslangic(true,false,false)" class="btn btn-warning w-100 h-100 w-100 h-100">{{backButton}}</button></div>
                <div class="col p-1"><button type="button" @click="uretimBasla(uretimEmri[0])" class="btn btn-success h1 w-100 h-100 w-100 h-100">{{startOrder}}</button></div>
              </div>
            </div>
          </div>

          <div class="row mt-2" v-if="alanUretimTakip"  id="alanUretimTakip">
            <div class="col w-100">
              <div class="row mt-4" style="height: 25px;">
                <div class="col w-100" ><label class="h5 text-primary">{{ order }}</label></div>
                <div class="col w-100" ><label class="h3 text-muted">{{uretimEmri[1]}}</label></div>
              </div>
              <div class="row mt-4 pt-4 border-top border-2 border-dark" style="height: 25px;">
                <div class="col w-100" ><label class="h4 text-warning">{{target}}</label></div>
                <div class="col w-100" ><label class="h4 text-success">{{goodPart}}</label></div>
                <div class="col w-100"><label class="h4 text-danger">{{scrapPart}}</label></div>
              </div>

              <div class="row mt-5 pt-3" style="height: 50px;">
                <div class="col w-100"><label class="h3 text-warning">{{ kalanUrun }}</label></div>
                <div class="col w-100"><label class="h3 text-success">{{ saglam }}</label></div>
                <div class="col w-100"><label class="h3 text-danger">{{ hurda }}</label></div>
              </div>

              <div class="row mt-3 pt-5 border-top border-2 border-dark">
                <div class="col p-1 w-100" style="height: 75px;"><button type="button" :disabled="!saglamBtn" @click="saglam++; kalanUrun = kalanUrun - 1; adetKontrol();" class="btn btn-success w-100 h-100 w-100 h-100">{{btnGood}}</button></div>
                <div class="col p-1 w-100" style="height: 75px;"><button type="button" :disabled="!hurdaBtn" @click="hurda++;" class="btn btn-danger w-100 h-100 w-100 h-100">{{btnScrap}}</button></div>
                <div class="col p-1 w-100" style="height: 75px;"><button type="button" :disabled="!araBtn" @click="urunSay(saglam,hurda)" class="btn btn-warning w-100 h-100 w-100 h-100">{{ saveCount }}</button></div>
              </div>

              <div class="row mt-2 pb-5 border-bottom border-2 border-dark">
                <div class="col p-1 w-100" style="height: 75px;"><button type="button" :disabled="!uretimBitirBtn" @click="uretimBitir(uretimEmri[0])" class="btn btn-primary w-100 h-100 w-100 h-100">{{endOrder}}</button></div>
              </div>
            </div>
          </div>
        </div>
        Source Code <br>https://github.com/onurcankaraman/yeniOperatorEkrani
      </div>

      <div class="col-12 col-md-8 col-lg-6 col-xl-5 border-2 border-start border-dark mh-100">    
        <div class="container">
          <div class="row mt-2 align-items-center">
            <div class="col justify-items-center"><label class="h2 text-muted">{{ application2 }} </label></div>
          </div>
          <div class="row mt-2">
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-success w-100 h-100" @click="setState(durus[0][1])">{{ durus[0][0] }}</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-primary w-100 h-100" @click="setState(durus[1][1])">{{ durus[1][0] }}</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-warning w-100 h-100" @click="setState(durus[2][1])">{{ durus[2][0] }}</button></div>
            <div class="w-100 mt-2"></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-danger w-100 h-100" @click="setState(durus[3][1])">{{ durus[3][0] }}</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-danger w-100 h-100" @click="setState(durus[4][1])" >{{ durus[4][0] }}</button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-danger w-100 h-100" @click="setState(durus[5][1])" >{{ durus[5][0] }}</button></div>
            <div class="w-100 mt-2"></div>
            <div class="col" style="height: 150px;"><button type="button" v-bind:hidden="true" class="btn btn-secondary w-100 h-100"></button></div>
            <div class="col" style="height: 150px;"><button type="button" class="btn btn-info w-100 h-100" @click="setState(durus[6][1])" :value ="durus[6][1]">{{ durus[6][0] }}</button></div>
            <div class="col" style="height: 150px;"><button type="button" v-bind:hidden="true" class="btn btn-secondary w-100 h-100"></button></div>
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
      this.durus = this.$duruslar[1];

      this.application1 = "Üretim Ekranı"
      this.application2 = "Duruş Giriş Ekranı"
      this.labelMachine = this.$descriptionLanguage[this.$languageCode].machine;
      this.labelMachineStatus = this.$descriptionLanguage[this.$languageCode].machineStatus;
      this.labelSelectOrder = this.$descriptionLanguage[this.$languageCode].selectOrder;
      this.labelOrderDetail = this.$descriptionLanguage[this.$languageCode].orderDetails;
      this.order = this.$descriptionLanguage[this.$languageCode].order;
      this.orderNumber = this.$descriptionLanguage[this.$languageCode].orderNumber;
      this.pieces = this.$descriptionLanguage[this.$languageCode].pieces;
      this.backButton = this.$butonLanguage[this.$languageCode].back;
      this.startOrder = this.$butonLanguage[this.$languageCode].startOrder;
      this.target = this.$descriptionLanguage[this.$languageCode].targetPieces;
      this.goodPart =  this.$descriptionLanguage[this.$languageCode].goodPart;
      this.scrapPart =  this.$descriptionLanguage[this.$languageCode].scrapPart;
      this.btnGood = this.$butonLanguage[this.$languageCode].good;
      this.btnScrap = this.$butonLanguage[this.$languageCode].scrap;
      this.saveCount = this.$butonLanguage[this.$languageCode].saveCount;
      this.endOrder = this.$butonLanguage[this.$languageCode].endOrder;


    },
    data() {
      return {
        durus : [],
        //MACHİNE DATAS
        makine: "",
        makineDurumu:"",


        //APPLICATION CONTROL DATAS
        alanIsEmri: false,
        alanUretimTakip : false,
        alanUretimBasla: false,
        errors:[],

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
        hurda:0,

        
      };
    },
    methods: {

      toast (mesaj){
      
       

      },

      setState(state){

        const veriler = {
          "machine":this.makine,
          "state" : state
        }

        

        axios
          .post( this.$hostname + "/nodered/setStatebyMachine",veriler)
          .then(response => {
            createToast('İşlem Başarılı: Makine Durumu ' + state +" olarak güncellendi.",
            {
            position: 'top-right',
            type: 'default',
            transition: 'zoom',
            })
          })
          .catch(error => {
            this.errors.push(error);
          })
        
      },

      uretimBitir(uretimNo){
        const veriler = {
          "machine":this.makine,
          "order_id" : uretimNo
        }
        
        
        axios
          .post( this.$hostname + "/nodered/endOrderByMachine",veriler)
          .then(response => {
            this.isEmri = []
            this.saglam = 0
            this.hurda = 0
            this.uretimEmri = []
            this.kalanUrun = 0
            this.uygulamaBaslangic(true,false,false)
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

      uygulamaBaslangic(alanIsEmriVal, alanUretimBaslaVal, alanUretimTakipVal ){
        this.alanIsEmri = alanIsEmriVal
        this.alanUretimBasla = alanUretimBaslaVal
        this.alanUretimTakip = alanUretimTakipVal
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