import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const CrewManagementPage = () => {
  const content = useTranslation('crewManagementStatic')
  return <ServiceContent content={content} />
}

export default CrewManagementPage
