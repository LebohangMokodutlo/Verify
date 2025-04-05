<template>
  <v-container class="position-relative w-100 h-100 pa-0">
    <div class="w-100 h-100" id="map">
      Loading Map...
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

const map = ref(null);

const initMap = () => {
  if (!map.value) {
    map.value = L.map('map').setView([-26.2029, 28.0413], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value);

    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      autoComplete: true,
      autoCompleteDelay: 250,
    });

    map.value.addControl(searchControl);

    map.value.on('geosearch/showlocation', (result) => {
      const { latlng } = result.location;

      if (latlng && latlng.lat && latlng.lng) {
        setTimeout(() => {
          const bounds = L.latLngBounds(latlng, latlng);
          map.value.fitBounds(bounds);
        }, 100);
      } else {
        console.error('Invalid coordinates:', latlng);
      }
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    initMap();
  }, 100);
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  min-height: 400px; /* Ensure a minimum height */
}
</style>
