import Image from 'next/image'
import {
  StyledHeader,
  StyledImageWrapper,
  StyledLabel,
  StyledServiceInfo,
  StyledServiceInfoWrapper,
  StyledTitle,
} from './ServiceContent.styled'

const ServiceContent = ({ content, options }) => {
  const { pageLabel, pageTitle, image, info } = content
  // const [isOpened, setIsOpened] = useState(false)
  // const containerRef = useRef(null)
  // const optionsRef = useRef(null)

  // useEffect(() => {
  //   const onResize = throttle(() => {
  //     setIsOpened(false)
  //   }, 100)
  //   window.addEventListener('resize', onResize)
  //   return () => {
  //     window.removeEventListener('resize', onResize)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isOpened && optionsRef.current) {
  //     const options = optionsRef.current.getBoundingClientRect()
  //     const container = containerRef.current.getBoundingClientRect()
  //     if (options.right > container.right) {
  //       optionsRef.current.style.transform = `translate(-${
  //         options.right - container.right
  //       }px)`
  //     }
  //   }
  // }, [isOpened])
  return (
    <>
      <StyledHeader>
        <StyledLabel>{pageLabel}</StyledLabel>
        <StyledTitle>{pageTitle} </StyledTitle>
      </StyledHeader>
      <StyledImageWrapper>
        <Image
          layout="fill"
          src={image.src}
          alt={pageTitle}
          objectFit="cover"
          loader={({src}) => src} // для загрузки без кэша (30.05.2023)
        />
      </StyledImageWrapper>
      <StyledServiceInfoWrapper>
        <StyledServiceInfo content={info}></StyledServiceInfo>
      </StyledServiceInfoWrapper>
    </>
  )
}

export default ServiceContent
