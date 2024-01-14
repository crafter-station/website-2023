import translationsJSON from "./content.translation.json"
import metadataJSON from "./metadata.translation.json"

type Locale = keyof typeof translationsJSON

export const getI18N = (locale: string | undefined) => {
  if (!locale) return translationsJSON.es
  return translationsJSON[locale as Locale]
}

export const getMetadata = (locale: string | undefined) => {
  if (!locale) return metadataJSON.es
  return metadataJSON[locale as Locale]
}
