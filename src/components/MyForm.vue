<template>
  <div class="flex-1 p-3 flex flex-col items-center gap-3 h-screen">
    <h2 class="text-center text-2xl font-extrabold">Seguimiento Pacientes</h2>
    <p class="text-center mb-3 text-lg">
      Añade Pacientes y <span class="text-blue-700 font-bold">Adminístralos</span>
    </p>
    <AlertMessage :isError="isError" :message="message" :showAlert="showAlert" />
    <form class="flex flex-col gap-5 w-full md:w-[75%] p-5 bg-white rounded shadow-lg">
      <div class="flex flex-col gap-1">
        <label class="uppercase text-gray-600 font-bold text-sm" for="nombre">Nombre Mascota</label>
        <input
          class="p-2 border border-gray-300 rounded focus:border-blue-600 focus:outline-none focus:ring-2"
          id="nombre"
          placeholder="Nombre de la Mascota"
          type="text"
          :value="patient.patient_name"
          @input="$emit('update-patient-name', $event)"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="uppercase text-gray-600 font-bold text-sm" for="propietario"
          >Nombre Propietario</label
        >
        <input
          class="p-2 border border-gray-300 rounded focus:border-blue-600 focus:outline-none focus:ring-2"
          id="propietario"
          placeholder="Nombre del Propietario"
          type="text"
          :value="patient.owner_name"
          @input="$emit('update-owner-name', $event)"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="uppercase text-gray-600 font-bold text-sm" for="email">Email</label>
        <input
          class="p-2 border border-gray-300 rounded focus:border-blue-600 focus:outline-none focus:ring-2"
          id="email"
          placeholder="Email de Contacto con el Propietario"
          type="email"
          :value="patient.email"
          @input="$emit('update-email', $event)"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="uppercase text-gray-600 font-bold text-sm" for="fecha_alta">Alta</label>
        <input
          class="p-2 border border-gray-300 rounded focus:border-blue-600 focus:outline-none focus:ring-2"
          id="fecha_alta"
          type="date"
          :value="patient.date"
          @input="$emit('update-date', $event)"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="uppercase text-gray-600 font-bold text-sm" for="sintomas">Síntomas</label>
        <textarea
          class="p-2 h-16 border border-gray-300 rounded focus:border-blue-600 focus:outline-none focus:ring-2"
          id="sintomas"
          placeholder="Describa los Síntomas"
          :value="patient.symptoms"
          @input="$emit('update-symptoms', $event)"
        ></textarea>
      </div>
      <button
        class="text-center font-bold uppercase bg-blue-700 hover:bg-blue-600 transition-colors duration-700 text-white py-2 w-full"
        type="submit"
        @click="$emit('save-patient', $event)"
      >
        Registrar Paciente
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import AlertMessage from './AlertMessage.vue'
import type { Patient } from '@/interfaces'

interface Props {
  isError: boolean
  message: string
  showAlert: boolean
  patient: Patient
}

const { isError, message, patient } = defineProps<Props>()
defineEmits([
  'update-patient-name',
  'update-owner-name',
  'update-email',
  'update-date',
  'update-symptoms',
  'save-patient',
])
</script>
