import "./home.css";
import { Navbar } from "../../component/navbar/navbar";
import { Sidebar } from "../../component/sidebar/sidebar";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-row">
        <div>
          <Sidebar />
        </div>
        <section className="flex-row main-content">
          <section className="bd-sm content"></section>
          <aside className="bd-left padding-edges aside">
            <img src="" alt="" />
            <h3>Mahabaratham</h3>
            <button>Follow</button>
          </aside>
        </section>
      </div>
    </div>
  );
};
