export const PATHS = {}

export type TLanguage = 'en' | 'ru'

export type TTextContent = { en: string; ru: string }

export const TGisLanguage = (string: string): string is TLanguage => {
  return string === 'en' || string === 'ru'
}

export const HeaderItems = [{text:'Главная'},{text:'Запись'},{text:'О нас'}]
