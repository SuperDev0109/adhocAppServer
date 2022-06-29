import "./showrestaurant.scss";
import Card from "../../UI/card/card";
import {SortDropBox, FilterDropBox} from "../../UI/dropbox/dropbox";
const ShowRestaurant = () => {
  return (
    <div className="showres">
      <div className="row res-option m-0">
        <div className="col-sm-6 d-flex titles p-0 align-items-center justify-content-center">
          <div className="title">Restaurants</div>
          <div className="count">420 parameters</div>
        </div>
        <div className="col-sm-6 functions d-flex justify-content-center">
          <FilterDropBox></FilterDropBox>
          <SortDropBox></SortDropBox>
        </div>
      </div>
      <div className="row">
        {(() => {
          let td = [];
          for (let i = 1; i <= 15; i++) {
            td.push(
              <div className="col-12 col-md-6 col-lg-4">
                <Card></Card>
              </div>
            );
          }
          return td;
        })()}
      </div>
    </div>
  );
};
export default ShowRestaurant;
