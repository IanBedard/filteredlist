// components/ChecklistFilters.js
import React from 'react';

const ChecklistFilters = ({ filterOptions, handleCheckboxChange, handleSetFilters, filteredArray, handleArchiveChange, archiveState }) => {
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
    
    
      const topics = [
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
      const getCountForRole = (roleId) => {
        const filteredDataForRole = filteredArray.filter(
          (item) => filterOptions[roleId] && item.Role.toLowerCase().includes(roles.find((r) => r.id === roleId).name.toLowerCase())
        );
        return filteredDataForRole.length;
      };
    
      const getCountForTopic = (topicId) => {
        const filteredDataForTopic = filteredArray.filter(
          (item) => filterOptions[topicId] && item.Topic.toLowerCase().includes(topics.find((t) => t.id === topicId).name.toLowerCase())
        );
        return filteredDataForTopic.length;
      };
    
      return (
        <div>
          <h2>Roles</h2>
          {roles.map((role) => (
            <div key={role.id} className="dropdown-item">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={filterOptions[role.id]}
                  onChange={(e) => handleCheckboxChange(role.id, e.target.checked)}
                />
                {role.name} <span className="badge bg-primary rounded-pill">{getCountForRole(role.id)}</span>
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
                  onChange={(e) => handleCheckboxChange(topic.id, e.target.checked)}
                />
                {topic.name} <span className="badge bg-primary rounded-pill">{getCountForTopic(topic.id)}</span>
              </label>
            </div>
          ))}
    
          <button className="btn btn-outline-danger" onClick={() => handleSetFilters(false)}>
            Clear All
          </button>
          <div className="form-check form-switch mt-3">
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
      </div>
        </div>
      );
    };
    
    export default ChecklistFilters;