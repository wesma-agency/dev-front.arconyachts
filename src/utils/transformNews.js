import { format } from 'date-fns'
import locale from 'utils/dataLocale'
import { enUS } from 'date-fns/locale'

export const transformNews = (item, isRussian = true) => {
  return {
    slug: item.slug,
    title: item.title,
    text: item.preview_text,
    src: item.preview.fullpath,
    height: 272,
    width: 373,
    date: format(
      new Date(
        +item.start_at.slice(0, 10).split('-')[0],
        +item.start_at.slice(0, 10).split('-')[1] - 1,
        +item.start_at.slice(0, 10).split('-')[2]
      ),
      isRussian ? 'dd MMM yyyy' : 'dd MMMM yyyy',
      { locale: isRussian ? locale : enUS }
    ),
  }
}
  