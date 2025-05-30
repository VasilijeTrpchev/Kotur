import styles from "./GalleryPage.module.css";

const GalleryPage = () => {
  return (
    <div className={styles.galleryPage}>
      <div className={styles.hero}> </div>
      <h1 className="text-center text-white my-5">Поминати настани</h1>
      {/* {event.map((event) => {
        <PastEvent event={event} key={event.id} />;
      })} */}
      <div className={`container-fluid ${styles.bgDark} my-5 py-5`}>
        <div className="row text-white p-5">
          <div className="col-lg-3 col-12 d-flex flex-column justify-content-center  text-center text-lg-start">
            <h2 className="pb-3">Пролетна квечерина</h2>
            <h6>Мис Стон вкусни закуски + аперативни коктели</h6>
          </div>
          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
            <div className={`${styles.scrollContainer} h-100`}>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img1.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img2.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img3.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img1.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img2.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img3.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.bgDark} my-5 py-5`}>
        <div className="row text-white p-5">
          <div className="col-lg-3 col-12 d-flex flex-column justify-content-center  text-center text-lg-start">
            <h2 className="pb-3">Бар Училница</h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eligendi, porro.
            </h6>
          </div>
          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
            <div className={`${styles.scrollContainer} h-100`}>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img4.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img5.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img6.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img4.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img5.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12  mb-4 h-100">
                <img
                  src="/images/gallery-page/img6.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-fluid ${styles.bgDark} my-5 py-5`}>
        <div className="row text-white p-5 ">
          <div className="col-lg-3 col-12 d-flex flex-column justify-content-center  text-center text-lg-start">
            <h2 className="pb-3">Музичка Селекција</h2>
            <h6>Мис Стон вкусни закуски + аперативни коктели</h6>
          </div>
          <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-row justify-content-center align-items-center ">
            <div className={`${styles.scrollContainer} h-100`}>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img8.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img9.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img10.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img8.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img9.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-5 col-12 mb-4 h-100">
                <img
                  src="/images/gallery-page/img10.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`${styles.customBtn} d-flex align-items-center justify-content-center mx-auto my-5`}
      >
        Види повеќе
      </button>
    </div>
  );
};

export default GalleryPage;
