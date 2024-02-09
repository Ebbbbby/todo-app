import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredTodos } from "../redux/actions";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(filteredTodos(filter));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">INCOMPLETED</option>\{" "}
      </select>

      <button className="text-sm px2 py-1 bg-purple-500 text-white ml-2 rounded">
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;