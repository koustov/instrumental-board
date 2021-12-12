import { PieChartProps } from './donut'
import { TimelineChartProps } from './timeline'
import {
  faChartPie,
  faHeart,
  faChevronRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

export const RechartGroup = {
  id: '25FD5462-677E-4A65-B63C-4247337E5D82',
  name: 'rechart',
  display: 'Rechart',
  icon: faChartPie,
  components: [PieChartProps, TimelineChartProps]
}
