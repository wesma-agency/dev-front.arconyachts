import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'


const RegistrationPage = () => {
  const content = useTranslation('registrationStatic')
  return <ServiceContent content={content} />
}

export default RegistrationPage
