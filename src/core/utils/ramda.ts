import { lensPath, split, view } from "ramda"

const defaultSplitter = "."

const extractLens = <T, S>(
  lens: string,
  data: T,
  splitter = defaultSplitter
) => {
  const fieldLens = lensPath<T, S>(split(splitter, lens))
  const res = view(fieldLens, data)
  return res
}

export { extractLens }
