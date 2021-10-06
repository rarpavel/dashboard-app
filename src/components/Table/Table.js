import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Form } from 'react-bootstrap'

import movies from '../../mock/movies'

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'Directior',
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: 'Runtime (m)',
    selector: (row) => row.runtime,
    sortable: true,
    right: true,
  },
]

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage)
}

function toPages(pages) {
  const results = []

  for (let i = 1; i < pages; i++) {
    results.push(i)
  }

  return results
}

const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage,
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1)
  }

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1)
  }

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value))
  }

  const pages = getNumberOfPages(rowCount, rowsPerPage)
  const pageItems = toPages(pages)
  const nextDisabled = currentPage === pageItems.length
  const previosDisabled = currentPage === 1

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? 'page-item active' : 'page-item'

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          )
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

const Table = () => {
  const [filteredItems, setFilteredItems] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    setFilteredItems(movies)
  }, [])

  useEffect(() => {
    const filteredItems = movies.filter(
      (item) =>
        JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
        -1
    )
    setFilteredItems(filteredItems)
  }, [filterText])

  const subHeaderComponent = () => (
    <Form>
      <Form.Control
        onChange={(e) => {
          setFilterText(e.target.value)
        }}
        type="text"
        placeholder="Search..."
      />
    </Form>
  )

  return (
    <div>
      <DataTable
        title="Movies"
        columns={columns}
        data={filteredItems}
        defaultSortFieldID={1}
        pagination
        paginationComponent={BootyPagination}
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
    </div>
  )
}

export default Table
