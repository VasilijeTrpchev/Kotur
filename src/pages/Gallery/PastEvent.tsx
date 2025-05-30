import styles from "./Gallery.module.css";

const PastEvent = ({ event }: any) => {
  return (
    <div className={`container-fluid ${styles.bgDark} my-5 py-5`}>
      <div className="row text-white p-5">
        <div className="col-lg-3 col-12 d-flex flex-column justify-content-center  text-center text-lg-start">
          <h2 className="pb-3">{event.title} Пролетна квечерина</h2>
          <h6>
            {event.description} Мис Стон вкусни закуски + аперативни коктели
          </h6>
        </div>
        <div className="col-lg-9 col-12 mt-5 mt-lg-0 d-flex flex-row justify-content-center align-items-center">
          <div className={`${styles.infiniteScroll} h-100`}>
            <div className={`${styles.scrollContainer} h-100`}>
              {/* {event.images.map(image)=>{
                <div className="col-md-4 col-6 mb-4 h-100" key={image.id}>
                <img
                    src={image.url}
                    alt={`Gallery Image ${image.id}`}
                    className={styles.image}
                  />
                </div>
              }} */}
              <div className="col-md-4 col-6 mb-4 h-100">
                <img
                  src="/images/gallery-page/img1.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-4 col-6 mb-4 h-100">
                <img
                  src="/images/gallery-page/img2.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-4 col-6 mb-4 h-100">
                <img
                  src="/images/gallery-page/img3.jpg"
                  alt="Gallery Image 3"
                  className={styles.image}
                />
              </div>
              <div className="col-md-4 col-6 mb-4 h-100">
                <img
                  src="/images/gallery-page/img1.jpg"
                  alt="Gallery Image 1"
                  className={styles.image}
                />
              </div>
              <div className="col-md-4 col-6 mb-4 h-100">
                <img
                  src="/images/gallery-page/img2.jpg"
                  alt="Gallery Image 2"
                  className={styles.image}
                />
              </div>
              <div className="col-md-4 col-6 mb-4 h-100">
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
    </div>
  );
};

export default PastEvent;
