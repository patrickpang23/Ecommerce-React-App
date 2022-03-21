const UpcomingArrivals = () => {
  return (
    //fragments <></>
    <>
      <div className="heading-one">
        <h2>
          <b>Upcoming Arrivals</b>
        </h2>
      </div>

      <section id="slide-container">
                <span id="slider-image-1"></span>
                <span id="slider-image-2"></span>
                <span id="slider-image-3"></span>
                <div id="image-container">
                    <img src="assets/images/surf.jpeg" id="slider-image" alt="slideImg1"/>
                    <img src="assets/images/float.jpeg" id="slider-image" alt="slideImg2"/>
                    <img src="assets/images/hands.jpeg" alt="hands" id="slider-image" alt="slideImg3"/>
                </div>
                <div id="button-container">
                    <a href="#slider-image-1" id="slider-button" aria-label="btn1"></a>
                    <a href="#slider-image-2" id="slider-button" aria-label="btn2"></a>
                    <a href="#slider-image-3" id="slider-button" aria-label="btn3"></a>
                </div>
</section>
    </>
  );
};

export default UpcomingArrivals;
