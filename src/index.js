import { createFilter, dataToEsm } from '@rollup/pluginutils'
import json5 from 'json5'

function json5Plugin(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const indent = 'indent' in options ? options.indent : '\t'

  return {
    name: 'json5',
    transform(json, id) {
      if (!/.json5$/.test(id) || !filter(id)) return null

      try {
        const parsed = json5.parse(json)
        return {
          code: dataToEsm(parsed, {
            preferConst: options.preferConst,
            compact: options.compact,
            namedExports: options.namedExports,
            indent
          }),
          map: { mappings: '' }
        }
      } catch (err) {
        const message = 'Could not parse JSON5 file'
        const position = parseInt(/[\d]/.exec(err.message)[0], 10)
        this.warn({ message, id, position })
        return null
      }
    }
  }
}

export default json5Plugin
