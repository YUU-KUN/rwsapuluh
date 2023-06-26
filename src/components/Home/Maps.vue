<template>
    <div>
        <div id="map" class="h-[418px] rounded-[20px] drop-shadow px-6 mb-6"></div>
        <div class="flex justify-center items-center bg-white rounded-2xl px-6 py-4">
            <img src="/src/assets/icons/maps-icon.png" alt="maps-icon" class="mr-5">
            <p class="font-semibold text-12 laptop:text-18">RWSapuluh Bojongsoang, Kab. Bandung</p>
        </div>
    </div>
</template>

<script>
import L from 'leaflet';
export default {
    name: 'MapsComponent',
    mounted() {
        var map = L.map("map", {
            center: [-6.9714715, 107.6438126, 12],
            zoom: 15,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([-6.9714715, 107.6438126]).addTo(map)
            // .bindPopup('Tempat RW')
            .openPopup();
    }
}
</script>

<style></style>