import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const HandlingPage = () => {
  const content = useTranslation('handlingStatic')
  return <ServiceContent content={content} />
}

export default HandlingPage
