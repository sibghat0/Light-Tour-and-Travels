import React, { Component } from "react";
import Slider from "react-slick";
import "./cars.css";

import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.jpg";
import car3 from "../../../assets/car3.jpg";
import car4 from "../../../assets/car4.jpg";

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="cars-cont">
        {/* <h4>First Slider</h4> */}
        <div className="topSlider">
          <Slider
            className="cont"
            fade={true}
            speed={1000}
            infinite={true}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
          >
            <div>
              <img src={car1} alt="img" />
            </div>
            <div>
              <img src={car2} alt="img" />
            </div>
            <div>
              <img src={car3} alt="img" />
            </div>
            <div>
              <img src={car4} alt="img" />
            </div>
          </Slider>
        </div>
        <Slider
          className="cont"
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={false}
          focusOnSelect={true}
          fade={true}
          speed={1000}
          infinite={true}
        >
          <div className="sec-cont">
            <div className="car-des">
              <h4>MARUTI SUZUKI SWIFT DEZIRE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iure alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet iure alias magni. Architecto, eos odio
                possimus doloribus minima voluptas perferendis dolorum corrupti
                ex maxime quasi, facilis officiis facere atque. Vitae.Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure
                alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.
              </p>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
          </div>
          <div className="sec-cont">
            <div className="car-des">
              <h4>MARUTI SUZUKI SWIFT DEZIRE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iure alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet iure alias magni. Architecto, eos odio
                possimus doloribus minima voluptas perferendis dolorum corrupti
                ex maxime quasi, facilis officiis facere atque. Vitae.Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure
                alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.
              </p>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
          </div>
          <div className="sec-cont">
            <div className="car-des">
              <h4>MARUTI SUZUKI SWIFT DEZIRE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iure alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet iure alias magni. Architecto, eos odio
                possimus doloribus minima voluptas perferendis dolorum corrupti
                ex maxime quasi, facilis officiis facere atque. Vitae.Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure
                alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.
              </p>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
          </div>
          <div className="sec-cont">
            <div className="car-des">
              <h4>MARUTI SUZUKI SWIFT DEZIRE</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                iure alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eveniet iure alias magni. Architecto, eos odio
                possimus doloribus minima voluptas perferendis dolorum corrupti
                ex maxime quasi, facilis officiis facere atque. Vitae.Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure
                alias magni. Architecto, eos odio possimus doloribus minima
                voluptas perferendis dolorum corrupti ex maxime quasi, facilis
                officiis facere atque. Vitae.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eveniet iure alias magni.
                Architecto, eos odio possimus doloribus minima voluptas
                perferendis dolorum corrupti ex maxime quasi, facilis officiis
                facere atque. Vitae.
              </p>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
            <div className="car-des">
              <h4>HIGHLIGHT</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident magnam doloribus consectetur totam temporibus
                  accusantium repellendus! Corporis, amet reprehenderit? Ex
                  delectus error totam quisquam incidunt fugiat dicta, nobis
                  repellendus sapiente?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, eveniet nisi quam aspernatur maiores nihil est. Beatae
                  assumenda ex tempore cupiditate vel natus. Nisi non
                  consequatur aperiam aliquam. Pariatur, nisi?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Porro, id laborum. Sed mollitia sint incidunt minus
                  perferendis repellendus, officiis soluta voluptatum cumque
                  laboriosam deserunt, maxime tempora accusamus, maiores debitis
                  fuga.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  autem repudiandae nemo saepe quidem officiis. Temporibus quas
                  fugiat consequuntur, pariatur, illum non deleniti iure qui sed
                  officiis dolor quae. Architecto!
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
