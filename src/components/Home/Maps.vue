<template>
    <div>
        <div id="map" class="h-[418px] rounded-[20px] drop-shadow px-6 mb-6"></div>
        <div class="flex justify-center items-center bg-white rounded-2xl px-6 py-4">
            <img src="/assets/icons/maps-icon.png" alt="maps-icon" class="mr-5">
            <p class="font-semibold text-12 laptop:text-18">RWSapuluh Bojongsoang, Kab. Bandung</p>
        </div>
    </div>
</template>

<script>
import L from 'leaflet';
export default {
    name: 'MapsComponent',
    data() {
        return {
            coordinates: [-6.9714715, 107.6438126],
            latitude: '',
            longitude: ''
        }
    },
    methods: {
        onMarkerClick() {
            window.open(`https://www.google.com/maps/search/?api=1&query=${this.latitude},${this.longitude}`, '_blank');
        }
    },
    mounted() {
        this.latitude = this.coordinates[0];
        this.longitude = this.coordinates[1];

        var map = L.map("map", {
            attributionControl: false,
            center: [this.latitude, this.longitude, 12],
            zoom: 15,
        });

        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
        // Note the difference in the "lyrs" parameter in the URL:
        // Hybrid: s, h;
        // Satellite: s;
        // Streets: m;
        // Terrain: p;

        L.marker(this.coordinates).addTo(map)
            .bindPopup('RW Sapuluh Cipagalo, Bojongsoang, Kab. Bandung')
            .openPopup()
            .on('click', this.onMarkerClick);
    }
}
</script>

<style></style>