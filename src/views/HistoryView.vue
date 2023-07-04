<template>
  <div class="laptop:px-40">
    <!--Breadcrumb-->
    <nav class="w-full rounded-md px-6 mb-4 text-10 laptop:text-16">
      <ol class="list-reset flex">
        <li>
          <a href="#"
            class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Beranda</a>
        </li>
        <li>
          <span class="mx-2 text-neutral-500">/</span>
        </li>
        <li>
          <a href="#"
            class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Tentang
            Kami</a>
        </li>
        <li>
          <span class="mx-2 text-neutral-500">/</span>
        </li>
        <li class="text-primary">Sejarah</li>
      </ol>
    </nav>
    <p class="font-bold text-16 px-6 mb-4 laptop:text-40 laptop:mb-12">Sejarah Terbentuknya RW 10, Bandung ....</p>

    <img :src="history.photo_url" alt="history" class="mb-10 w-full">
    <p class="text-12 px-6 opacity-90 tracking-wide mb-14 laptop:text-24">
      Perumahan Bulan Terang Utama adalah salah satu proyek perumahan sederhana, sehat dan terjangkau yang diperuntukkan
      untuk masyarakat berpenghasilan rendah yang ada di kota Malang. Pembangunan Perumahan Bulan Terang Utama ini
      dilaksanakan oleh Developer PT. Bulan Terang Utama dan perumahan ini berlokasi di JL. Ki ageng Gribig Kelurahan
      Madyopuro Kecamatan Kedungkandang Malang. Pembukaan lahan dimulai awal tahun 2011 dan proses pembangunan dimulai
      tahun 2012 ditargetkan dibangun 10.000 unit rumah diatas lahan seluas 200 Ha. Program perumahan ini mendapatkan
      respon yang luar biasa dari masyarakat Malang khususnya, terbukti dengan banyaknya peminat untuk memiliki rumah di
      Perum Bulan Terang Utama ini. Dan semenjak akhir tahun 2013 mulai banyak yang menghuni perumahan ini.
      <br>
      <br>
      Awalnya area perumahan ini ikut wilayah RW. 04 Kelurahan Madyopuro Kecamatan Kedungkandang dan sebelum terbentuknya
      RT di wilayah perumahan ini pada Tanggal 4 Maret 2014 dibentuklah sebuah Paguyuban Warga Perum Bulan Terang Utama
      yang diketuai oleh Bpk. Gunawan Multi Alam dan masih beranggotakan 60 Kepala Keluarga yang menyebar di 2 Blok yaitu
      Blok KR dan Blok UJ.
      <br>
      <br>
      Karena semakin bertambahnya penghuni di Perum Bulan Terang Utama ini dan mengingat dibutuhkannya kepastian
      administrasi bagi warga maka segeralah dibentuk kepengurusan RT yang berada dibawah lingkungan RW. 04. Pada tanggal
      25 Mei 2014 dilaksanakan pemilihan Ketua RT. 07 yang membawahi Blok KR dan Ketua RT. 08 yang membawahi Blok UJ dan
      masing-masing wilayah RT memiliki warga sejumlah 60 KK. Waktu itu terpilih Ketua RT. 07 yaitu Joko Sampurno dan
      Ketua RT. 08 yaitu Emik Gandamana.
      <br>
      <br>
      Dalam waktu beberapa bulan saja jumlah warga di masing-masing RT semakin bertambah pesat, dalam 6 bulan berjalan di
      wilayah RT. 07 sudah mencapai 260 KK dan di RT. 08 mencapai 257 KK. Sehubungan dengan hal tersebut dan melihat
      kondisi yang ada dirasa kinerja pengurus RT sudah Overload dan tidak efektif lagi karena satu RT saja harus
      menangani 250 KK lebih dan cakupan wilayahnya yang cukup luas, untuk RT. 07 membawahi 23 blok dan RT. 08 membawahi
      21 blok. Melihat kondisi tersebut maka perlu segera dilakukan pemekaran RT. Karena di wilayah Perumahan Bulan Terang
      Utama sesuai aturan perundang-undangan yang berlaku sudah memenuhi syarat untuk dibentuknya 2 wilayah RW, dari
      masing-masing wilayah yaitu Blok KR dan Blok UJ dan setelah dilakukan koordinasi dan musyawarah dengan pihak RW dan
      kelurahan serta diperkuat oleh Walikota Malang melalui forum Temu Warga di Kelurahan Madyopuro yang mengijinkan
      untuk dilakukan Pemekaran RT dan RW di Perum Bulan Terang Utama, maka setelah melalui persiapan yang matang pada
      Hari Minggu, Tanggal 6 Desember 2016 dilakukan Proses Pemilihan Ketua RT dan RW di masing-masing wilayah secara
      serempak dan terbentuklah RW. 16 di wilayah Blok KR yang membawahi 8 RT dan RW. 17 di Blok UJ yang membawahi
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutUsView',
  data() {
    return {
      history: ''
    }
  },
  methods: {
    getHistory() {
      this.axios.get('history').then(response => {
        this.history = response.data.data;
        console.log(response.data.data);
      }).catch(error => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getHistory();
  }
}
</script>

<style></style>