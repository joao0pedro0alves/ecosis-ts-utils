import { lensPath, split, view } from "ramda"

const defaultSplitter = "."

const extractLens = <T>(
  lens: string,
  data: T | object,
  splitter = defaultSplitter
) => {
  const fieldLens = lensPath(split(splitter, lens))
  return view(fieldLens, data)
}

export { extractLens }
