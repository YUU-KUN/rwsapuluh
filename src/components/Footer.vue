<template>
    <div class="bg-primary-7 py-12 px-6 laptop:py-24 laptop:px-36">
        <div class="mb-10 laptop:mb-20 laptop:grid grid-cols-2">
            <div class="flex flex-col items-start justify-start pr-20">
                <p class="text-24 font-extrabold text-white mb-4">RW<span class="text-primary-2 ">Sapuluh</span></p>
                <p class="font-medium text-16 text-white opacity-60 mb-6">Media Informasi mengenai kegiatan apa saja yang
                    ada di
                    dalam rukun warga nomor 10 serta visi dan misi nya dan dapat sebagai sarana untuk menyampaikan keluhan.
                </p>
                <div class="flex flex-col items-start justify-center w-1/2 laptop:w-1/3 mb-12">
                    <p class="text-12 font-bold opacity-60 text-white mb-6">INFORMASI SOSIAL MEDIA</p>
                    <div class="flex justify-between items-center w-full">
                        <div @click="redirect(facebook)" class="rounded-full w-7 h-7 flex items-center justify-center"
                            :class="facebook ? 'hover:cursor-pointer' : ''">
                            <img src="/assets/icons/facebook.png" alt="facebook" class="">
                        </div>
                        <div @click="redirect(twitter)" class="rounded-full w-7 h-7 flex items-center justify-center"
                            :class="twitter ? 'hover:cursor-pointer' : ''">
                            <img src="/assets/icons/twitter.png" alt="twitter">
                        </div>
                        <div @click="redirect(instagram)" class="rounded-full w-7 h-7 flex items-center justify-center"
                            :class="instagram ? 'hover:cursor-pointer' : ''">
                            <img src="/assets/icons/instagram.png" alt="instagram">
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div class="col-span-1 w-full">
                    <p class="uppercase text-12 font-bold opacity-60 text-white mb-6">Quick Links</p>
                    <ul>
                        <li class="font-bold text-white text-12 mb-4">
                            <a href="/#vision">Visi</a>
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            <a href="/#mission">Misi</a>
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            <router-link to="/information/achievement">Prestasi</router-link>
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            <router-link to="/information/activity">Kegiatan</router-link>
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            <router-link to="/service">Layanan</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-2 w-full">
                    <p class="uppercase text-12 font-bold opacity-60 text-white mb-6">Contact & Information</p>
                    <div class="flex items-center justify-start mb-4">
                        <img src="/assets/icons/phone-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Nomor Telefon</p>
                            <p class="text-16 font-bold text-white">{{ contact ? contact : '-' }}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start mb-4">
                        <img src="/assets/icons/work-hour-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Buka Jam</p>
                            <p class="text-16 font-bold text-white">09:00 AM - 18:00 PM</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start mb-4">
                        <img src="/assets/icons/location-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Alamat Desa</p>
                            <p class="text-16 font-bold text-white">RWSapuluh Bojongsoang, Kab. Bandung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-12 laptop:text-16 font-medium text-white opacity-60 text-center">
            ©Tim Abdimas
            <a href="https://soc.telkomuniversity.ac.id/" class="hover:text-primary" target="_blank">Fakultas Informatika</a>,
            <a href="https://telkomuniversity.ac.id/" class="hover:text-primary" target="_blank">Universitas Telkom</a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            contact: '',
            facebook: '',
            twitter: '',
            instagram: '',
        }
    },
    methods: {
        formatPhone() {
            if (this.contact.charAt(0) == '0') {
                this.contact = this.contact.replace('0', '+62')
            } else if (this.contact.charAt(0) == '8') {
                this.contact = this.contact.replace('8', '+628')
            } else if (this.contact.charAt(0) == '6') {
                this.contact = this.contact.replace('6', '+6')
            }
        },
        getContact() {
            this.axios.get('/contact').then(res => {
                if (res.data.data) {
                    this.contact = res.data.data.phone
                    this.formatPhone()
                }
            }).catch(err => {
                console.log(err)
            })
        },
        getSocialMedia() {
            this.axios.get('social-media').then(response => {
                const res = response.data.data
                this.facebook = res.find(res => res.label == 'facebook')
                this.twitter = res.find(res => res.label == 'twitter')
                this.instagram = res.find(res => res.label == 'instagram')
            }).catch(error => {
                console.log(error);
            })
        },
        redirect(media) {
            if (media) window.open(media.url, '_blank')
        }
    },
    mounted() {
        this.getContact()
        this.getSocialMedia()
    }
}
</script>

<style></style>