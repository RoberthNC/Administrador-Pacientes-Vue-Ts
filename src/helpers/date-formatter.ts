export const formatDate = (date: string): string => {
  return new Date(date).toLocaleTimeString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
