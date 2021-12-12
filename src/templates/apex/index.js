import { PieChartProps } from './donut'
import { TimelineChartProps } from './timeline'
import {
  faChartPie,
  faHeart,
  faChevronRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

export const ApexGroup = {
  id: "0F7AB5E5-F6D5-4989-8A0B-D1BC2716577A",
  name: 'apex',
  display: 'Apex',
  icon: faChartPie,
  components: [PieChartProps, TimelineChartProps]
}
