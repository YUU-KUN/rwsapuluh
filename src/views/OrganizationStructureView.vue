<template>
    <div class="laptop:px-40 mb-40">
        <!--Breadcrumb-->
        <nav class="w-full rounded-md px-6 mb-4 text-10 laptop:text-16 laptop:mb-16">
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
                        class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
                        Layanan
                    </a>
                </li>
                <li>
                    <span class="mx-2 text-neutral-500">/</span>
                </li>
                <li class="text-primary">Struktur Organisasi</li>
            </ol>
        </nav>
        <div class="flex flex-col items-center justify-center">
            <div class="text-center bg-white rounded-lg border-t-8 border-t-primary px-12 py-11 w-[290px]">
                <p class="font-semibold text-20 mb-2 truncate">{{ ketua }}</p>
                <p class="font-semibold text-[#878787] text-16 truncate">Ketua RW 10</p>
            </div>
            <div class="flex items-center justify-center w-full">
                <div class="text-center bg-white rounded-lg border-t-8 border-t-primary px-12 py-11 opacity-0 w-[290px]"></div>
                <div class="w-1 h-[447px]"></div>
                <div class="w-[105px] h-1"></div>

                <div class="w-1 h-[447px] bg-[#B7B7B7]"></div>
                <div class="w-[105px] h-1 bg-[#B7B7B7]"></div>
                <div class="text-center bg-white rounded-lg border-t-8 border-t-primary px-12 py-11 w-[290px]">
                    <p class="font-semibold text-20 mb-2 truncate">{{ wakil_ketua }}</p>
                    <p class="font-semibold text-[#878787] text-16 truncate">Wakil Ketua RW 10</p>
                </div>
            </div>
            <div class="border-4 border-b-0 border-[#B7B7B7] w-[490px] h-[127px]"></div>
            <div class="flex justify-between items-center w-[783px]">
                <div class="text-center bg-white rounded-lg border-t-8 border-t-primary px-12 py-11 w-[290px]">
                    <p class="font-semibold text-20 mb-2 truncate">{{ sekretaris }}</p>
                    <p class="font-semibold text-[#878787] text-16 truncate">Sekretaris RW 10</p>
                </div>
                <div class="text-center bg-white rounded-lg border-t-8 border-t-primary px-12 py-11 w-[290px]">
                    <p class="font-semibold text-20 mb-2 truncate">{{ bendahara }}</p>
                    <p class="font-semibold text-[#878787] text-16 truncate">Bendahara RW 10</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AboutUsView',
    data() {
        return {
            structure: '',
            ketua: '',
            wakil_ketua: '',
            sekretaris: '',
            bendahara: '',
        }
    },
    methods: {
        getStructure() {
            this.axios.get('organization').then(response => {
                this.structure = response.data.data;
                this.ketua = this.structure.find(element => element.position == "Ketua RW 10") ? this.structure.find(element => element.position == "Ketua RW 10").name : '';
                this.wakil_ketua = this.structure.find(element => element.position == "Wakil Ketua RW 10") ? this.structure.find(element => element.position == "Wakil Ketua RW 10").name : '';
                this.sekretaris = this.structure.find(element => element.position == "Sekretaris") ? this.structure.find(element => element.position == "Sekretaris").name : '';
                this.bendahara = this.structure.find(element => element.position == "Bendahara") ? this.structure.find(element => element.position == "Bendahara").name : '';
                
                // this.ketua = this.structure.find(element => element.position.includes("Ketua")) ? this.structure.find(element => element.position.includes("Ketua")).name : '';
                // this.wakil_ketua = this.structure.find(element => element.position.includes("Wakil Ketua RW 10") ? element.position.includes("Wakil Ketua RW 10").name : '');
                // this.sekretaris = this.structure.find(element => element.position.includes("Sekretaris")) ? this.structure.find(element => element.position.includes("Sekretaris")).name : '';
                // this.bendahara = this.structure.find(element => element.position.includes("Bendahara")) ? this.structure.find(element => element.position.includes("Bendahara")).name : '';
                console.log(this.structure);
            }).catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getStructure();
    }
}
</script>
  
<style></style>