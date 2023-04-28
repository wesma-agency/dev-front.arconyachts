import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const LawPage = () => {
  const content = useTranslation('lawStatic')
  return <ServiceContent content={content} />
}

export default LawPage
