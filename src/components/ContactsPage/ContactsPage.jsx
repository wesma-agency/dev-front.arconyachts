import React, { useState } from 'react'
import {
  Header,
  AddressList,
  AddressItem,
  City,
  PhoneNumber,
  Address,
  ImageWrapper,
  Img,
  Marker,
  Requisites,
  Title,
  Information,
} from './ContactsPage.styled'
import { useTranslation } from 'utils/useTranslation'

const ContactsPage = () => {
  const contactsStatic = useTranslation('contactsStatic')
  const {
    header,
    img: { src, alt, size },
    addresses,
    requisites: { title, data },
  } = contactsStatic
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <>
      <Header>{header}</Header>
      <AddressList>
        {addresses.map((address, index) => (
          <AddressItem
            key={index}
            isActive={activeItemIndex === index}
            onMouseEnter={() => {
              setActiveItemIndex(index)
            }}
          >
            <City>{address.city}</City>
            <PhoneNumber
              href={`tel:+${address.phoneNumber.replace(
                /[\+\.\(\)\s\-]+/g,
                ''
              )}`}
            >
              {address.phoneNumber}
            </PhoneNumber>
            <Address>{address.address}</Address>
          </AddressItem>
        ))}
      </AddressList>
      <ImageWrapper>
        <Img
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          cover="cover"
        />
        {addresses.map((address, index) => (
          <Marker
            key={index}
            $isActive={activeItemIndex === index}
            $latitude={address.coordinates.latitude}
            $longitude={address.coordinates.longitude}
          />
        ))}
      </ImageWrapper>
      <Requisites>
        <Title>{title}</Title>
        <Information>{data}</Information>
      </Requisites>
    </>
  )
}

export default ContactsPage
