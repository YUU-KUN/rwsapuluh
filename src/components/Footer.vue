<template>
    <div class="bg-primary-7 py-12 px-6 laptop:py-24 laptop:px-36">
        <div class="mb-10 laptop:mb-20 laptop:grid grid-cols-2">
            <div class="flex flex-col items-start justify-start pr-20">
                <p class="text-24 font-extrabold text-white mb-4">RW<span class="text-primary-2 ">Sapuluh</span></p>
                <p class="font-medium text-16 text-white opacity-60 mb-6">Media Informasi mengenai kegiatan apa saja yang ada di
                    dalam rukun warga nomor 10 serta visi dan misi nya dan dapat sebagai sarana untuk menyampaikan keluhan.</p>
                <div class="flex flex-col items-start justify-center w-1/2 laptop:w-1/3 mb-12">
                    <p class="text-12 font-bold opacity-60 text-white mb-6">INFORMASI SOSIAL MEDIA</p>
                    <div class="flex justify-between items-center w-full">
                        <img src="/src/assets/icons/facebook.png" alt="facebook">
                        <img src="/src/assets/icons/twitter.png" alt="twitter">
                        <img src="/src/assets/icons/instagram.png" alt="instagram">
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div class="col-span-1 w-full">
                    <p class="uppercase text-12 font-bold opacity-60 text-white mb-6">Quick Links</p>
                    <ul>
                        <li class="font-bold text-white text-12 mb-4">
                            Visi
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            Misi
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            Prestasi
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            Blog
                        </li>
                        <li class="font-bold text-white text-12 mb-4">
                            FAQs
                        </li>
                    </ul>
                </div>
                <div class="col-span-2 w-full">
                    <p class="uppercase text-12 font-bold opacity-60 text-white mb-6">Contact & Information</p>
                    <div class="flex items-start justify-start mb-4">
                        <img src="/src/assets/icons/phone-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Nomor Telefon</p>
                            <p class="text-16 font-bold text-white">+6285893164214</p>
                        </div>
                    </div>
                    <div class="flex items-start justify-start mb-4">
                        <img src="/src/assets/icons/phone-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Buka Jam</p>
                            <p class="text-16 font-bold text-white">09:00 AM - 18:00 PM</p>
                        </div>
                    </div>
                    <div class="flex items-start justify-start mb-4">
                        <img src="/src/assets/icons/phone-icon.png" alt="phone-icon" class="mr-4">
                        <div>
                            <p class="text-12 font-bold opacity-60 text-white mb-1">Alamat Desa</p>
                            <p class="text-16 font-bold text-white">RWSapuluh Bojongsoang, Kab. Bandung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-12 laptop:text-16 font-medium text-white opacity-60 text-center">©Tim Abdimas Fakultas Informatika, Universitas Telkom</p>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style></style>