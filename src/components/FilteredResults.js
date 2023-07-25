// components/FilteredResults.js
import React from "react";
import "./resultCard.css";

const ResultCard = ({ item, searchQuery }) => {
  const highlightText = (text, searchQuery) => {
    if (!searchQuery) return text;

    const regex = new RegExp(`(${searchQuery})`, "gi");
    return text.replace(regex, '<span class="highlighted">$1</span>');
  };
  console.log(searchQuery);
  return (
    <div className="result-card">
      {/* Display item details here */}
      <h3
        dangerouslySetInnerHTML={{
          __html: highlightText(item.Title, searchQuery),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: highlightText(item.Description, searchQuery),
        }}
      />
      <a href={item.URL}>Read More</a>
    </div>
  );
};

const FilteredResults = ({ currentItems, searchQuery }) => {
  return (
    <div className="filtered-results">
      {currentItems.length > 0 ? (
        currentItems.map((item, index) => (
          <ResultCard key={index} item={item} searchQuery={searchQuery} />
        ))
      ) : (
        <div className="aler alert-warning">
            <h3>Sorry, we couldn't find a procedure, job aid or instruction document that match the filters selected</h3>
            <p>please try</p>
                <ul>
                    <li>removing some filter</li>
                    <li>making sure all search terms are spelled correctly</li>
                    <li>clearing all filters</li>
                </ul>
        </div>
      )}
    </div>
  );
};

export default FilteredResults;
