import { PostGrid } from "../components/PostGrid";
import { CustomNavbar } from "../../UI/components/CustomNavbar";
import "./Home.scss";

export const Business = () => {
  return (
    <section className="home_view container">
      <h4 className="mb-0"> <span>[</span> Business <span>]</span></h4>

      <CustomNavbar />
      <div className="home_view">
        <PostGrid />
      </div>
    </section>
  )
}
