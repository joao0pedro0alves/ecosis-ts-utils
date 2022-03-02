# Core

Como usar?

```shell
npm i jpa-ts-utils
```

```js
const { formatter } = require("jpa-ts-utils")

// CPF
formatter("99999999999").toCPF() // => 999.999.999-99

// CNPJ
formatter("99999999999999").toCNPJ() // => 99.999.999/9999-99

// Dates
formatter(new Date()).toSimpleDate() // => 22/02/2022

// Numbers
formatter(99.9).toDecimal() // => 99,90
```

# React

Hooks para manipulação de dados, paginação e ordernação.

```js

import { usePagination, useSortData } from 'jpa-ts-utils';

const {
  page, // current page
  rowsPerPage, // current rows per page
  rowsPerPageOptions, // default rows per page options: [5, 10, ...]
  onChangePage,
  onChangeRowsPerPage,
  calculateNewPaginatorData, // used to calculate current records
  reset, // used to reset paging state
} = usePagination({
  initialPage: 1 // => default: 0,
  initialRowsPerpage: // => default: 25
})

// hook for sorting object[]
const {
  currentSort,
  onSortChange,
  sortData // used for sorting current records
} = useSortData({
  initialOrder: "ordinance" // asc | dec => default: asc,
  initialField: 'field', // required
})

// example with Material-ui v5

import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';

<TableCell>
  <TableSortLabel
    active={currentSort.field === 'field'}
    direction={currentSort.order}
    onClick={() => onSortChange('field')}
  />
  Label
</TableCell>

<TablePagination
  count={records.length}
  page={page}
  rowsPerPage={rowsPerPage}
  rowsPerPageOptions={rowsPerPageOptions}
  onRowsPerPageChange={onChangeRowsPerPage}
  onPageChange={onChangePage}
/>

```
