import Footer from "../components/Footer";
import NavBarPrivate from "../components/NavBarPrivate"
import Trabajos from "../components/Trabajos"

const Jobs = () => {
  return (
    <div className="container-views-jobs">
      <NavBarPrivate />
      <Trabajos />
      <Footer />
    </div>
  );
};

export default Jobs;
