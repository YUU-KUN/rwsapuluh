<template>
    <!-- <div class="min-h-screen bg-bg-white" id="tree"></div> -->
    <!-- Table Organization Structure -->
    <p class="font-bold text-16 laptop:text-24 mb-2">Struktur Organisasi</p>
    <img :src="organization_image.image_url" alt="" class="mx-auto mb-20 ">
    <table class="w-full mb-10 ">
        <tr class="w-full">
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ ketua.position }}</td>
            <td class="border border-black text-center text-16 laptop:text-24">:</td>
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ ketua.name }}</td>
        </tr>
        <tr class="w-full">
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ sekretaris.position }}</td>
            <td class="border border-black text-center text-16 laptop:text-24">:</td>
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ sekretaris.name }}</td>
        </tr>
        <tr class="w-full">
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ bendahara.position }}</td>
            <td class="border border-black text-center text-16 laptop:text-24">:</td>
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ bendahara.name }}</td>
        </tr>
        <tr class="w-full" v-for="divisi in divisi" :key="divisi.id">
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ divisi.position }}</td>
            <td class="border border-black text-center text-16 laptop:text-24">:</td>
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ divisi.name }}</td>
        </tr>
        <tr class="w-full" v-for="penasihat in penasihat" :key="penasihat.id">
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ penasihat.position }}</td>
            <td class="border border-black text-center text-16 laptop:text-24">:</td>
            <td class="border border-black text-left px-6 text-16 laptop:text-24">{{ penasihat.name }}</td>
        </tr>
    </table>
</template>

