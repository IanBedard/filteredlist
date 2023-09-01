// components/ChecklistFilters.js
// components/ChecklistFilters.js
import React, { useState } from "react";


const ChecklistFilters = ({
  filterOptions,
  handleCheckboxChange,
  handleSetFilters,
  filteredArray,
  handleArchiveChange,
  archiveState

}) => {
  const roles = [
    {
      id: "EE",
      name: "Employee",
    },
    {
      id: "MA",
      name: "Manager",
    }
  ];

  const topics = [
    {
      id: "APP",
      name: "Approvals",
    },
    {
      id: "DED",
      name: "Deductions",
    },
    {
      id: "EME",
      name: "Emergency salary advance and priority payments",
    },
    {
      id: "ENT",
      name: "Entitlements",
    },
    {
      id: "LEA",
      name: "Leave",
    },
    {
      id: "MAN",
      name: "Manager self service",
    },
    {
      id: "PAY",
      name: "Pay statements",
    },
    {
      id: "PEN",
      name: "Pension and benefits",
    },
    {
      id: "RET",
      name: "Retroactive",
    },
    {
      id: "SAL",
      name: "Salary administration",
    },
    {
      id: "TAX",
      name: "Tax",
    },
    {
      id: "UNI",
      name: "Union",
    }
  ];
  const getCountForRole = (roleId) => {
    const filteredDataForRole = filteredArray.filter(
      (item) =>
        filterOptions[roleId] &&
        item.Role.toLowerCase().includes(
          roles.find((r) => r.id === roleId).name.toLowerCase()
        )
    );
    return filteredDataForRole.length;
  };

  const getCountForTopic = (topicId) => {
    const filteredDataForTopic = filteredArray.filter(
      (item) =>
        filterOptions[topicId] &&
        item.Topic.toLowerCase().includes(
          topics.find((t) => t.id === topicId).name.toLowerCase()
        )
    );
    return filteredDataForTopic.length;
  };

  const makeList = (list, _countFn) => {
    return list.map((item) => (
      <div key={item.id} className="dropdown-item">
        <label className="form-check-label checkbox" >
          <input
            className="form-check-input"
            type="checkbox"
            checked={filterOptions[item.id]}
            onChange={(e) =>
              handleCheckboxChange(item.id, e.target.checked)
            }
          />
          {item.name}{" "}
          <span>
           ({_countFn(item.id)}) 
          </span>
        </label>
      </div>
    ))
  }
  
  const [showToggle, setShowToogle] = useState(false);
 let list;
 if (showToggle){
  list =  makeList(topics.slice(3, topics.length), getCountForTopic)
 }
 else{
  list = ""
 }
  return (
   
      <div className="">
      
    <h2>Filters</h2>
        <h3>Role</h3>
        <div className="checklist">
        {makeList(roles, getCountForRole)}
        </div>
        <h3>Topic</h3>
        <div className="checklist">
        {makeList(topics.slice(0, 3), getCountForTopic)}
        <p onClick={() => setShowToogle(!showToggle)}>
        <summary className="showmore">{showToggle?"Show less":"Show more"}</summary></p>
      
        {list}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => window.location.reload()
         }
        >
          Clear All
        </button>
        {/*<div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="archiveSwitch"
            checked={archiveState}
            onChange={handleArchiveChange}
          />
          <label className="form-check-label" htmlFor="archiveSwitch">
            Archive
          </label>
              </div> */}

            <div className="feedback-screen">
              <h2>Feedback</h2>
              <p>We're always looking for ways to improve this page. Email your suggestions or questions to <a href="mailto:tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca">tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca</a></p>
            </div>
      </div>

  );
};

export default ChecklistFilters;
