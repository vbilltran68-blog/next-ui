import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)

const now = () => dayjs();

const datetime = Object.assign(dayjs, { now })

export default datetime

