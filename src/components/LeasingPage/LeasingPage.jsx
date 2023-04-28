import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const LeasingPage = () => {
  const content = useTranslation('leasingStatic')
  return <ServiceContent content={content} />
}

export default LeasingPage
