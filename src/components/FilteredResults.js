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
      <p className=""
        dangerouslySetInnerHTML={{
          __html: highlightText(item.Title, searchQuery),
        }}
      />
      
    </div>
  );
};

const FilteredResults = ({ currentItems, searchQuery }) => {
 function reload(){
  window.location.reload()
 }
  return (
    <div className="filtered-results">
      {currentItems.length > 0 ? (
        currentItems.map((item, index) => (
          <ResultCard key={index} item={item} searchQuery={searchQuery} />
        ))
      ) : (
        <section className="alert alert-warning">
            <h3>Sorry, we couldn't find a procedure, job aid or instruction document that match the filters selected</h3>
            <p>please try</p>
                <ul>
                    <li>removing some filter</li>
                    <li>making sure all search terms are spelled correctly</li>
                    <li ><a href="#" class="alert-link" onClick={reload}>clearing all filters</a></li>
                </ul>
                <p>We're always looking for ways to improve this page. Email your suggestions or questions to <a href="mailto:tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca">tpsgc.dgapsruop-pabcsbpu.pwgsc@tpsgc.gc.ca</a></p>
        </section>
      )}
    </div>
  );
};

export default FilteredResults;
