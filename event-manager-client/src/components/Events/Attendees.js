import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import loader from '../../loader.svg';
import '../../styles/attendee.css';

function Attendees() {
  const [users, setUsers] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers({ hits: data });
      setIsLoading(false);
    };
    fetchData();
  }, [setUsers]);

  return (
    <>
      {isLoading ? (
        <div className="loader" id="loader">
          <img src={loader} alt="loading" />
        </div>
      ) : (
        <div>
          <h3>List of Attendees</h3>
          <div className="flex-container">
            {users.hits &&
              users.hits.map((item) => (
                <figure className="attendee fir-image-figure" key={item.id}>
                  <a
                    class="fir-imageover"
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/simonhlee97"
                  >
                    <img
                      class="fir-author-image fir-clickcircle"
                      src="https://randomuser.me/api/portraits/men/83.jpg"
                      alt="randomface"
                    />
                    <div class="fir-imageover-color"></div>
                    <img
                      class="fir-imageover-image fir-clickcircle"
                      src="https://fir-rollup.firebaseapp.com/twitter-logo.png"
                      alt="twit-prof-pic"
                    />
                  </a>
                  <figcaption>
                    <div class="fig-author-figure-title">{item.name}</div>
                    <div class="fig-author-figure-title">Engineer at {item.company.name}</div>
                    <div class="fig-author-figure-title">Signed up: Jan. 5th, 2021</div>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Attendees;
