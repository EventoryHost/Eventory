import "../../src/App.css";

function HeroComponent() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 main m-0 w-screen">
        <div className="hero-overlay opacity-90"></div>
        <div className="hero-content flex-col lg:flex-row w-screen">
          <div className="w-screen p-2">
            <h1 className="text-[6rem] font-bold gradient-text text-white">
              Eventory - test
            </h1>
            <p className="py-3 text-white text-2xl font-semibold pl-1">
              Inventory for Events:{" "}
              <span className="">Site Launching Soon! 🚀 🚀</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
