import { useEffect, useState } from "react";
import styles from "./MenuPage.module.css";
const MenuPage = () => {
  const [data, setData] = useState<any>(undefined);
  useEffect(() => {
    fetch("https://b508-46-217-233-171.ngrok-free.app/api/menu/cocktails", {
      headers: {
        "ngrok-skip-browser-warning": true,
        Accept: "application/json",
        "Content-Type": "application/json",
      } as any,
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <>
      <div className={`${styles.menuBanner}`}>
        <div className="container">
          <div className="row justify-content-center align-items-center h-100 mt-md-5 pt-md-5">
            <div className="col-lg-5 col-12 text-white d-flex  flex-column   justify-content-center align-items-lg-start align-items-center  ps-lg-5 px-4 mt-5 mt-sm-0  mb-lg-0 ">
              <h2 className="pb-4 ">МЕНИ</h2>
              <p className="  text-lg-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Provident nesciunt omnis deleniti odit ducimus. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Voluptas, id.
              </p>
            </div>
            <div
              className={`${styles.wrapperCard} col-lg-7 col-12 d-flex justify-content-center gap-2 align-items-center `}
            >
              <div className={`${styles.bannerCard}`}>
                <a
                  href="https://www.instagram.com/koturkafeifilm/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.bannerLink}`}
                >
                  <img src="./images/menu-page/img1.jpg" alt="Menu item 1" />
                  <i className={`${styles.iconLink} bi bi-instagram`}></i>
                </a>
              </div>
              <div className={`${styles.bannerCard}`}>
                <a
                  href="https://www.instagram.com/koturkafeifilm/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.bannerLink}`}
                >
                  <img src="./images/menu-page/img2.jpg" alt="Menu item 2" />
                  <i className={`${styles.iconLink} bi bi-instagram`}></i>
                </a>
              </div>
              <div className={`${styles.bannerCard}`}>
                <a
                  href="https://www.instagram.com/koturkafeifilm/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.bannerLink}`}
                >
                  <img src="./images/menu-page/img3.jpg" alt="Menu item 3" />
                  <i className={`${styles.iconLink} bi bi-instagram`}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-5  ">
          <div className="col-6 mx-auto col-md-12 d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <button className={`${styles.customBtn}`}>Коктели</button>
            <button className={`${styles.customBtn}`}>Кафе</button>
            <button className={`${styles.customBtn}`}>Мезе</button>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <h2 className="text-center pb-5">Коктели</h2>
        <div className="row ">
          <div className="col-lg-8 col-12 d-flex flex-wrap justify-content-center gap-4">
            {data?.cocktails?.map((cocktail: any) => {
              return (
                <label key={cocktail.id} className={`${styles.listedDrinks}`}>
                  <input
                    type="checkbox"
                    className={`${styles.hoverToggle}`}
                    hidden
                  />
                  <img src="./images/menu-page/1.png" alt="Cocktail 1" />
                  <div className={`${styles.hoverDrink}`}>
                    {cocktail.ingredients.map((ingredient: any) => {
                      return <p key={crypto.randomUUID()}>{ingredient}</p>;
                    })}
                  </div>
                </label>
              );
            })}
          </div>
          <div className="col-lg-4 col-12 d-flex flex-column align-items-center mt-4 mt-lg-0">
            <div className={`${styles.popularCard}`}>
              <h5 className="text-center pb-3 pt-5">Популарно</h5>
              <div className={`${styles.popularCardImg}`}>
                <img src="./images/menu-page/1.png" alt="Popular 1" />
              </div>
              {data?.popular?.map((p: any) => {
                return (
                  <h6 key={p.id} className="text-center pt-4">
                    {p.month}
                  </h6>
                );
              })}

              {data?.popular?.map((p: any) => {
                return (
                  <p
                    key={p.id}
                    className={`${styles.popularCardText}  text-center pt-4 pb-2 fs-5`}
                  >
                    {p.title}{" "}
                  </p>
                );
              })}
              {data?.popular?.map((p: any) => {
                return (
                  <p key={p.id} className="lead text-start">
                    {p.description}
                  </p>
                );
              })}
            </div>

            <div className={`${styles.popularCard}`}>
              <h5 className="text-center pb-3 pt-5">Препорачуваме</h5>
              <div className={`${styles.popularCardImg}`}>
                <img src="./images/menu-page/5.png" alt="Popular 1" />
              </div>
              <h6 className="text-center pt-4">
                {data?.recommendations[0]?.month}
              </h6>
              <p
                className={`${styles.popularCardText}  text-center pt-4 pb-2 fs-5`}
              >
                {data?.recommendations[0]?.title}
              </p>
              <p className="lead text-start">
                {data?.recommendations[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
