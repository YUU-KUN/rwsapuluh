<template>
  <div>
    <div class="text-left mb-6">
      <p class="font-bold text-[30px] mb-7 laptop:text-h-1">Kritik dan Saran</p>
      <p class="opacity-60 mb-6 text-12 laptop:text-h-4 laptop:mb-14">Berikan pendapatmu kepada RW 10 Cipagalo!</p>
      <div class="laptop:grid laptop:grid-cols-2 laptop:gap-6">
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
          <label class="font-bold opacity-60 mb-2" for="message">Kritik & Saran <span>*</span></label>
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter your messages..."
            class="bg-white py-3 px-4 w-full rounded-lg" v-model="message"></textarea>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <button @click="sendComplaints()"
        class="bg-primary rounded-lg py-3 px-9 text-white font-bold text-12 laptop:py-5 px-auto laptop:text-h-3 laptop:rounded-2xl">Kirim
        Pesan</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComplaintsComponent',
  data() {
    return {
      name: '',
      phone: '',
      message: '',
      contact: ''
    }
  },
  methods: {
    formatPhone() {
      if (this.phone.charAt(0) == '0') {
        this.phone = this.phone.replace('0', '+62')
      } else if (this.phone.charAt(0) == '8') {
        this.phone = this.phone.replace('8', '+628')
      } else if (this.phone.charAt(0) == '6') {
        this.phone = this.phone.replace('6', '+6')
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
        this.axios.post('complaint', data).then(() => {
          // alert('Pesan berhasil dikirim')
          const formattedMessage = `Nama: ${this.name}%0ANomor Telepon: ${this.phone}%0APesan: ${this.message}`;
          const whatsapp_url = `https://wa.me/${this.contact.phone}?text=${formattedMessage}`;
          window.open(whatsapp_url, '_blank')

          // then reset form
          this.name = '',
            this.phone = '',
            this.message = ''

        }).catch(() => {
          alert('Pesan gagal dikirim')
        })
      }
    },
  }
}
</script>

<style></style>