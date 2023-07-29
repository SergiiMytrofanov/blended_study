
import { formatDistanceToNow } from 'date-fns'

export const PostingDatePeriod = (periodTillNow) => {
  return formatDistanceToNow(
        new Date(periodTillNow)
)}
