import { formatDistanceToNow, format } from 'date-fns'

export const PostingDatePeriod = (periodTillNow) => {
  return formatDistanceToNow(
        new Date(periodTillNow)
)}

export const HistoryDate = (date) => {
  return format(new Date(date), "Pp")
}