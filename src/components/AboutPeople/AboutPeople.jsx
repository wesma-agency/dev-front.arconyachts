import React from 'react'
import PersonCard from 'ui/Cards/PersonCard/PersonCard'
import {
  Description,
  List,
  ListItem,
  Section,
  Title,
} from './AboutPeople.styled'

const AboutPeople = ({
  data,
  title,
  description,
  largeIndent,
  hasEmail = true,
  onClick = () => {},
}) => (
  <Section>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <List>
      {data.map((item) => (
        <ListItem
          largeIndent={largeIndent && 'largeIndent'}
          key={item.id}
          onClick={onClick}
        >
          <PersonCard data={item} hasEmail={hasEmail} />
        </ListItem>
      ))}
    </List>
  </Section>
)

export default AboutPeople
