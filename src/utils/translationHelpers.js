export const getTranslations = (translationPairs) => {
  const entries = Object.entries(translationPairs)

  const translation = entries.reduce((result, [translationKey, translationCallback]) => {
    result.ru[translationKey] = translationCallback(true)
    result.en[translationKey] = translationCallback(false)

    return result
  }, {ru: {}, en: {}})

  return translation
}
