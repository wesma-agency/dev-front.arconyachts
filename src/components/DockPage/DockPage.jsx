import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const DockPage = () => {
  const content = useTranslation('dockStatic')
  return <ServiceContent content={content} />
}

export default DockPage
