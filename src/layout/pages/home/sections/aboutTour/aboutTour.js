import React, { Component } from "react";
import "./aboutTour.css";
import princep from "../../../../../assets/pricep.png";
import Victoria from "../../../../../assets/Victoria-Memorial.jpg";
import Birla from "../../../../../assets/birla-planetarium.jpg";
import Howrah from "../../../../../assets/06howrah-bridge11.jpg";
import Nicco from "../../../../../assets/NiccoPark.jpg";

export default class AboutTour extends Component {
  render() {
    return (
      <div className="aboutTour">
        <div className="tourCard">
          <div className="left">
            <img src={Victoria} alt="" />
          </div>
          <div className="right">
            <h3>VICTORIA MEMORIAL</h3>
            <p>
              The Victoria Memorial is a large marble building in Kolkata, West
              Bengal, India, which was built between 1906 and 1921. It is
              dedicated to the memory of Queen Victoria, then Empress of India,
              and is now a museum under the auspices of the Ministry of Culture.
              The memorial lies on the Maidan, near Jawaharlal Nehru Road.The
              Victoria Memorial's architect was William Emerson (1843–1924),
              president of the Royal Institute of British Architects. <br />
              <br />
              The design is in the Indo-Saracenic revivalist style which uses a
              mixture of British and Mughal elements with Venetian, Egyptian,
              Deccani and Islamic architectural influences. The building is 338
              by 228 feet (103 by 69 m) and rises to a height of 184 feet (56
              m). It is constructed of white Makrana marble. The gardens of the
              Victoria Memorial were designed by Lord Redesdale and David Prain.
              Emerson's assistant, Vincent Jerome Esch, designed the bridge of
              the north aspect and the garden gates.
            </p>
          </div>
        </div>
        <div className="tourCard">
          <div className="left">
            <img src={Birla} alt="" />
          </div>
          <div className="right">
            <h3>BIRLA PLANETARIUM</h3>
            <p>
              The Birla Planetarium (officially M. P. Birla Planetarium) in
              Kolkata, West Bengal, India, is a single-storeyed circular
              structure designed in the typical Indian style, whose architecture
              is loosely styled on the Buddhist Stupa at Sanchi. Situated at
              Chowringhee Road adjacent to the Victoria Memorial, St. Paul's
              Cathedral and the Maidan in Central Kolkata, it is the largest
              planetarium in Asia and the second largest planetarium in the
              world. <br />
              <br />
              Popularly known as taramandal, the planetarium was inaugurated on
              2 July 1963 by the then Prime Minister of India, Jawaharlal Nehru.
              It has an electronics laboratory for design and fabrication of
              science equipment. It has an astronomy gallery that maintains a
              huge collection of fine paintings and celestial models of renowned
              astronomers. The Planetarium also has an astronomical observatory
              equipped with a Celestron C-14 Telescope with accessories such as
              ST6 CCD camera and solar filter. It offers to the public and
              students more than 100 astronomical projects dealing with various
              facts of astronomy, astro-physics, Space Science as well as myths
              concerning stars and planets. It has a capacity of 6800.
            </p>
          </div>
        </div>
        <div className="tourCard">
          <div className="left">
            <img src={Howrah} alt="" />
          </div>
          <div className="right">
            <h3>HOWRAH BRIDGE</h3>
            <p>
              Howrah Bridge is a balanced cantilever bridge over the Hooghly
              River in West Bengal, India. Commissioned in 1943, the bridge was
              originally named the New Howrah Bridge, because it replaced a
              pontoon bridge at the same location linking the two cities of
              Howrah and Kolkata (Calcutta). On 14 June 1965 it was renamed
              Rabindra Setu after the great Bengali poet Rabindranath Tagore,
              who was the first Indian and Asian Nobel laureate. It is still
              popularly known as the Howrah Bridge.
              <br />
              <br />
              The bridge is one of four on the Hooghly River and is a famous
              symbol of Kolkata and West Bengal. The other bridges are the
              Vidyasagar Setu (popularly called the Second Hooghly Bridge), the
              Vivekananda Setu and the newly built Nivedita Setu. It weathers
              the storms of the Bay of Bengal region, carrying a daily traffic
              of approximately 100,000 vehicles and possibly more than 150,000
              pedestrians, easily making it the busiest cantilever bridge in the
              world. The third-longest cantilever bridge at the time of its
              construction, the Howrah Bridge is currently the sixth-longest
              bridge of its type in the world.
            </p>
          </div>
        </div>
        <div className="tourCard">
          <div className="left">
            <img src={Nicco} alt="" />
          </div>
          <div className="right">
            <h3>NICCO PARK</h3>
            <p>
              Nicco Park is an amusement park located in Jheel Meel, Sector - IV
              of Salt Lake City, Kolkata, West Bengal, India. The park was
              created to attract tourists to the state by providing
              family-friendly recreation as well as educative entertainment.
              Nicco Park opened on 13 October 1991 and has since been referred
              to as the Disneyland of West Bengal. Presently, the 40 acre park
              is home to over 35 different attractions and has served over 24
              million customers. Nicco Park also provides a "green" environment.
              <br /> <br />
              The concept of an amusement park in Kolkata began with the 300th
              anniversary of the recorded founding of Kolkata (then Calcutta).
              While planning was under way for the tricentennial celebrations by
              the ruling State Government, Rajive Kaul, the current Chairman of
              Nicco Group, was in the US on a family holiday to Disneyland. As
              per the story, when Kaul returned, there was an inquiry as to why
              he left for America when he was very much required back home for
              the planning process. Supposedly, Rajive replied, "I'd gone to see
              if I could create a Disneyland here." What at first seemed to be
              just an excuse to justify his absence actually materialized to a
              joint venture with the West Bengal government.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
