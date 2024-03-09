import { useEffect, useState } from "react";
import _ from "lodash";
import "./index.css";

const tripData = [
  {
    id: 1,
    title: "Adventure",
    data: [
      {
        name: "White mount Safe Trip With Sefguide",
        startPrice: "500.00",
        image: "https://bit.ly/3VbGyDD",

        guidedBy: {
          profile: "Mr. Jameson",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
      },
      {
        name: "The Aurora Mountain Midnight Trip",
        startPrice: "1000.00",
        image: "https://bit.ly/3Twatp3",

        guidedBy: {
          profile: "Mr. SnowJack",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      },
      {
        name: "The Beauty of the Sun Lake ",
        startPrice: "800",
        image: "https://bit.ly/43bSCH5",

        guidedBy: {
          profile: "Mr. Seargane",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
        },
      },
      {
        name: "Surfing on The Blue Sea",
        startPrice: "500",
        image: "https://bit.ly/3Tad5az",

        guidedBy: {
          profile: "Mr. Bambang",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
        },
      },
      {
        name: "Midnight Milky Way Dessert Trip",
        startPrice: "1500",
        image: "https://bit.ly/3IulXmt",

        guidedBy: {
          profile: "Mr. Lincoln",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
        },
      },
      {
        name: "The Magnificent Bromo Mountain",
        startPrice: "500",
        image: "https://bit.ly/3v7nRXd",

        guidedBy: {
          profile: "Mr. Jaeson",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Vacation",
    data: [
      {
        name: "Surfing on The Blue Sea",
        startPrice: "500",
        image: "https://bit.ly/3Tad5az",

        guidedBy: {
          profile: "Mr. Bambang",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
        },
      },
      {
        name: "Midnight Milky Way Dessert Trip",
        startPrice: "1500",
        image: "https://bit.ly/3IulXmt",

        guidedBy: {
          profile: "Mr. Lincoln",
          image: "https://randomuser.me/api/portraits/men/9.jpg",
        },
      },
      {
        name: "The Magnificent Bromo Mountain",
        startPrice: "500",
        image: "https://bit.ly/3v7nRXd",

        guidedBy: {
          profile: "Mr. Jaeson",
          image: "https://randomuser.me/api/portraits/men/21.jpg",
        },
      },
      {
        name: "White mount Safe Trip With Sefguide",
        startPrice: "500.00",
        image: "https://bit.ly/3VbGyDD",

        guidedBy: {
          profile: "Mr. Jameson",
          image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
      },
      {
        name: "The Aurora Mountain Midnight Trip",
        startPrice: "1000.00",
        image: "https://bit.ly/3Twatp3",

        guidedBy: {
          profile: "Mr. SnowJack",
          image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      },
      {
        name: "The Beauty of the Sun Lake ",
        startPrice: "800",
        image: "https://bit.ly/43bSCH5",

        guidedBy: {
          profile: "Mr. Seargane",
          image: "https://randomuser.me/api/portraits/men/12.jpg",
        },
      },
    ],
  },
];

function Discover() {
  const [activeFilter, setActiveFilter] = useState(tripData[0].title);
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    const currentTrip = _.find(tripData, {
      title: activeFilter,
    });
    setTripList(currentTrip.data);
  }, [activeFilter]);
  return (
    <div className="discover-container">
      <div className="discover-header">
        <h3>Search Trip, Places You Want</h3>
        <p>Get ready for the new experience</p>
      </div>

      <div className="discover-tabs">
        {tripData.map((item) => (
          <div
            key={item.id}
            className={
              activeFilter === item.title
                ? "active-discover-tab"
                : "discover-tab"
            }
            onClick={() => setActiveFilter(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="card-container">
        <ul className="cards">
          {tripList.map((trip) => (
            <li key={trip.id} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={trip.image} />
                  <span className="card_price">
                    <span>GHc</span> {trip.startPrice}
                  </span>
                </div>
                <div className="card_content">
                  <h2 className="card_title">{trip.name}</h2>
                  <div className="card_text">
                    <span>Start from</span>
                    <p>GHc {trip.startPrice} /person</p>
                  </div>

                  <div className="card_text ">
                    <span>Guided By</span>
                    <div className="row">
                      <img
                        className="guidedby"
                        src={trip.guidedBy.image}
                        alt=""
                      />
                      <p> {trip.guidedBy.profile} </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Discover;
