import React, { Component } from "react";
import "./galleryIn.css";
import firebase from "firebase";
import Slider from "react-slick";
import Loader from "../../components/loader/loader";

export default class GalleryIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      images: [],
      slider: false,
      currentIndex: 0,
      loading: true,
    };
  }

  componentDidMount() {
    var starred = JSON.parse(localStorage.getItem("starredGallery"));
    firebase
      .firestore()
      .collection("gallery")
      .doc(this.props.match.params.id)
      .get()
      .then((doc) => {
        this.setState({
          images: doc.data().images,
          star: starred
            ? starred.includes(this.props.match.params.id)
              ? true
              : false
            : false,
          loading: false,
        });
      });
  }

  handleStar = () => {
    var starred = JSON.parse(localStorage.getItem("starredGallery"))
      ? JSON.parse(localStorage.getItem("starredGallery"))
      : [];
    if (this.state.star) {
      var filtered = starred.filter((star) => star !== "U1tmSHYcBU4UZjLo5eYe");
      localStorage.setItem("starredGallery", JSON.stringify(filtered));
      this.setState({
        star: false,
      });
    } else {
      starred.push("U1tmSHYcBU4UZjLo5eYe");
      localStorage.setItem("starredGallery", JSON.stringify(starred));
      this.setState({
        star: true,
      });
    }
  };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: (i) => {
        return <img src={this.state.images[i]} alt="" className="imageDots" />;
      },
    };
    return (
      <div className="galleryIn">
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            <div className="heading">
              <h4>Kolkata City Tour</h4>
              <i
                className={
                  this.state.star
                    ? "fas fa-star golden-star"
                    : "fas fa-star grey-star"
                }
                onClick={this.handleStar}
              ></i>
            </div>
            <div className="body">
              {this.state.images.map((image, index) => {
                return (
                  <div
                    onClick={() => {
                      this.setState(
                        {
                          currentIndex: index,
                          slider: true,
                        },
                        () => this.slider.slickGoTo(this.state.currentIndex)
                      );

                      document.getElementsByTagName("body")[0].style.overflow =
                        "hidden";
                    }}
                    key={index}
                  >
                    <img src={image} alt="" />
                  </div>
                );
              })}
            </div>
            {this.state.slider ? (
              <div className="slider">
                <i
                  className="fas fa-times"
                  onClick={() =>
                    this.setState(
                      {
                        slider: false,
                      },
                      () =>
                        (document.getElementsByTagName(
                          "body"
                        )[0].style.overflow = "auto")
                    )
                  }
                ></i>
                <Slider ref={(slider) => (this.slider = slider)} {...settings}>
                  {this.state.images.map((image, index) => {
                    return (
                      <div className="sliderImage" key={index}>
                        <img src={image} alt="" />;
                      </div>
                    );
                  })}
                </Slider>
              </div>
            ) : null}
          </>
        )}
      </div>
    );
  }
}
