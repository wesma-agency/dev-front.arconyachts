import { gql } from '@apollo/client'

export const GET_SALE_SLUG = gql`
    query getSaleSlug {
        yachts(type: "cost", limit: 5000){
            data{
                slug
            }
        }
    }
`

export const GET_CHARTER_SLUG = gql`
    query getChartersSlug {
        yachts(type: "rent", limit: 5000){
            data{
                slug
            }
        }
    }
`

export const GET_SHIPYARDS_SLUG = gql`
    query getShipyardsSlug {
        shipyards(limit: 5000){
            data {
                slug
            }
        }
    }
`

export const GET_PROJECTS_SLUG = gql`
    query getProjectsSlug {
        yachts(type: "project", limit: 5000){
            data{
                slug
            }
        }
    }
`