import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import {
  YACHT_META_ITEMS
} from 'graphql/query/Yacht_Meta'

const CatalogSelection = () => {

  const { data: meta } = useQuery(YACHT_META_ITEMS);

  return <Selection>
    {meta && meta.yacht_meta_items.map(({ name }, i) => 
    <Item key={`selection-item-${i}`}>
      <Name>{name}</Name>
      <Divider/>
      <Value>1</Value>
    </Item>)}
  </Selection>
}

const Selection = styled.div`
  margin-bottom: 2rem;
`

const Item = styled.a`
  display: flex;
  width: 33.3333%;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
`

const Divider = styled.div`
  flex: 1;
  border-bottom: 1px dotted #eee;
  position: relative;
  margin: 0 1rem;
`

const Name = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  color: #333;
`

const Value = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  color: #777;
`

export default CatalogSelection;



