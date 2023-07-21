// src/App.js
import { useState } from "react";
import { data } from "./data/data-eng.js";
import {BiListPlus} from 'react-icons/bi'
import React from "react";
import "./App.css";
import "./bootstrap.css";

export default function App() {
  //switch button
const [switchState, setSwitchState] = useState(false);

const handleSwitchChange = () => {
  setSwitchState((prevState) => !prevState);
};
  //Setting up React component structure
  const [filterOptions, setFilterOptions] = useState({
    CA: true,
    EE: true,
    MA: true,
    FI: true,
    HR: true,
    S33: true,
    SAO: true,
    TK: true,
    //topics
    ACT: true,
    APR: true,
    ARR: true,
    AUT: true,
    BEN: true,
    CAL: true,
    CEN: true,
    COD: true,
  });
  const roles = [
    {
      id: "CA",
      name: "Compensation Advisor",
    },
    {
      id: "EE",
      name: "Employee",
    },
    {
      id: "MA",
      name: "Manager",
    },
    {
      id: "FI",
      name: "Financial Officer",
    },
    {
      id: "HR",
      name: "Human Resources",
    },
    {
      id: "S33",
      name: "Section 33 Authorizer",
    },
    {
      id: "SAO",
      name: "Security Access Control Officer",
    },
    {
      id: "TK",
      name: "Timekeeper",
    },
  ];


  const topic = [
    {
      id: "ACT",
      name: "Acting",
    },
    {
      id: "APR",
      name: "Approvals",
    },
    {
      id: "ARR",
      name: "Arrears",
    },
    {
      id: "AUT",
      name: "Authorize Payroll",
    },
    {
      id: "BEN",
      name: "Benefits",
    },
    { 
      id: "CAL",
      name: "Calendars",
    },
    {
      id: "CEN",
      name: "Central Index",
    },
    {
      id: "COD",
      name: "Codes",
    },
  ];
  //pagination
  const ITEMS_PER_PAGE = 8;
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
      (filterOptions.CA && item.Role.toLowerCase().includes("compensation advisor")) ||
      (filterOptions.EE && item.Role.toLowerCase().includes("employee")) ||
      (filterOptions.MA && item.Role.toLowerCase().includes("manager")) ||
      (filterOptions.FI && item.Role.toLowerCase().includes("financial officer")) ||
      (filterOptions.HR && item.Role.toLowerCase().includes("human resource")) ||
      (filterOptions.S33 && item.Role.toLowerCase().includes("section 33 authorizer")) ||
      (filterOptions.SAO && item.Role.toLowerCase().includes("security access control officer")) ||
      (filterOptions.TK && item.Role.toLowerCase().includes("timekeeper")) ||
    //Topic
      (filterOptions.ACT && item.Topic.toLowerCase().includes("acting")) ||
      (filterOptions.APR && item.Topic.toLowerCase().includes("approvals")) ||
      (filterOptions.ARR && item.Topic.toLowerCase().includes("arrears")) ||
      (filterOptions.AUT && item.Topic.toLowerCase().includes("authorize payroll")) ||
      (filterOptions.BEN && item.Topic.toLowerCase().includes("benefits")) ||
      (filterOptions.CAL && item.Topic.toLowerCase().includes("calendars")) ||
      (filterOptions.CEN && item.Topic.toLowerCase().includes("central index")) ||
      (filterOptions.COD && item.Topic.toLowerCase().includes("codes"));
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
    setCurrentPage(1)
    setFilterOptions({
      ...filterOptions,
      [key]: value,
    });
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
     
          
            <div className="form-floating">
            
              <input
                className="form-control" 
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              </div>
           

            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  
                >
                  Roles <BiListPlus/>
                </a>
                <div className="dropdown-menu">
                  <div>
                    {roles.map((role) => {

        // Filter data for the current role
        const filteredDataForRole = filteredArray.filter((item) =>
        item.Role && item.Role.toLowerCase().includes(role.name.toLowerCase())
      );

      console.log("Role:", role.name.toLowerCase());
      console.log("Filtered Data:", filteredDataForRole);



                      return(
                      <div key={role.id} className="dropdown-item">
                    
                        <label className="form-check-label">
                         
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={filterOptions[role.id]}
                            onChange={(e) =>
                              handleCheckboxChange(role.id, e.target.checked)
                            }
                          />
                        {role.name}   <span class="badge bg-primary rounded-pill">{filteredDataForRole.length}</span></label>
                      </div>
                    )})}
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  data-bs-toggle="dropdown"
          
                >
                  Topic  <BiListPlus/>
                </a>
                <div className="dropdown-menu">
                  <div>
                  {topic.map((topic) => {

// Filter data for the current topic
const filteredDataForTopic = filteredArray.filter((item) =>
item.Topic && item.Topic.toLowerCase().includes(topic.name.toLowerCase())
);

console.log("Topic:", topic.name.toLowerCase());
console.log("Filtered Data:", filteredDataForTopic);



              return(
              <div key={topic.id} className="dropdown-item">
            
                <label className="form-check-label">
         
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={filterOptions[topic.id]}
                    onChange={(e) =>
                      handleCheckboxChange(topic.id, e.target.checked)
                    }
                  />
                        {topic.name}   <span class="badge bg-primary rounded-pill">{filteredDataForTopic.length}</span></label>
              </div>
            )})}
                  </div>
                </div>
              </li>
              <li className="nav-item">
              <div className="form-check form-switch">
                <label className="form-check-label" >
        <input className="form-check-input" type="checkbox" checked={switchState} onChange={handleSwitchChange} /></label>
        <span>{switchState ? 'Archived' : 'Live'}</span>
      </div>
      </li>
            </ul>
          </div>
       
      </nav>

      <div className="board">
        <div className="result">
          <h2>{filteredArray.length}</h2>
          <ul>
            {currentItems.map((item, index) => (
              <li key={index}>
                <a href={item.URL}>{item.Title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Pagination */}
      <div className="pagination btn-group me-2" role="group">
        {Array.from(
          { length: Math.ceil(filteredArray.length / ITEMS_PER_PAGE) },
          (_, index) => (
            <button
              className="btn btn-secondary"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
