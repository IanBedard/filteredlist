// src/App.js
import { useState } from "react";
import { data } from "./data/data-eng";
import React from "react";
import "./theme.css";

import "./App.css";
import SearchBar from "./components/SearchBar.js";
import FilteredResults from "./components/FilteredResults.js";
import ChecklistFilters from "./components/CheckListFilters";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  //archive button
  const [archiveState, setArchiveState] = useState(false);

  const handleArchiveChange = () => {
    setArchiveState((prevState) => !prevState);
    setFilterOptions({ ...filterOptions, ARCHIVE: !archiveState });
    console.log("helo");
  };

  //Setting up React component structure
  const [filterOptions, setFilterOptions] = useState({
    //Topic
    ARCHIVE: false,
    //Topic
    EE: false,
    MA: false,
    //topics
    RET: false,
    UNI: false,
    EME: false,
    LEA: false,
    SAL: false,
    ENT: false,
    PEN: false,
    TAX: false,
    DED: false,
    PAY: false,
    APP: false,
    MAN: false,
  });

  //pagination
  const ITEMS_PER_PAGE = 16;
  const [currentPage, setCurrentPage] = useState(1);

  //state for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering logic
  const filteredArray = data.filter((item) => {
    // Check if the item matches the search query
    const matchesSearchQuery =
      item.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Description.toLowerCase().includes(searchQuery.toLowerCase());

    // Check if at least one of the filter options is true for the item's category

    const matchesFilterOptions =
      //Roles
      (!filterOptions.EE || item.Role.toLowerCase().includes("employee")) &&
      (!filterOptions.MA || item.Role.toLowerCase().includes("manager")) &&
      //Topic
      (!filterOptions.RET || item.Topic.toLowerCase().includes("retroactive")) &&
      (!filterOptions.UNI || item.Topic.toLowerCase().includes("union")) &&
      (!filterOptions.EME || item.Topic.toLowerCase().includes("emergency salary advance and priority payments")) &&
      (!filterOptions.LEA ||
        item.Topic.toLowerCase().includes("leave")) &&
      (!filterOptions.SAL || item.Topic.toLowerCase().includes("salary administration")) &&
      (!filterOptions.ENT || item.Topic.toLowerCase().includes("entitlements")) &&
      (!filterOptions.PEN ||
        item.Topic.toLowerCase().includes("pension and benefits")) &&
      (!filterOptions.TAX || item.Topic.toLowerCase().includes("tax"))&&
      (!filterOptions.DED || item.Topic.toLowerCase().includes("deductions"))&&
      (!filterOptions.PAY || item.Topic.toLowerCase().includes("pay statements"))&&
      (!filterOptions.APP || item.Topic.toLowerCase().includes("approvals"))&&
      (!filterOptions.MAN || item.Topic.toLowerCase().includes("manager self service"));
    //return true if item matches checkbox || search
    return matchesSearchQuery && matchesFilterOptions;
  });
  // Calculate the range of items to display on the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredArray.slice(indexOfFirstItem, indexOfLastItem);
  // set page to paginaton
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //set page to 1 after filtering
  const handleCheckboxChange = (key, value) => {
    setCurrentPage(1);
    setFilterOptions({
      ...filterOptions,
      [key]: value,
    });
  };

  const handleSetFilters = (value) => {
    const updatedFilterOptions = { ...filterOptions };
    for (const key in updatedFilterOptions) {
      if (Object.prototype.hasOwnProperty.call(updatedFilterOptions, key)) {
        updatedFilterOptions[key] = value;
      }
    }
    setFilterOptions(updatedFilterOptions);
  };

  //***Paginates */

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredArray.length / ITEMS_PER_PAGE);

  // Calculate the range of buttons to display
  const range = 8;
  let startPage = Math.max(1, currentPage - Math.floor(range / 2));
  let endPage = Math.min(totalPages, startPage + range - 1);

  if (totalPages <= range) {
    // If the total number of pages is less than or equal to the range,
    // display all pages from 1 to totalPages.
    startPage = 1;
    endPage = totalPages;
  } else {
    // If the current page is close to the beginning, adjust the endPage
    // to always show 5 buttons from the start.
    if (currentPage <= Math.ceil(range / 2)) {
      endPage = range;
    }
    // If the current page is close to the end, adjust the startPage
    // to always show 5 buttons from the end.
    else if (currentPage + Math.floor(range / 2) >= totalPages) {
      startPage = totalPages - range + 1;
    }
  }

  // Generate the array of buttons to display
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
<>
  <Header />
      
      <main className="container">
	  <h1 property="name" id="wb-cont">Pay system information for employees and managers</h1>

	<p>Search for instructional documentation targeted specifically to employees and mangers related to pay and benefits for the Government of Canada.</p>
	

      <div className="filter-app container">
        <div className="row">
          {/* Left Panel - Checklist Filters */}
          <div className="left-panel col-lg-3 col-md-4">
            <ChecklistFilters
              filterOptions={filterOptions}
              handleCheckboxChange={handleCheckboxChange}
              handleSetFilters={handleSetFilters}
              filteredArray={filteredArray} // Pass the data array as a prop
              handleArchiveChange={handleArchiveChange}
              archiveState={archiveState}
            />
          </div>
          <div className="right-panel col-lg-9 col-md-8">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <FilteredResults
              filteredArray={filteredArray}
              currentItems={currentItems}
              searchQuery={searchQuery}
            />

            {/* Pagination */}
            <div className="pagination" role="group">
              {pageNumbers.map((pageNumber) => (
                <button
                  className={`button ${
                    currentPage === pageNumber ? " active" : ""
                  }`}
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
       </main>
      <Footer />
  </> 
  );
}
