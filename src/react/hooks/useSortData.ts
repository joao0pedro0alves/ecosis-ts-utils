import { useState } from "react"
import { extractLens } from "../../core/utils/ramda"

// --------------- 𝕄𝕖𝕥𝕒𝕕𝕒𝕥𝕒 ---------------

type Ordinances = "asc" | "desc"

// --------------- 𝕌𝕥𝕚𝕝𝕤 ---------------

const comp = <T>(a: T, b: T) => {
  if (a < b) return -1
  else if (a > b) return 1
  else return 0
}

const descendingComparator = <T>(
  a: T,
  b: T,
  orderBy: string,
  groupBy: string
) => {
  const _a = <T>extractLens(orderBy, a)
  const _b = <T>extractLens(orderBy, b)

  if (groupBy) {
    const groupA = <T>extractLens(groupBy, a)
    const groupB = <T>extractLens(groupBy, b)

    if (groupA < groupB) return -1
    else if (groupA > groupB) return 1
    else return comp(_a, _b)
  } else return comp(_a, _b)
}

const getComparator = <T>(order: string, orderBy: string, groupBy: string) => {
  return order === "asc"
    ? (a: T, b: T) => descendingComparator<T>(a, b, orderBy, groupBy)
    : (a: T, b: T) => -descendingComparator<T>(a, b, orderBy, groupBy)
}

const stableSort = <T>(array: T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index])

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0] as T, b[0] as T)

    if (order !== 0) return order
    return Number(a[1]) - Number(b[1])
  })

  return stabilizedThis.map(el => el[0])
}

// --------------- 𝕄𝕒𝕚𝕟 ---------------

type useSortDataProps = {
  field: string
  order: Ordinances
}

type useSortDataInitialProps = {
  initialField: string
  initialOrder?: Ordinances
}

function useSortData<T>({
  initialOrder = "asc",
  initialField,
}: useSortDataInitialProps) {
  const [currentSort, setCurrentSort] = useState<useSortDataProps>({
    field: initialField,
    order: initialOrder,
  })

  const onSortChange = (newSortField: string) => {
    const isAsc =
      currentSort.field === newSortField && currentSort.order === "asc"

    setCurrentSort({
      field: newSortField,
      order: isAsc ? "desc" : "asc",
    })
  }

  const sortData = (records: T[], groupBy: string) => {
    return stableSort<T>(
      records,
      getComparator<T>(currentSort.order, currentSort.field, groupBy)
    )
  }

  return { currentSort, onSortChange, sortData }
}

export { useSortData }
