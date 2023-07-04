<template>
    <div class="owl-carousel banner mb-5">
        <div v-for="{ title, description, image_url, id } in activities" :key="id" class="relative w-full">
            <img :src="image_url" alt="" class="object-cover rounded-2xl h-44 w-full laptop:h-[565px]">
            <!-- <img :src="image_url" alt="" class="object-cover rounded-2xl h-44 w-full laptop:h-[565px]"> -->
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 mb-1 laptop:text-h-1 laptop:mb-5">{{ title }}</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2 truncate">{{ description }}</p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/src/assets/img/banner/banner-2.png" alt=""
                class="object-cover rounded-2xl h-44 laptop:h-[565px] w-full">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
        <div class="relative w-full">
            <img src="/src/assets/img/banner/banner-3.png" alt=""
                class="object-cover rounded-2xl h-44 laptop:h-[565px] w-full">
            <div
                class="absolute laptop:flex laptop:flex-col laptop:justify-end laptop:pb-14 p-5 bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-none bg-opacity-60 rounded-2xl text-white laptop:px-24">
                <p class="font-bold text-16 laptop:text-h-1 laptop:mb-5">HUT 17 AGUSTUS RW 10</p>
                <p class="text-12 laptop:text-h-3 laptop:w-1/2">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselComponent',
    data() {
        return {
            activities: [],
            // activities: [
            //     {
            //         id: "2a694e27-a3ed-4d5b-ac07-bf86e62c894e",
            //         title: "Kegiatan RW 10 dalam Merayakan HUT RI yang Ke-77",
            //         description: "Perumahan Bulan Terang Utama adalah salah satu proyek perumahan sederhana, sehat dan terjangkau yang diperuntukkan untuk masyarakat berpenghasilan rendah yang ada di kota Malang. Pembangunan Perumahan Bulan Terang Utama ini dilaksanakan oleh Developer PT. Bulan Terang Utama dan perumahan ini berlokasi di JL. Ki ageng Gribig Kelurahan Madyopuro Kecamatan Kedungkandang Malang. Pembukaan lahan dimulai awal tahun 2011 dan proses pembangunan dimulai tahun 2012 ditargetkan dibangun 10.000 unit rumah diatas lahan seluas 200 Ha. Program perumahan ini mendapatkan respon yang luar biasa dari masyarakat Malang khususnya, terbukti dengan banyaknya peminat untuk memiliki rumah di Perum Bulan Terang Utama ini. Dan semenjak akhir tahun 2013 mulai banyak yang menghuni perumahan ini.\r\n\r\nAwalnya area perumahan ini ikut wilayah RW. 04 Kelurahan Madyopuro Kecamatan Kedungkandang dan sebelum terbentuknya RT di wilayah perumahan ini pada Tanggal 4 Maret 2014 dibentuklah sebuah Paguyuban Warga Perum Bulan Terang Utama yang diketuai oleh Bpk. Gunawan Multi Alam dan masih beranggotakan 60 Kepala Keluarga yang menyebar di 2 Blok yaitu Blok KR dan Blok UJ.",
            //         image: "1688227366.png",
            //         created_at: "2023-07-01T05:57:34.000000Z",
            //         updated_at: "2023-07-01T16:02:46.000000Z",
            //         image_url: "http://127.0.0.1:8000/activity/1688227366.png",
            //         categories: [
            //             {
            //                 id: "ad6af8b3-9b0f-4c21-9191-f19468eefe66",
            //                 activity_id: "2a694e27-a3ed-4d5b-ac07-bf86e62c894e",
            //                 category_id: "479a03e9-0e38-41a8-a8ab-64bdeae64e4f",
            //                 created_at: "2023-07-01T05:57:34.000000Z",
            //                 updated_at: "2023-07-01T05:57:34.000000Z",
            //                 category: {
            //                     id: "479a03e9-0e38-41a8-a8ab-64bdeae64e4f",
            //                     name: "Teknologi"
            //                 }
            //             }
            //         ]
            //     },
            //     {
            //         id: "5f81b8a3-92fe-4fb0-ae32-85c18ec6c259",
            //         title: "Kegiatan 2",
            //         description: "Desc Kegiatan 2",
            //         image: "1688315203.png",
            //         created_at: "2023-07-02T16:26:43.000000Z",
            //         updated_at: "2023-07-02T16:26:43.000000Z",
            //         image_url: "http://127.0.0.1:8000/activity/1688315203.png",
            //         categories: [
            //             {
            //                 id: "73643f09-7c05-4053-97fd-a319a0814d30",
            //                 activity_id: "5f81b8a3-92fe-4fb0-ae32-85c18ec6c259",
            //                 category_id: "2c88b8ba-fc05-4c6d-8a71-5a1dd2d09e29",
            //                 created_at: "2023-07-02T16:26:43.000000Z",
            //                 updated_at: "2023-07-02T16:26:43.000000Z",
            //                 category: {
            //                     id: "2c88b8ba-fc05-4c6d-8a71-5a1dd2d09e29",
            //                     name: "Pendidikan"
            //                 }
            //             },
            //             {
            //                 id: "f335d698-7381-4624-aaae-52640ac040cf",
            //                 activity_id: "5f81b8a3-92fe-4fb0-ae32-85c18ec6c259",
            //                 category_id: "479a03e9-0e38-41a8-a8ab-64bdeae64e4f",
            //                 created_at: "2023-07-02T16:26:43.000000Z",
            //                 updated_at: "2023-07-02T16:26:43.000000Z",
            //                 category: {
            //                     id: "479a03e9-0e38-41a8-a8ab-64bdeae64e4f",
            //                     name: "Teknologi"
            //                 }
            //             }
            //         ]
            //     },
            //     {
            //         id: "f891d3d9-8ede-4941-8954-82f240397a80",
            //         title: "Kegiatan 3",
            //         description: "desc Kegiatan 3",
            //         image: "1688315241.png",
            //         created_at: "2023-07-02T16:27:21.000000Z",
            //         updated_at: "2023-07-02T16:27:21.000000Z",
            //         image_url: "http://127.0.0.1:8000/activity/1688315241.png",
            //         categories: [
            //             {
            //                 id: "975975ee-7d97-42c0-9ab6-23053ec53e9f",
            //                 activity_id: "f891d3d9-8ede-4941-8954-82f240397a80",
            //                 category_id: "2c88b8ba-fc05-4c6d-8a71-5a1dd2d09e29",
            //                 created_at: "2023-07-02T16:27:21.000000Z",
            //                 updated_at: "2023-07-02T16:27:21.000000Z",
            //                 category: {
            //                     id: "2c88b8ba-fc05-4c6d-8a71-5a1dd2d09e29",
            //                     name: "Pendidikan"
            //                 }
            //             }
            //         ]
            //     }
            // ],
            options: {
                center: true,
                items: 1.2,
                loop: true,
                margin: 7,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
            }
        }
    },
    methods: {
        async getActivities() {
            await this.axios.get('activity').then(response => {
                this.activities = response.data.data;
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                if (window.innerWidth < 768) {
                    this.options.loop = true
                    this.options.items = 1.2;
                } else {
                    this.options.items = 1.3;
                    this.options.margin = 16;
                }
                // eslint-disable-next-line no-undef
                $(".owl-carousel.banner").owlCarousel(this.options);
            })
        }
    },
    mounted() {
        this.getActivities();

    }
}
</script>

<style></style>