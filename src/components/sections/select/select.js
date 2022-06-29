import "./select.scss";

const Select = () => {
  return (
    <div className="select row container-fluid d-flex justify-content-between">
      <div className="option col-5">Restaurants</div>
      <div className="option col-3">Hotels</div>
      <div className="option col-3">Map</div>
    </div>
  );
};
export default Select;
