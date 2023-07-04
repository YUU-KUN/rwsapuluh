<template>
  <div class="px-6 laptop:px-40">
    <!-- Breadcrumb -->
    <nav class="w-full rounded-md mb-4 text-10 laptop:text-16">
      <ol class="list-reset flex">
        <li>
          <a href="#"
            class="text-neutral-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">Beranda</a>
        </li>
        <li>
          <span class="mx-2 text-neutral-500">/</span>
        </li>
        <li class="text-primary">Layanan</li>
      </ol>
    </nav>
    
    <p class="text-center font-bold text-16 mb-5 laptop:text-40 laptop:mb-12">Layanan</p>
    <div class="bg-gradient-to-r from-white via-primary to-white h-[1px] hidden laptop:block mt-7 mb-24"></div>

    <div class="flex flex-col items-center justify-center w-full mb-12">

      <div v-for="{ service, description, id } in services" :key="id" class="mb-4 w-full">
        <button class="flex items-center justify-between bg-white rounded-md py-4 px-8 w-full laptop:px-8 laptop:py-4"
          type="button" data-te-collapse-init :data-te-target="`#collapse-${id}`" data-te-ripple-init
          data-te-ripple-color="light" aria-expanded="false" :aria-controls="`collapse-${id}`">
          <p class="text-12 laptop:text-h-4 capitalize">{{ service }}</p>
          <img src="/src/assets/icons/arrow-down.png" alt="arrow-down">
        </button>
        <div class="multi-collapse !visible hidden rounded-lg shadow-lg" data-te-collapse-item :id="`collapse-${id}`">
          <div class="block rounded-lg bg-white p-6 rounded-t-none text-12 laptop:text-h-4">
            {{ description }}
          </div>
        </div>
      </div>

    </div>

    <div class="laptop:grid laptop:grid-cols-2 laptop:mb-32">
      <div class="bg-white rounded-3xl p-4 w-[213px] h-auto mx-auto mb-10 laptop:h-[455px] laptop:w-[455px]">
        <!-- <img src="/src/assets/img/qr-code.png" alt="qr-code" class="object-cover h-full w-full"> -->
        <qrcode-vue :value="whatsapp_url" class="object-cover h-full w-full" :render-as="'svg'" />
      </div>

      <div class="mb-12 laptop:self-center">
        <p class="text-16 font-bold mb-3 laptop:text-h-1 laptop:mb-7">Kontak Kami</p>
        <p class="text-12 opacity-60 laptop:text-h-4">Hubungi kontak person kami di bawah ini untuk informasi lebih lanjut.</p>
        <p class="text-12 opacity-60 mb-6 laptop:text-h-4 capitalize font-bold">{{ contact.name }} ({{ contact.phone }})</p>
        <button @click="chatWhatsapp" class="bg-primary rounded-lg px-7 py-3 text-white font-bold text-12">Chat
          Whatsapp</button>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'ServiceView',
  components: {
    QrcodeVue
  },
  data() {
    return {
      services: [],
      contact: {},
      whatsapp_url: ''
    }
  },
  methods: {
    getServices() {
      this.axios.get('service')
        .then(res => {
          this.services = res.data.data
          console.log(this.services);
        })
        .catch(err => {
          console.log(err)
        })
    },
    getContact() {
      this.axios.get('contact').then(response => {
        this.contact = response.data.data;
        if (this.contact.phone.charAt(0) == '0') {
          this.contact.phone = this.contact.phone.replace('0', '+62')
        } else if (this.contact.phone.charAt(0) == '8') {
          this.contact.phone = this.contact.phone.replace('8', '+628')
        }
        this.whatsapp_url = `https://wa.me/${this.contact.phone}?text=Halo%20Admin%20Saya%20Ingin%20Bertanya%20Tentang%20Layanan%20Anda`
        console.log(
          response.data.data
        );
      }).catch(error => {
        console.log(error);
      })
    },
    chatWhatsapp() {
      window.open(this.whatsapp_url, '_blank')
    }
  },
  mounted() {
    this.getServices()
    this.getContact()

    // Get the elements
    // const contactDropdown = document.getElementById("contactDropdown");
    // const messageInput = document.getElementById("messageInput");
    // const sendMessageBtn = document.getElementById("sendMessageBtn");

    // Add event listener to the button
    // sendMessageBtn.addEventListener("click", function () {
    //   const nama = encodeURIComponent(namaInput.value);
    //   const email = encodeURIComponent(emailInput.value);
    //   const subject = encodeURIComponent(subjectInput.value);
    //   const phone = encodeURIComponent(phoneInput.value);
    //   const message = encodeURIComponent(messageInput.value);
    //   const formattedMessage = `Nama: ${nama}%0AEmail: ${email}%0ASubject: ${subject}%0APhone: ${phone}%0AMessage: ${message}`;
    //   if (selectedContact !== "") {
    //     const whatsappURL = `https://wa.me/+6285893164214?text=${formattedMessage}`;
    //     window.open(whatsappURL, "_blank");
    //   }
    // });
  }
}
</script>

<style></style>