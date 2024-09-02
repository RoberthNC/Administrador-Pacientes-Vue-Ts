<template>
  <div class="bg-white shadow-lg rounded-md px-5 py-10 flex flex-col gap-5 w-full md:w-[95%]">
    <div class="flex flex-col gap-1">
      <p class="text-gray-600 font-bold text-sm">
        ID: <span class="text-gray-500 font-medium">{{ patient.id }}</span>
      </p>
      <p class="text-gray-600 font-bold text-sm">
        NOMBRE: <span class="text-gray-500 font-medium">{{ patient.patient_name }}</span>
      </p>
      <p class="text-gray-600 font-bold text-sm">
        PROPIETARIO: <span class="text-gray-500 font-medium">{{ patient.owner_name }}</span>
      </p>
      <p class="text-gray-600 font-bold text-sm">
        EMAIL: <span class="text-gray-500 font-medium">{{ patient.email }}</span>
      </p>
      <p class="text-gray-600 font-bold text-sm">
        FECHA ALTA:
        <span class="text-gray-500 font-medium capitalize">{{ formatDate(patient.date) }}</span>
      </p>
      <p class="text-gray-600 font-bold text-sm">
        SÍNTOMAS: <span class="text-gray-500 font-medium">{{ patient.symptoms }}</span>
      </p>
    </div>
    <div class="flex flex-row justify-center gap-3">
      <button
        class="flex-1 text-center font-bold uppercase bg-blue-700 hover:bg-blue-600 transition-colors duration-700 text-white py-2 rounded text-sm"
      >
        Editar
      </button>
      <button
        class="flex-1 text-center font-bold uppercase bg-red-600 hover:bg-red-500 transition-colors duration-700 text-white py-2 rounded text-sm"
        @click="$emit('remove-patient', patient.id)"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/helpers'
import type { Patient } from '@/interfaces'

interface Props {
  patient: Patient
}

defineEmits(['remove-patient'])

const { patient } = defineProps<Props>()
</script>
