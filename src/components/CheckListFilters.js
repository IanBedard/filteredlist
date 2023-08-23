// components/ChecklistFilters.js
import React from "react";
import "./resultCard.css";

const ChecklistFilters = ({
  filterOptions,
  handleCheckboxChange,
  handleSetFilters,
  filteredArray,
  handleArchiveChange,
  archiveState,
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
      id: "Ded",
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

  return (
   
      <div className="panel-body">
      
    <h2>Filters</h2>
        <h3>Role</h3>
        {makeList(roles, getCountForRole)}
      
        <h3>Topic</h3>
        {makeList(topics.slice(0, 3), getCountForTopic)}
        <details id="showmore">
        <summary>Show more</summary>
        {makeList(topics.slice(3, topics.length), getCountForTopic)}</details>
  <br></br>
        <button
          className="btn btn-outline-danger"
          onClick={() => handleSetFilters(false)}
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

            <div className="feedback">
              <h2>Feedback</h2>
              <p>We're always looking for ways to improve this page. Email your suggestions or questions to <a href="mailto:tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca">tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca</a></p>
            </div>
      </div>

  );
};

export default ChecklistFilters;
