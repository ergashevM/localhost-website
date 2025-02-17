import Workspace from "../assets/workspace.svg";
import Self from "../assets/self.svg";
import Cancel from "../assets/cancel.svg";

const Features = () => {
  return (
    <div className="w-[470px] flex flex-col items-center justify-start -ml-18 mb-8">
      <div className="flex items-center">
        <div className="mr-5 mb-5">
          <img src={Workspace} alt="logo" />
        </div>
        <div className="pb-5">
          <h5 className="font-semibold text-xl tracking-tight">Dedicated workspace</h5>
          <p className="font-normal text-md tracking-tight">A private room equipped with WiFi</p>
        </div>
      </div>
      <div className="-ml-9 flex items-center">
        <div className="mr-5 mb-5">
          <img src={Self} alt="logo" />
        </div>
        <div className="pb-5">
          <h5 className="font-semibold text-xl tracking-tight">Self check-in</h5>
          <p className="font-normal text-md tracking-tight">Check in with just your phone</p>
        </div>
      </div>
      <div className="-ml-20 flex items-center">
        <div className="mr-5">
          <img src={Cancel} alt="logo" />
        </div>
        <div>
          <h5 className="font-semibold text-xl tracking-tight">Free cancellation</h5>
          <p className="font-normal text-md tracking-tight">Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
