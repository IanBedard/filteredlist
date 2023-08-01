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
              <span className="badge rounded-pill">
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

            <div>
              <h3>Feedback</h3>
              <p>We're always looking for ways to improve this page. Email your suggestions or questions to <a href="mailto:tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca">tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca</a></p>
            </div>
      </div>

  );
};

export default ChecklistFilters;
