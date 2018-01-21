import pt from './pt.json'
import en from './en.json'

import cuid from 'cuid'

const _default = 'pt'
const resources = { pt, en }

const language = () => {
  const { language, languages } = navigator

  const lng = languages.length ? languages[0] : language
  return lng.split('-')[0]
}

const get = (obj, path) => {
  const paths = path.split('.')
  let current = obj

  for (let i = 0; i < paths.length; i++) {
    if (current[paths[i]] === undefined) {
      return path;
    } else {
      current = current[paths[i]];
    }
  }

  if(Array.isArray(current)) {
    current = current.map(text => ({ text, keyId: cuid() }) )
  }

  return current
}

const t = (path) => {
  const lng = resources.hasOwnProperty(language()) ? language() : _default
  const translation = resources[lng]

  return get(translation, path)
}


export { language, t, get }
