<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Proyectos</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="btn btn-primary shadow-md mr-2">Adicionar Proyecto</button>
        <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300"
            aria-expanded="false"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <PlusIcon class="w-4 h-4" />
            </span>
          </button>
          <div class="dropdown-menu w-40">
            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FilePlusIcon class="w-4 h-4 mr-2" /> New Category
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <UserPlusIcon class="w-4 h-4 mr-2" /> New Group
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
          <!-- <div class="sm:flex items-center sm:mr-4">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Field</label
            >
            <select
              id="tabulator-html-filter-field"
              v-model="filter.field"
              class="form-select w-full sm:w-32 xxl:w-full mt-2 sm:mt-0 sm:w-auto"
            >
              <option value="name">Name</option>
              <option value="category">Category</option>
              <option value="remaining_stock">Remaining Stock</option>
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Type</label
            >
            <select
              id="tabulator-html-filter-type"
              v-model="filter.type"
              class="form-select w-full mt-2 sm:mt-0 sm:w-auto"
            >
              <option value="like" selected>like</option>
              <option value="=">=</option>
              <option value="<">&lt;</option>
              <option value="<=">&lt;=</option>
              <option value=">">></option>
              <option value=">=">>=</option>
              <option value="!=">!=</option>
            </select>
          </div> -->
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <!-- <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Value</label
            > -->
            <input
              id="tabulator-html-filter-value"
              v-model="filter.value"
              type="text"
              class="form-control sm:w-40 xxl:w-full mt-2 sm:mt-0"
              placeholder="Buscar..."
            />
          </div>
          <div class="mt-2 xl:mt-0">
            <button
              id="tabulator-html-filter-go"
              type="button"
              class="btn btn-primary w-full sm:w-16"
              @click="onFilter"
            >
              <SearchIcon class="w-4 h-4 mr-2" />
            </button>
            <button
              id="tabulator-html-filter-reset"
              type="button"
              class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
              @click="onResetFilter"
            >
              <RefreshCcwIcon class="w-4 h-4 mr-2" />
            </button>
          </div>
        </form>
        <div class="flex mt-5 sm:mt-0">
          <button
            id="tabulator-print"
            class="btn btn-outline-secondary w-1/2 sm:w-auto mr-2"
            @click="onPrint"
          >
            <PrinterIcon class="w-4 h-4 mr-2" /> Imprimir
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle btn btn-outline-secondary w-full sm:w-auto"
              aria-expanded="false"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Exportar
              <ChevronDownIcon class="w-4 h-4 ml-auto sm:ml-2" />
            </button>
            <div class="dropdown-menu w-40">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  id="tabulator-export-csv"
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportCsv"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Exportar CSV
                </a>
                <a
                  id="tabulator-export-json"
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportJson"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Exportar JSON
                </a>
                <a
                  id="tabulator-export-xlsx"
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportXlsx"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Exportar XLSX
                </a>
                <a
                  id="tabulator-export-html"
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportHtml"
                >
                  <FileTextIcon class="w-4 h-4 mr-2" /> Exportar HTML
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto scrollbar-hidden">
        <div
          id="tabulator"
          ref="tableRef"
          class="mt-5 table-report table-report--tabulator"
        ></div>
      </div>
    </div>
    <!-- END: HTML Table Data -->
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from 'vue'
import xlsx from 'xlsx'
import feather from 'feather-icons'
import Tabulator from 'tabulator-tables'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const tableRef = ref()
    const tabulator = ref()
    // const route = useRoute()
    const router = useRouter()
    const filter = reactive({
      field: 'name',
      type: 'like',
      value: ''
    })
    const store = useStore()

    const initTabulator = () => {
      tabulator.value = new Tabulator(tableRef.value, {
        ajaxURL: 'http://newsisin.test/api/project',
        ajaxFiltering: true,
        ajaxSorting: true,
        printAsHtml: true,
        printStyled: true,
        pagination: 'remote',
        paginationSize: 10,
        paginationSizeSelector: [10, 20, 30, 40],
        layout: 'fitColumns',
        responsiveLayout: 'collapse',
        placeholder: 'No se encontraron resultados',
        columns: [
          {
            formatter: 'responsiveCollapse',
            width: 40,
            minWidth: 30,
            hozAlign: 'center',
            resizable: false,
            headerSort: false
          },

          // For HTML table
          {
            title: 'NOMBRE',
            minWidth: 200,
            responsive: 0,
            field: 'name',
            vertAlign: 'middle',
            print: false,
            download: false,
            formatter(cell) {
              return `<div>
                <div class="font-medium whitespace-nowrap">${
                  cell.getData().name
                }</div>
                <div class="text-gray-600 text-xs whitespace-nowrap"> Proyecto </div>
              </div>`
            }
          },
          {
            title: 'RESPONSABLE',
            minWidth: 200,
            responsive: 0,
            field: 'responsable',
            vertAlign: 'middle',
            print: false,
            download: false
          },
          {
            title: 'AREA',
            minWidth: 200,
            responsive: 0,
            field: 'name',
            vertAlign: 'middle',
            print: false,
            download: false
          },
          //   {
          //     title: 'IMAGES',
          //     minWidth: 200,
          //     field: 'images',
          //     hozAlign: 'center',
          //     vertAlign: 'middle',
          //     print: false,
          //     download: false,
          //     formatter(cell) {
          //       return `<div class="flex lg:justify-center">
          //           <div class="intro-x w-10 h-10 image-fit">
          //             <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="${require('@/assets/images/' +
          //               cell.getData().images[0])}">
          //           </div>
          //           <div class="intro-x w-10 h-10 image-fit -ml-5">
          //             <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="${require('@/assets/images/' +
          //               cell.getData().images[1])}">
          //           </div>
          //           <div class="intro-x w-10 h-10 image-fit -ml-5">
          //             <img alt="Icewall Tailwind HTML Admin Template" class="rounded-full" src="${require('@/assets/images/' +
          //               cell.getData().images[2])}">
          //           </div>
          //       </div>`
          //     }
          //   },
          //   {
          //     title: 'REMAINING STOCK',
          //     minWidth: 200,
          //     field: 'remaining_stock',
          //     hozAlign: 'center',
          //     vertAlign: 'middle',
          //     print: false,
          //     download: false
          //   },
          //   {
          //     title: 'STATUS',
          //     minWidth: 200,
          //     field: 'status',
          //     hozAlign: 'center',
          //     vertAlign: 'middle',
          //     print: false,
          //     download: false,
          //     formatter(cell) {
          //       return `<div class="flex items-center lg:justify-center ${
          //         cell.getData().status ? 'text-theme-10' : 'text-theme-24'
          //       }">
          //         <i data-feather="check-square" class="w-4 h-4 mr-2"></i> ${
          //           cell.getData().status ? 'Active' : 'Inactive'
          //         }
          //       </div>`
          //     }
          //   },
          {
            title: 'ACCION',
            minWidth: 200,
            field: 'actions',
            responsive: 1,
            hozAlign: 'center',
            vertAlign: 'middle',
            print: false,
            download: false,
            formatter (cell) {
              const a = cash(`<div class="flex lg:justify-center items-center">

                    <a class="flex items-center mr-3" href="javascript:;" >
                      <i data-feather="folder" class="w-4 h-4 mr-1"></i>
                    </a>

                  </div>`)
              cash(a).on('click', () => {
                // On click actions
                router.push(`/proyect/${cell.getData().id}`)
              })

              return a[0]
            }
          },

          // For print format
          {
            title: 'PRODUCT NAME',
            field: 'name',
            visible: false,
            print: true,
            download: true
          },
          {
            title: 'CATEGORY',
            field: 'category',
            visible: false,
            print: true,
            download: true
          },
          {
            title: 'REMAINING STOCK',
            field: 'remaining_stock',
            visible: false,
            print: true,
            download: true
          },
          {
            title: 'STATUS',
            field: 'status',
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue() ? 'Active' : 'Inactive'
            }
          },
          {
            title: 'IMAGE 1',
            field: 'images',
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[0]
            }
          },
          {
            title: 'IMAGE 2',
            field: 'images',
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[1]
            }
          },
          {
            title: 'IMAGE 3',
            field: 'images',
            visible: false,
            print: true,
            download: true,
            formatterPrint(cell) {
              return cell.getValue()[2]
            }
          }
        ],
        renderComplete() {
          feather.replace({
            'stroke-width': 1.5
          })
        }
      })
    }

    // Redraw table onresize
    const reInitOnResizeWindow = () => {
      window.addEventListener('resize', () => {
        tabulator.value.redraw()
        feather.replace({
          'stroke-width': 1.5
        })
      })
    }

    // Filter function
    const onFilter = () => {
      tabulator.value.setFilter(filter.field, filter.type, filter.value)
    }

    // On reset filter
    const onResetFilter = () => {
      filter.field = 'name'
      filter.type = 'like'
      filter.value = ''
      onFilter()
    }

    // Export
    const onExportCsv = () => {
      tabulator.value.download('csv', 'data.csv')
    }

    const onExportJson = () => {
      tabulator.value.download('json', 'data.json')
    }

    const onExportXlsx = () => {
      const win = window
      win.XLSX = xlsx
      tabulator.value.download('xlsx', 'data.xlsx', {
        sheetName: 'Products'
      })
    }

    const onExportHtml = () => {
      tabulator.value.download('html', 'data.html', {
        style: true
      })
    }

    // Print
    const onPrint = () => {
      tabulator.value.print()
    }

    onMounted(() => {
      initTabulator()
      reInitOnResizeWindow()
      store.dispatch('main/setProyect', null)
    })

    return {
      tableRef,
      filter,
      onFilter,
      onResetFilter,
      onExportCsv,
      onExportJson,
      onExportXlsx,
      onExportHtml,
      onPrint
    }
  }
})
</script>
