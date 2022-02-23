import { useCallback, useState } from "react"

// --------------- 𝕄𝕖𝕥𝕒𝕕𝕒𝕥𝕒 ---------------

type UsePaginationProps = {
  initialPage: number
  initialRowsPerpage?: number
}

type Event = {
  target: {
    value: string
  }
}

const defaultInitialPage = 0
const rowsPerPageOptions = [5, 10, 25, 50, { label: "Todos", value: -1 }]

// --------------- 𝕄𝕒𝕚𝕟 ---------------

function usePagination({
  initialPage = defaultInitialPage,
  initialRowsPerpage = 25,
}: UsePaginationProps) {
  const [page, setPage] = useState(initialPage)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerpage)

  /** TablePagination event handler: used for change current page */
  const onChangePage = (e: any, newPage: number) => setPage(newPage)

  /** TablePagination event handler: used for change current page limiter */
  const onChangeRowsPerPage = (e: Event) => {
    const value = e.target.value
    setRowsPerPage(parseInt(value, 10))
    setPage(0)
  }

  /** Used for calculate current records */
  const calculateNewPaginatorData = <T>(records: T[]) => {
    const startIndex = page * rowsPerPage
    const lastIndex = startIndex + rowsPerPage

    const totalPages = Math.ceil(records.length / rowsPerPage)
    const currentPageRecords = records.slice(startIndex, lastIndex)

    return {
      totalPages,
      currentPageRecords,
    }
  }

  /** Used for reseting pagination state */
  const reset = useCallback(() => {
    setRowsPerPage(initialRowsPerpage)
    setPage(initialPage)
  }, [initialRowsPerpage, initialPage])

  return {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onChangePage,
    onChangeRowsPerPage,
    calculateNewPaginatorData,
    reset,
  }
}

export { usePagination }
