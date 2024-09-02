<template>
  <MyHeader />
  <div class="flex flex-col md:flex-row md:justify-center">
    <MyForm
      :isError="isError"
      :message="message"
      :showAlert="showAlert"
      :patient="patient"
      @update-patient-name="patient.patient_name = $event.target.value"
      @update-owner-name="patient.owner_name = $event.target.value"
      @update-email="patient.email = $event.target.value"
      @update-date="patient.date = $event.target.value"
      @update-symptoms="patient.symptoms = $event.target.value"
      @save-patient="savePatient"
    />
    <MyList :patients="patients" :removePatient="removePatient" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { v4 as uuid } from 'uuid'

import MyHeader from './components/MyHeader.vue'
import MyForm from './components/MyForm.vue'
import MyList from './components/MyList.vue'

import { type Patient } from './interfaces'

const isError = ref<boolean>(false)
const message = ref<string>('')
const showAlert = ref<boolean>(false)
const patients = ref<Patient[]>(JSON.parse(localStorage.getItem('patients-list') ?? '[]'))
const patient = reactive<Patient>({
  id: '',
  patient_name: '',
  owner_name: '',
  email: '',
  date: '',
  symptoms: '',
})

const savePatient = (e: Event) => {
  e.preventDefault()

  const { id, ...rest } = patient

  if (Object.values(rest).includes('')) {
    isError.value = true
    message.value = 'Todos los campos son requeridos'
    showAlert.value = true
    setTimeout(() => {
      isError.value = false
      message.value = ''
      showAlert.value = false
    }, 3000)
    return
  }

  patients.value.push({
    ...patient,
    id: uuid(),
  })

  patient.id = ''
  patient.patient_name = ''
  patient.owner_name = ''
  patient.email = ''
  patient.date = ''
  patient.symptoms = ''

  isError.value = false
  message.value = 'Paciente almacenado correctamente'
  showAlert.value = true
  setTimeout(() => {
    isError.value = false
    message.value = ''
    showAlert.value = false
  }, 3000)
}

const updatePatient = (id: string) => {}

const removePatient = (id: string) => {
  patients.value = patients.value.filter((patient) => patient.id !== id)
}

watch(
  patients,
  () => {
    localStorage.setItem('patients-list', JSON.stringify(patients.value))
  },
  { deep: true },
)
</script>
