import { getUniqueListBy } from './arrayHelpers'

export const transformLocation = (location) => {
  let result = { title: location.name, slug: location.slug }
  if (location.childrens) {
    result.countries = location.childrens.map((item) => {
      let result = {
        title: item.name,
        slug: item.slug,
      }
      if (item.childrens) {
        result.regions = []
        item.childrens.map((item) => {
          result.regions.push({
            title: item.name,
            slug: item.slug,
          })
          if (item.childrens) {
            item.childrens.map((item) => {
              result.regions.push({
                title: item.name,
                slug: item.slug,
              })

              if (item.childrens) {
                item.childrens.map((item) => {
                  result.regions.push({
                    title: item.name,
                    slug: item.slug,
                  })
                })
              }
            })
          }
        })
        result.regions = getUniqueListBy(result.regions, 'slug')
      }
      return result
    })
  }
  return result
}
