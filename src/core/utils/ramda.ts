import { lensPath, split, view, curry } from "ramda"

const defaultSplitter = "."

const extractLens = (lens: string, data: any, splitter = defaultSplitter) => {
  const fieldLens = lensPath(split(splitter, lens))
  const res = view(fieldLens, data)
  return res
}

const percentOf = curry((percent: number, value: number) => {
  const x = (value * percent) / 100
  return x
})

export { extractLens, percentOf }
