import { PostGrid } from "../components/PostGrid";
import { CustomNavbar } from "../../UI/components/CustomNavbar";
import "./Home.scss";



export const Home = () => {
  return (
    <>
      <section className="home_view container">
        <h4 className="mb-0"> <span>[</span> Making your Life Easier  <span>]</span></h4>
        <h1>Discovering the World</h1>
        <CustomNavbar />
        <div className="home_view">
          <PostGrid />
        </div>
      </section>

    </>
  )
}
