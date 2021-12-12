import { LabelProps } from './label'
import { LabelMLProps } from './label-ml'
import {
  faCog,
  faHeart,
  faChevronRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

export const GeneralGroup = {
  id: '6200D209-FD62-4310-867C-9F76F03D97F2',
  name: 'general',
  display: 'General',
  icon: faCog,
  components: [LabelProps, LabelMLProps]
}
