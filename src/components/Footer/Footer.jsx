import { memo, useEffect, useState } from 'react'
import {
  StyledContactLink,
  StyledContacts,
  StyledContactsWrapper,
  StyledFooter,
  StyledLogo,
} from './Footer.styled'
import FooterBottom from './FooterBottom'
import FooterHeadquarter from './FooterHeadquarter'
import FooterLinks from './FooterLinks'
import Head from 'next/head'

// JivoSite
// const jivositeScript = `(function(){ var widget_id = 'hCr4Fw4E82';
// var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code-ya.jivosite.com/widget/67zMcBV0kg'; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})()`

const Footer = ({ showHeadquarter }) => {
  // const [jivo, setJivo] = useState(undefined)
  // useEffect(() => {
  //   !jivo && setJivo(jivositeScript)
  // }, [])

  return (
    <>
      {/* <Head>
        {jivo && <script async dangerouslySetInnerHTML={{ __html: jivo }} />}
      </Head> */}
      {showHeadquarter && <FooterHeadquarter />}
      <StyledFooter>
        <StyledContactsWrapper>
          <StyledLogo isActive={true} />
          <StyledContacts>
            <StyledContactLink href="tel:+74959379000">
              +7 (495) 937-90-00
            </StyledContactLink>
            <StyledContactLink href="mailto:info@arconyachts.com">
              info@arconyachts.com
            </StyledContactLink>
          </StyledContacts>
        </StyledContactsWrapper>
        <FooterLinks />
        <FooterBottom />
      </StyledFooter>
    </>
  )
}

export default Footer
