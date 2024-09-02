<template>
  <div class="flex-1 p-3 flex flex-col items-center gap-3 h-screen overflow-y-scroll">
    <h2 class="text-center font-extrabold text-2xl">Administra tus Pacientes</h2>
    <p v-if="!existsPatients" class="text-center font-extrabold text-lg">No hay pacientes</p>
    <div v-else class="w-full flex flex-col gap-3 items-center">
      <p class="text-center mb-3 text-lg">
        Información de <span class="text-blue-700 font-bold">Pacientes</span>
      </p>
      <PatientCard
        v-for="patient in patients"
        :key="patient.id"
        :patient="patient"
        @remove-patient="removePatient"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PatientCard from './PatientCard.vue'
import { type Patient } from '@/interfaces'

interface Props {
  patients: Patient[]
  removePatient: (id: string) => void
}

const { patients, removePatient } = defineProps<Props>()
const existsPatients = computed(() => (patients.length > 0 ? true : false))
</script>
