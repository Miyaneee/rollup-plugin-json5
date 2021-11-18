import { FilterPattern } from '@rollup/pluginutils'
import { Plugin } from 'rollup'

export interface RollupJson5Options {
  /**
   * All JSON5 files will be parsed by default,
   * but you can also specifically include files
   */
  include?: FilterPattern
  /**
   * All JSON5 files will be parsed by default,
   * but you can also specifically exclude files
   */
  exclude?: FilterPattern
  /**
   * For tree-shaking, properties will be declared as variables, using
   * either `var` or `const`.
   * @default false
   */
  preferConst?: boolean
  /**
   * Specify indentation for the generated default export
   * @default '\t'
   */
  indent?: string
  /**
   * Ignores indent and generates the smallest code
   * @default false
   */
  compact?: boolean
  /**
   * Generate a named export for every property of the JSON object
   * @default true
   */
  namedExports?: boolean
}

/**
 * Convert .json5 files to ES6 modules
 */
export default function json(options?: RollupJson5Options): Plugin