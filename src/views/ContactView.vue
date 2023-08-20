<template>
    <div class="px-6 laptop:px-40">
        <!-- Breadcrumb -->
        <nav class="w-full rounded-md mb-4 text-10 laptop:text-16">
            <ol class="list-reset flex">
                <li>
                    <a href="#"
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">Beranda</a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li class="text-primary">Kontak Kami</li>
            </ol>
        </nav>
        <div class="grid grid-cols-1 laptop:grid-cols-2 gap-16 mb-24">
            <div class="hidden laptop:block">
                <div id="map" class="h-[418px] rounded-[20px] drop-shadow px-6 mb-6"></div>
                <div class="flex justify-center items-center bg-white rounded-2xl px-6 py-4">
                    <img src="/assets/icons/maps-icon.png" alt="maps-icon" class="mr-5">
                    <p class="font-semibold text-12 laptop:text-18">RWSapuluh Bojongsoang, Kab. Bandung</p>
                </div>
            </div>
            <div class="text-left mb-6">
                <p class="font-bold text-[30px] mb-7 laptop:text-h-1">Kontak Kami</p>
                <p class="opacity-60 mb-6 text-12 laptop:text-h-4 laptop:mb-14">Kami akan sangat senang mendengar pendapatmu
                </p>
                <div class="laptop:grid laptop:grid-cols-2 laptop:gap-6 mb-6">
                    <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
                        <label class="font-bold opacity-60 mb-2" for="name">Nama <span>*</span></label>
                        <input type="text" id="name"
                            class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl"
                            placeholder="Enter your name..." v-model="name">
                    </div>
                    <!-- <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
                        <label class="font-bold opacity-60 mb-2" for="email">Email <span>*</span></label>
                        <input type="email" id="email"
                            class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl"
                            placeholder="Your email address..." v-model="email">
                    </div>
                    <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
                        <label class="font-bold opacity-60 mb-2" for="subject">Subject <span>*</span></label>
                        <input type="text" id="subject"
                            class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl"
                            placeholder="Enter your subject..." v-model="subject">
                    </div> -->
                    <div class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0">
                        <label class="font-bold opacity-60 mb-2" for="phone">Nomor Telepon <span>*</span></label>
                        <input type="phone" id="phone"
                            class="bg-white py-3 px-4 w-full rounded-lg laptop:px-4 laptop:py-5 laptop:rounded-2xl"
                            placeholder="Enter yout mobile phone..." v-model="phone">
                    </div>
                    <div
                        class="flex flex-col items-start justify-center w-full text-12 mb-4 laptop:mb-0 laptop:col-span-2 laptop:rounded-2xl">
                        <label class="font-bold opacity-60 mb-2" for="message">Pesan <span>*</span></label>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your messages..."
                            class="bg-white py-3 px-4 w-full rounded-lg" v-model="message"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-end">
                    <button @click="sendComplaints" type="button"
                        class="bg-primary rounded-lg py-3 px-9 text-white font-bold text-12 laptop:py-5 px-auto laptop:text-h-3 laptop:rounded-2xl">
                        Kirim Pesan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import L from 'leaflet';
export default {
    name: 'ComplaintsComponent',
    data() {
        return {
            name: '',
            // email: '',
            // subject: '',
            contact: '',
            phone: '',
            message: '',
            whatsapp_url: '',
            coordinates: [-6.9714715, 107.6438126],
            latitude: '',
            longitude: ''
        }
    },
    methods: {
        formatPhone() {
            if (this.phone.charAt(0) == '0') {
                this.phone = this.phone.replace('0', '+62')
            } else if (this.phone.charAt(0) == '8') {
                this.phone = this.phone.replace('8', '+628')
            }
        },
        getContact() {
            this.axios.get('contact').then(response => {
                this.contact = response.data.data
            }).catch(error => {
                console.log(error)
            })
        },
        sendComplaints() {
            if (this.name == '' || this.phone == '' || this.message == '') {
                alert('Mohon lengkapi data terlebih dahulu')
            } else {
                this.formatPhone()
                const data = {
                    name: this.name,
                    phone: this.phone,
                    message: this.message
                }
                this.axios.post('message', data).then(() => {
                    // alert('Pesan berhasil dikirim')
                    const formattedMessage = `Nama: ${this.name}%0ANomor Telepon: ${this.phone}%0APesan: ${this.message}`;
                    // const formattedMessage = `Nama: ${this.name}%0AEmail: ${this.email}%0ASubject: ${this.subject}%0APhone: ${this.phone}%0AMessage: ${this.message}`;
                    this.whatsapp_url = `https://wa.me/${this.contact.phone}?text=${formattedMessage}`;
                    window.open(this.whatsapp_url, '_blank')

                    // then reset form
                    this.name = ''
                    this.phone = ''
                    this.message = ''

                }).catch(() => {
                    alert('Pesan gagal dikirim')
                })
            }
        },
        onMarkerClick() {
            window.open(`https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`, '_blank');
        }
    },
    mounted() {
        this.getContact()
        this.latitude = this.coordinates[0]
        this.longitude = this.coordinates[1]

        var map = L.map("map", {
            attributionControl: false,
            center: [this.latitude, this.longitude, 12],
            zoom: 15,
        });

        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);

        L.marker(this.coordinates).addTo(map)
            // .bindPopup('Tempat RW')  
            .openPopup()
            .on('click', this.onMarkerClick)
    }
}
</script>
  
<style></style>