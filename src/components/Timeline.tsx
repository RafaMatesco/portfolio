import React from "react";

const Timeline: React.FC = () => {
  return (
    <div className="main-timeline text-white px-5">
      <div className="timeline left">
        <div className="card gradient-custom-left">
          <div className="card-body p">
            <i className="fas fa-brain fa-2x mb-3"></i>
            <h4>7:45PM</h4>
            <p className="small text-white-50 mb">May 21</p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
              habeo iusto primis ea eam.
            </p>
            <h6 className="badge bg-body-tertiary text-black mb-0">New</h6>
            <h6 className="badge bg-body-tertiary text-black mb-0">Admin</h6>
          </div>
        </div>
      </div>
      <div className="timeline right">
        <div className="card gradient-custom-right">
          <div className="card-body p">
            <i className="fas fa-camera fa-2x mb-3"></i>
            <h4>8:00 AM</h4>
            <p className="small text-white-50 mb">May 18</p>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
              habeo iusto primis ea eam.
            </p>
            <h6 className="badge bg-body-tertiary text-black mb-0">New</h6>
            <h6 className="badge bg-body-tertiary text-black mb-0">Admin</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