<!-- eslint-disable no-undef -->
<script>
export default {
    name: 'ChartView',
    data() {
        return {
            structure: '',
            ketua: '',
            sekretaris: '',
            bendahara: '',
            penasihat: [],
            divisi: [],
            organization_image: ''
        }
    },
    methods: {
        getOrganizationImage() {
            this.axios.get('organization-image').then(response => {
                console.log(response.data);
                this.organization_image = response.data.data[0]
            }).catch(error => {
                console.log(error);
            })
        },
        getStructure() {
            this.axios.get('organization').then(response => {
                this.structure = response.data.data
                this.structure.forEach(structure => {
                    if (structure.position.toLowerCase() == 'ketua') {
                        this.ketua = structure
                    } else if (structure.position.toLowerCase() == 'sekretaris') {
                        this.sekretaris = structure
                    } else if (structure.position.toLowerCase() == 'bendahara') {
                        this.bendahara = structure
                    } else if (structure.position.toLowerCase() == 'penasihat') {
                        this.penasihat.push(structure)
                    } else if (structure.position.toLowerCase().includes('divisi')) {
                        this.divisi.push(structure)
                    }
                });
            }).catch(error => {
                console.log(error);
            })
        }

        // getStructure() {
        //     this.axios.get('organization').then(response => {
        //         this.structure = response.data.data
        //         console.log(this.structure);

        //         this.ketua = this.structure.find(structure => structure.position.toLowerCase().includes('ketua'))
        //         this.sekretaris = this.structure.find(structure => structure.position.toLowerCase().includes('sekretaris'))
        //         this.bendahara = this.structure.find(structure => structure.position.toLowerCase().includes('bendahara'))

        //         this.penasihat = this.structure.filter(structure => structure.position.toLowerCase().includes('penasihat'))
        //         this.divisi = this.structure.filter(structure => structure.position.toLowerCase().includes('divisi'))

        //         console.log('divisi', this.divisi);
        //         console.log('penasihat', this.penasihat);
        //     }).catch(error => {
        //         console.log(error);
        //     }).finally(() => {

        //         OrgChart.templates.group.nodeMenuButton = '';
        //         OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
        //         OrgChart.templates.group.min.imgs = "{val}";
        //         OrgChart.templates.group.min.img_0 = "";

        //         var chart = new OrgChart(document.getElementById("tree"), {
        //             mouseScrool: OrgChart.none,
        //             template: "olivia",
        //             enableDragDrop: false,
        //             nodeBinding: {
        //                 imgs: "photo_url",
        //                 field_0: "name",
        //                 field_1: "position",
        //                 img_0: "photo_url",
        //             },
        //             tags: {
        //                 "group": {
        //                     template: "group",
        //                 },
        //                 "penasihat-group": {
        //                     min: true,
        //                     subTreeConfig: {
        //                         columns: 3
        //                     }
        //                 },
        //                 "divisi-group": {
        //                     subTreeConfig: {
        //                         columns: 2
        //                     }
        //                 },
        //             }
        //         });


        //         chart.on('click', function (sender, args) {
        //             if (args.node.tags.indexOf("group") != -1) {
        //                 if (args.node.min) {
        //                     sender.maximize(args.node.id);
        //                 }
        //                 else {
        //                     sender.minimize(args.node.id);
        //                 }
        //             }
        //             return false;
        //         });

        //         chart.on('field', function (sender, args) {
        //             if (args.node.min) {
        //                 if (args.name == "img") {
        //                     var count = args.node.stChildrenIds.length > 5 ? 5 : args.node.stChildrenIds.length;
        //                     var x = args.node.w / 2 - (count * 32) / 2;
        //                     for (var i = 0; i < count; i++) {
        //                         var data = sender.get(args.node.stChildrenIds[i]);
        //                         args.value += '<image xlink:href="' + data.img + '" x="' + (x + i * 32) + '" y="45" width="32" height="32" ></image>';
        //                     }
        //                 }
        //             }
        //         });

        //         let char_data = []

        //         // Append Penasihat
        //         if (this.penasihat.length > 0) {
        //             char_data.push({ id: "penasihat", name: "Penasihat", tags: ["penasihat-group", "group"] })
        //             this.penasihat.forEach(penasihat => {
        //                 penasihat.stpid = 'penasihat'
        //                 penasihat.photo_url = penasihat.photo != 'null' ? penasihat.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //                 console.log('penasihat', penasihat);
        //                 // const data = {
        //                 //     id: penasihat.id,
        //                 //     stpid: 'penasihat',
        //                 //     name: penasihat.name,
        //                 //     position: penasihat.position,
        //                 //     img: penasihat.photo != 'null' ? penasihat.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //                 // }
        //                 char_data.push(penasihat)
        //             });
        //         }

        //         // Append Ketua
        //         if (this.penasihat.length > 0) {
        //             this.ketua.pid = 'penasihat'
        //             this.ketua.photo_url = this.ketua.photo != 'null' ? this.ketua.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //         }
        //         char_data.push(this.ketua)

        //         // Append Sekretaris
        //         if (this.ketua && this.sekretaris) {
        //             this.sekretaris.pid = this.ketua.id
        //             this.sekretaris.photo_url = this.sekretaris.photo != 'null' ? this.sekretaris.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //         }
        //         char_data.push(this.sekretaris)

        //         // Append Bendahara
        //         if (this.ketua && this.bendahara) {
        //             this.bendahara.pid = this.ketua.id
        //             this.bendahara.photo_url = this.bendahara.photo != 'null' ? this.bendahara.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //         }
        //         char_data.push(this.bendahara)

        //         // Append Divisi
        //         if (this.divisi.length > 0 && this.ketua) {
        //             char_data.push({ id: "divisi", name: "Divisi", pid: this.ketua.id, tags: ["divisi-group", "group"] })
        //             this.divisi.forEach(divisi => {
        //                 divisi.stpid = 'divisi'
        //                 divisi.photo_url = divisi.photo != 'null' ? divisi.photo_url : 'https://cdn.balkan.app/shared/1.jpg'
        //                 char_data.push(divisi)
        //             });
        //         }

        //         chart.load(char_data)

        //         // chart.load([
        //         //     // // Penasihat
        //         //     // { id: "penasihat", name: "Penasihat", tags: ["penasihat-group", "group"] },
        //         //     // // List Penasihat
        //         //     // { id: 1, stpid: "penasihat", name: "Dr. H. Saifuddin", position: "Penasihat 1", img: "https://cdn.balkan.app/shared/1.jpg" },
        //         //     // { id: 2, stpid: "penasihat", name: "H. lip Hidajat", position: "Penasihat 2", img: "https://cdn.balkan.app/shared/anim/1.gif" },
        //         //     // { id: 3, stpid: "penasihat", name: "Imam Santoso", position: "Penasihat 3", img: "https://cdn.balkan.app/shared/4.jpg" },
        //         //     // { id: 11, stpid: "penasihat", name: "H. Atang", position: "Penasihat 4", img: "https://cdn.balkan.app/shared/2.jpg" },
        //         //     // { id: 22, stpid: "penasihat", name: "Eyang Winarto", position: "Penasihat 5", img: "https://cdn.balkan.app/shared/13.jpg" },

        //         //     // Ketua
        //         //     // { id: 4, pid: "penasihat", name: "Asep Suryadi", position: "Ketua", img: "https://cdn.balkan.app/shared/5.jpg" },
        //         //     // // Sekretaris
        //         //     // { id: 9, pid: 4, name: "Wahyu Nur Saputra", position: "Sekretaris", img: "https://cdn.balkan.app/shared/12.jpg" },
        //         //     // // Bendahara
        //         //     // { id: 10, pid: 4, name: "Dede Nurdianto", position: "Bendahara", img: "https://cdn.balkan.app/shared/12.jpg" },

        //         //     // Divisi
        //         //     // { id: "divisi", name: "", pid: 4, tags: ["divisi-group", "group"] },
        //         //     // // List Divisi
        //         //     // { id: 101, stpid: "divisi", name: "Namra", position: "Divisi Keamanan Lingkungan", img: "https://cdn.balkan.app/shared/6.jpg" },
        //         //     // { id: 111, stpid: "divisi", name: "Arif", position: "Divisi Pemuda & Olah Raga", img: "https://cdn.balkan.app/shared/7.jpg" },
        //         //     // { id: 12, stpid: "divisi", name: "Bambang Hermansyah", position: "Divisi Hubungan Masyarakat & Kerohanian", img: "https://cdn.balkan.app/shared/8.jpg" },
        //         //     // { id: 13, stpid: "divisi", name: "H. Anas", position: "Divisi Pembangunan & Infrastruktur", img: "https://cdn.balkan.app/shared/9.jpg" },
        //         // ]);
        //     })
        // }
    },
    mounted() {
        this.getStructure()
        this.getOrganizationImage()
    }
}
</script>

<style></style>