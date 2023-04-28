import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const SupportPage = () => {
  const content = useTranslation('supportStatic')
  return <ServiceContent content={content} />
}

export default SupportPage
