import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const { toursList } = toursListPage;

const ToursListRight = () => {
  return (
    <div className="tours-list__right">
      <div className="tours-list__inner">
        {toursList.map(
          ({ id, image, superb, title, rate, text, date, user, map }) => (
            <div key={id} className="tours-list__single">
              <div className="tours-list__img">
                <Image
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                  alt={title}
                />
                <div className="tours-list__icon">
                  <Link href="/tour-details">
                    <a>
                      <i className="fa fa-heart"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="tours-list__content">
                <div className="tours-list__stars">
                  <i className="fa fa-star"></i> {superb} Superb
                </div>
                <h3 className="tours-list__title">
                  <Link href="/tour-details">{title}</Link>
                </h3>
                <p className="tours-list__rate">
                  <span>${rate}</span> / Per Person
                </p>
                <p className="tours-list__text">{text}</p>
                <ul className="tours-list__meta list-unstyled">
                  <li>
                    <Link href="/tour-details">
                      <a>
                        <i className="far fa-calendar"></i>
                        {date}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <a>
                        <i className="far fa-user-circle"></i>
                        {user}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-details">
                      <a>
                        <i className="far fa-map"></i>
                        {map}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ToursListRight;
