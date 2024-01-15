import translationsJSON from "./content.translation.json"
import metadataJSON from "./metadata.translation.json"

export const getValidLocale = (locale: string | undefined) => {
  if (!locale) return "es"
  return locale.includes("en") ? "en" : "es"
}

export const getI18N = (locale: string | undefined) => {
  if (!locale) return translationsJSON.es
  const validLocale = getValidLocale(locale)
  return translationsJSON[validLocale]
}

export const getMetadata = (locale: string | undefined) => {
  if (!locale) return metadataJSON.es
  const validLocale = getValidLocale(locale)
  return metadataJSON[validLocale]
}
