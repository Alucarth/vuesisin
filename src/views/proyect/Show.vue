<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto" v-if="proyect">Proyecto: {{proyect.name}}</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Vertical Bar Chart -->
        <div class="intro-y box" v-if="proyect">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">INFORMACION</h2>
          </div>
          <div id="vertical-bar-chart" class="p-5">
            <div>
                <label for="vertical-form-1" class="form-label">Codigo Sisin</label>
                <input id="vertical-form-1" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.code_sisin" disabled>
            </div>
            <div>
                <label for="vertical-form-1" class="form-label">Responsable</label>
                <input id="vertical-form-1" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.responsable" disabled>
            </div>
            <div class="mt-3">
                <label for="vertical-form-2" class="form-label">Inversión</label>
                <input id="vertical-form-2" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.investment" disabled>
            </div>
            <div class="mt-3">
                <label for="vertical-form-2" class="form-label">Denominacion</label>
                <input id="vertical-form-2" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.denomination" disabled>
            </div>
            <div class="mt-3">
                <label for="vertical-form-2" class="form-label">Area</label>
                <input id="vertical-form-2" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.area" disabled>
            </div>
            <div class="mt-3">
                <label for="vertical-form-2" class="form-label">Destino</label>
                <input id="vertical-form-2" type="text" class="form-control" placeholder="Sin registrar" v-model="proyect.location" disabled>
            </div>
          </div>
        </div>
        <!-- END: Vertical Bar Chart -->
          <!-- BEGIN: Pie Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">SEGUIMIENTO FINANCIERO</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >

            </div>
          </div>
          <div id="pie-chart" class="p-5">
            <div class="preview">
              <PieChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-pie-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-pie-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <PieChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pie Chart -->
      </div>
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Stacked Bar Chart -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">EJECUCION SEMESTRAL</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >

            </div>
          </div>
          <div id="vertical-bar-chart" class="p-5">
            <div class="preview">
              <VerticalBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-vertical-bar-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-vertical-bar-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <VerticalBarChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Stacked Bar Chart -->
        <!-- BEGIN: Line Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">EJECUCION ANUAL</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
            </div>
          </div>
          <div id="line-chart" class="p-5">
            <div class="preview">
              <LineChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-line-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-line-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <LineChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Line Chart -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import VerticalBarChart from '@/components/vertical-bar-chart/Main.vue'
// import StackedBarChart from '@/components/stacked-bar-chart/Main.vue'
// import HorizontalBarChart from '@/components/horizontal-bar-chart/Main.vue'
import LineChart from '@/components/line-chart/Main.vue'
// import DonutChart from '@/components/donut-chart/Main.vue'
import PieChart from '@/components/pie-chart/Main.vue'
export default defineComponent({
  setup() {
    const store = useStore()
    // const proyect = computed(() => store.state.main.proyect)
    const route = useRoute()
    // const router = useRouter()
    const axios = require('axios').default
    const setProyect = () => {
      axios.get(`http://newsisin.test/api/project/${route.params.id}`)
        .then(response => {
          console.log(response.data)
          store.dispatch('main/setProyect', response.data.data)
        })
    }

    onMounted(() => {
      setProyect()
    })

    return {
      proyect: computed(() => store.state.main.proyect)
    }
  },
  components: {
    VerticalBarChart,
    LineChart,
    PieChart
  }
}
)
</script>
