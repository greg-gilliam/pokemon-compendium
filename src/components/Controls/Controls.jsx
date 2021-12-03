import React from "react";
import FilterForm from "../../Forms/FilterForm";

export default function Controls({ types, filterChange, selectedType }) {
  return (
    <div className="controlsContainer">
      <FilterForm
        types={types}
        filterChange={filterChange}
        selectedType={selectedType}
      />
    </div>
  );
}
