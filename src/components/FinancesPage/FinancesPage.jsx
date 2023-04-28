import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const FinancesPage = () => {
  const content = useTranslation('financesStatic')
  return <ServiceContent content={content} />
}

export default FinancesPage
