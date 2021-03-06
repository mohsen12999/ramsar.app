import React from "react";
import { IFacility } from "../shares/Interfaces";
import { APP_LOGO } from "../shares/Constants";
import { MakeUrl } from "../shares/URLs";

interface IFacilityThumbProps {
  facility: IFacility;
}

const FacilityThumb: React.FC<IFacilityThumbProps> = ({ facility }) => (
  <div className="card shadow p-6 lg:card-side bordered">
    <figure>
      <img
        width="100"
        alt={facility.name}
        src={facility.img ? MakeUrl(facility.img) : MakeUrl(APP_LOGO)}
      />
    </figure>
    <div className="card-body justify-evenly">
      <h2 className="card-title vazir-font">{facility.name}</h2>
      {facility.description && facility.description.length > 0 && (
        <p className="vazir-font">{facility.description}</p>
      )}
      <p className="vazir-font">آدرس: {facility.address}</p>
      {facility.tel && facility.tel.length > 0 && (
        <p className="vazir-font">
          تلفن:
          <a className="btn btn-link" href={"tel:" + facility.tel}>
            {facility.tel}
          </a>
        </p>
      )}
    </div>
  </div>
);

export default FacilityThumb;
