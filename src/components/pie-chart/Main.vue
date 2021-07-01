<template>
  <Chart type="pie" :width="width" :height="height" :data="data" />
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const store = useStore()
    const darkMode = computed(() => store.state.main.darkMode)
    const data = computed(() => {
      return {
        labels: ['Gasto', 'Inversion', 'Costo'],
        datasets: [
          {
            data: [15, 10, 65],
            backgroundColor: ['#375dc0', '#190e49', '#203f90'],
            hoverBackgroundColor: ['#375dc0', '#190e49', '#203f90'],
            borderWidth: 5,
            borderColor: darkMode.value ? '#303953' : '#fff'
          }
        ]
      }
    })

    return {
      data
    }
  }
})
</script>
