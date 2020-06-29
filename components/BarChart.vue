<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: { data_source: String, y_axis: String },
  mounted() {
    console.log(this.data_source)
    this.$axios.get(this.data_source).then((response) => {
      const { CHART_DATA, CHART_OPTIONS } = this.formatChartData(response.data)
      this.renderChartData(CHART_DATA, CHART_OPTIONS)
    })
  },
  methods: {
    formatChartData(tsData) {
      this.gradient = this.$refs.canvas
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 450)

      this.gradient.addColorStop(0, 'hsla(120,100%,50%,0.8)')
      this.gradient.addColorStop(0.5, 'hsla(120,100%,50%,0.5)')
      this.gradient.addColorStop(1, 'hsla(120,100%,50%,0.2)')

      const CHART_DATA = {
        datasets: [
          {
            backgroundColor: this.gradient,
            label: 'Dataset',
            pointRadius: 0,
            data: tsData.map((frame) => {
              return { x: frame.timestamp, y: frame[this.y_axis] }
            })
          }
        ]
      }
      const CHART_OPTIONS = {
        scales: {
          xAxes: [
            {
              type: 'time',
              position: 'bottom'
            }
          ],
          yAxes: [
            {
              title: ''
            }
          ]
        }
      }
      return { CHART_DATA, CHART_OPTIONS }
    },
    renderChartData(chartData, chartOptions) {
      this.renderChart(chartData, chartOptions)
    }
  }
}
</script>
