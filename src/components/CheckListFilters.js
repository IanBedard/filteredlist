// components/ChecklistFilters.js
import React from "react";

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
      id: "RET",
      name: "Retroactive",
    },
    {
      id: "UNI",
      name: "Union",
    },
    {
      id: "EME",
      name: "Emergency salary advance and priority payments",
    },
    {
      id: "LEA",
      name: "Leave",
    },
    {
      id: "SAL",
      name: "Salary administration",
    },
    {
      id: "ENT",
      name: "Entitlements",
    },
    {
      id: "PEN",
      name: "Pension and benefits",
    },
    {
      id: "TAX",
      name: "Tax",
    },
    {
      id: "Ded",
      name: "Deductions",
    },
    {
      id: "PAY",
      name: "Pay statements",
    },
    {
      id: "APP",
      name: "Approvals",
    },
    {
      id: "MAN",
      name: "Manager self service",
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

  return (
   
      <div className="panel-body">
      
  
        <h2>Roles</h2>
        {roles.map((role) => (
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
              {role.name}{" "}
              <span className="badge bg-primary rounded-pill">
                {getCountForRole(role.id)}
              </span>
            </label>
          </div>
        ))}
      
        <h2>Topics</h2>
        {topics.map((topic) => (
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
              {topic.name}{" "}
              <span className="badge bg-primary rounded-pill">
                {getCountForTopic(topic.id)}
              </span>
            </label>
          </div>
        ))}

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
      </div>

  );
};

export default ChecklistFilters;
