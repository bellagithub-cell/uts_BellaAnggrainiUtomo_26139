import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 // kita buat datanya, karena private harus kasih function
 arrimage = [];

 private storage: Storage[] = [{
  id: 's1',
  imageUrl: ['https://arx.co.id/wp-content/uploads/sites/2/2019/02/ryzen-5-logo.jpg',
  'https://www.powerplanetonline.com/cdnassets/procesador_amd_ryzen_5_3600_02_ad_l.jpg'],
  merek: 'AMD Ryzen',
  model: '5950X',
  baseclock: '3.4 GHz',
  boostclock: '4.9GHz',
  core: 16,
  thread: 32,
  harga: 35000000,
  stok: 20,
  speed: null,
  ukuran: null,
  processor: null,
  chipset: null,
  category: 'CPU',
},
{
  id: 's2',
  imageUrl: ['https://images-na.ssl-images-amazon.com/images/I/51GjnJrTWhL._AC_SL1221_.jpg'],
  merek: 'AMD RYZEN',
  model: '36000XT',
  baseclock: '3.8 GHz',
  boostclock: '4.5 GHz',
  core: 6,
  thread: 12,
  harga: 35000000,
  stok: 10,
  speed: null,
  ukuran: null,
  processor: null,
  chipset: null,
  category: 'CPU',
},
{
  id: 's3',
  imageUrl: ['https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356277_sd.jpg'],
  merek: 'AMD RYZEN',
  model: '5950X',
  baseclock: '3.4 GHz',
  boostclock: '4.9 GHz',
  core: 16,
  thread: 32,
  harga: 52430000,
  stok: 9,
  speed: null,
  ukuran: null,
  processor: null,
  chipset: null,
  category: 'CPU',
},
{
  id: 's4',
  imageUrl: ['https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-2649347/v-gen_v-gen-pc21300-2666mhz-sodimm-memory-ram--16gb--ddr4-_full02.jpg'],
  merek: 'V-GEN',
  model: 'DDR4',
  baseclock: null,
  boostclock: null,
  core: null,
  thread: null,
  harga: 780000,
  stok: 10,
  speed: 278,
  ukuran: '4 GB',
  processor: null,
  chipset: null,
  category: 'RAM',
},
{
  id: 's5',
  imageUrl: ['https://computory.com/wp-content/uploads/2019/02/fungsi-gpu-1200x675.jpg', 'https://cdn.wccftech.com/wp-content/uploads/2019/07/GeForce_Super-2080S-4_1561506665-Custom-1.jpg'],
  merek: 'ASD',
  model: 'GPU Minyak gosok',
  baseclock: null,
  boostclock: null,
  core: null,
  thread: null,
  harga: 231378,
  stok: 9,
  speed: null,
  ukuran: null,
  processor: null,
  chipset: null,
  category: 'GPU',
},
{
  id: 's6',
  imageUrl: ['https://www.extremetech.com/wp-content/uploads/2017/06/P106-6G-640x353.jpg', 'https://www.amd.com/system/files/2019-10/312735-ryzen9-generic-water-cooler-1260x709.jpg'],
  merek: 'GeForce',
  model: 'GTX 760',
  baseclock: null,
  boostclock: null,
  core: null,
  thread: null,
  harga: 231378,
  stok: 9,
  speed: null,
  ukuran: null,
  processor: null,
  chipset: null,
  category: 'GPU',
},
{
  id: 's7',
  imageUrl: ['https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL._SX466_.jpg'],
  merek: 'AMD ',
  model: 'X570 ATX',
  baseclock: null,
  boostclock: null,
  core: null,
  thread: null,
  harga: 231378,
  stok: 9,
  speed: null,
  ukuran: null,
  processor: 'I11',
  chipset: '7',
  category: 'Motherboard',
}];

  constructor(
    private toastController: ToastController,
  ) { }

  getAllStorage(){
    return this.storage = this.storage.filter(stock => {
      return stock.stok !== 0;
    });
    // return [...this.storage];
  }

  getStorage(storageId: string){
    return {...this.storage.find( str => {
      return str.id === storageId;
    })};
  }

  async presentToastadd() {
    const toast = await this.toastController.create({
      message: 'Storage dibuat',
      duration: 3000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }

  async presentToastedit() {
    const toast = await this.toastController.create({
      message: 'Storage diubah',
      duration: 3000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }
  
  data: number = this.storage.length+1;
  addContact(form){
    var arrimage = form.value.image.split(",");
    // console.log(arrimage);
    this.storage.push({
      id: 's' + this.data,
      imageUrl: arrimage,
      merek: form.value.merek,
      model: form.value.model,
      baseclock: form.value.baseclock,
      boostclock: form.value.boostclock,
      core: form.value.core,
      thread: form.value.thread,
      harga: form.value.harga,
      stok: form.value.stock,
      speed: form.value.speed,
      ukuran: form.value.ukuran,
      processor: form.value.processor,
      chipset: form.value.chipset,
      category: form.value.jenis,
    });
    this.data++;
  }


  EditContact(form){
    console.log(form.value.image);
    for(var i = 0; i < this.storage.length; i++){
      if(this.storage[i].id == form.value.id){
        this.storage[i].id = form.value.id;
        this.storage[i].imageUrl = form.value.image.split(",");
        this.storage[i].merek = form.value.merek;
        this.storage[i].model = form.value.model;
        this.storage[i].baseclock = form.value.baseclock;
        this.storage[i].boostclock = form.value.boostclock;
        this.storage[i].core = form.value.core;
        this.storage[i].thread = form.value.thread;
        this.storage[i].harga = form.value.harga;
        this.storage[i].stok = form.value.stock;
        this.storage[i].speed = form.value.speed;
        this.storage[i].ukuran = form.value.ukuran;
        this.storage[i].processor = form.value.processor;
        this.storage[i].chipset = form.value.chipset;
        this.storage[i].category = form.value.jenis;
      }
    }
  }



  // function untuk delete detail
  deleteStorage(storageId: string){
    console.log("Storage masuk ke appservice" + storageId);
    this.storage = this.storage.filter(str => {
      return str.id !== storageId;
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Storage dihapus',
      duration: 3000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }

  deleteMultiple(list){
    console.log(list);
    for(var i = 0; i < this.storage.length; i++){
      console.log("loop 1");
      for(var j = 0; j < list.length; j++){
        if(this.storage[i].id === list[j]){
          console.log("ora ada");
          this.storage = this.storage.filter(str => {
            return str.id !== list[j];
          });
        }
      }
    }
  }
}
