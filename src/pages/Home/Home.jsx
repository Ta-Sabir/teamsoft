import { Link } from "react-router-dom";
import {
  Hero,
  Numbers,
  Works,
  Services,
  Partners,
} from "../../components/index";
import { blogs } from "../../constants/index";
import Button from "../../components/Button";

const Home = () => {
  return (
    // START HOME PAGE
    <section id="home">
      <div className="container">
        <Hero />
        <Numbers />
        <Works />
        <Services />
        <Partners />
        <div className="blog py-[20px]">
          <div className="blog-title">
            <h2 className="text-[var(--paragraph-color)] text-[25px] text-center font-bold leading-[1.8]">
              مدونة <span className="text-[var(--main-color)]">تيم سوفت</span>
            </h2>
            <p className="text-[#787878] text-[15px] text-center my-[5px]">
              خطوات ونصائح تساعدك على النجاح
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-[55px]">
            {blogs.map((item) => {
              return (
                <Link
                  to={"/article"}
                  key={item.img}
                  className={`blog-box ${
                    item.id === "blog5" ||
                    item.id === "blog6" ||
                    item.id === "blog7" ||
                    item.id === "blog8"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <div className="blog-box-img">
                    <figure>
                      <img
                        src={item.img}
                        alt={item.img}
                        className="w-[100%] h-[100%] xl:w-[250px] xl:h-[250px] rounded-[4px]"
                      />
                    </figure>
                  </div>
                  <div className="blog-box-text p-[5px]">
                    <span className="text-[#787878] text-[14px] font-semibold my-[5px]">
                      {item.date}
                    </span>
                    <h4 className="text-[14px] font-bold leading-[1.6]">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link to={"/blog"} className="block mt-[30px] text-center">
            <Button bg="var(--main-color)" text="var(--white-color)">
              عرض المزيد من المقالات
            </Button>
          </Link>
        </div>
      </div>
    </section>
    // END HOME PAGE
  );
};

export default Home;
