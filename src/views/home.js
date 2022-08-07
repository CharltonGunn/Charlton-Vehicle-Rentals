import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Car Next Door Management</title>
        <meta
          name="description"
          content="This ain't your everyday Car Next Door car rental fleet. We specialise in hosting great quality vehicles. Vehicle prices are from approximately $20/day + 45c/km"
        />
        <meta property="og:title" content="Car Next Door Management" />
        <meta
          property="og:description"
          content="This ain't your everyday Car Next Door car rental fleet. We specialise in hosting great quality vehicles. Vehicle prices are from approximately $20/day + 45c/km"
        />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="home-image"
              />
            </div>
            <div data-type="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text">About</span>
            <span className="home-text01">Products</span>
            <span className="home-text02">Pricing</span>
            <span className="home-text03">Blog</span>
            <span className="home-text04">Jobs</span>
            <span className="home-text05">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container01">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01"
              >
                <div className="home-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link02"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                <div className="home-container05">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container06">
        <div className="home-container07">
          <div data-role="Header" className="home-header-container1">
            <header className="home-header">
              <div data-type="MobileMenu" className="home-mobile-menu1">
                <div className="home-container08">
                  <div className="home-container09">
                    <div className="home-btn-group"></div>
                  </div>
                  <svg
                    viewBox="0 0 1024 1024"
                    data-type="CloseMobileMenu"
                    className="home-icon10"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
                <div className="home-container10">
                  <div className="home-container11">
                    <div className="home-container12">
                      <Link to="/vehicles" className="home-navlink">
                        Vehicles
                      </Link>
                      <a href="#faqs" className="home-link04">
                        FAQs
                      </a>
                      <a href="#location" className="home-link05">
                        Location
                      </a>
                      <a href="#enquire" className="home-link06">
                        Contact us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <nav className="home-nav">
                <Link to="/vehicles" className="home-navlink1">
                  Vehicles
                </Link>
                <a href="#location" className="home-link07">
                  Location
                </a>
                <a href="#enquire" className="home-link08">
                  Contact us
                </a>
                <a href="#faqs" className="home-link09">
                  FAQs
                </a>
              </nav>
              <svg
                viewBox="0 0 1024 1024"
                data-type="BurgerMenu"
                className="home-burger-menu"
              >
                <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
              </svg>
              <img
                alt="image"
                src="/playground_assets/charlton.svg"
                loading="eager"
                className="home-image1"
              />
            </header>
          </div>
          <div className="home-main">
            <div className="home-blur-background"></div>
            <div className="home-hero">
              <h1 className="home-heading">
                <span>
                  CAR NEXT
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  DOOR
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
              </h1>
              <h1 className="home-heading01">
                <span>
                  VEHICLE
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  RENTALS
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <h1 className="home-heading02 body1"></h1>
              <Link to="/vehicles" className="home-navlink2">
                <PrimaryButton
                  button="Vehicle Gallery"
                  rootClassName="primary-button-root-class-name5"
                  className="home-component"
                ></PrimaryButton>
              </Link>
              <Link to="/vehicles" className="home-navlink3">
                <PrimaryButton
                  button="Vehicle Gallery"
                  rootClassName="primary-button-root-class-name34"
                  className="home-component01"
                ></PrimaryButton>
              </Link>
              <h1 id="rotatedphrase" className="home-heading03">
                RENTING CARS is.... EASY
              </h1>
            </div>
            <div id="vehicles" className="home-hero1">
              <h1 className="home-heading04">VEHICLES</h1>
              <h1 id="rotatedphrase" className="home-heading05">
                WE HOST VEHICLES LOCATED ALL OVER ADELIADE
              </h1>
              <PrimaryButton
                button="Vehicle Gallery"
                rootClassName="primary-button-root-class-name4"
                className="home-component02"
              ></PrimaryButton>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T01:02:44&amp;vehicle_id=181774&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <PrimaryButton
                  button="Book 2012 Blue Honda Jazz - WALKERVILLE"
                  rootClassName="primary-button-root-class-name18"
                  className="home-component03"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=207965&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <PrimaryButton
                  button="Book 2013 Black Mitsubishi Mirage - NORWOOD"
                  rootClassName="primary-button-root-class-name21"
                  className="home-component04"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T11:25:59&amp;vehicle_id=182444&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <PrimaryButton
                  button="Book 2013 Grey Suzuki SX4 - WALKERVILLE"
                  rootClassName="primary-button-root-class-name22"
                  className="home-component05"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T11:25:59&amp;vehicle_id=192821&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <PrimaryButton
                  button="Book 2013 Red Toyota Yaris - AIRPORT"
                  rootClassName="primary-button-root-class-name23"
                  className="home-component06"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=205708&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <PrimaryButton
                  button="Book 2015 White Mitsubishi Mirage - BROADVIEW"
                  rootClassName="primary-button-root-class-name24"
                  className="home-component07"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=171964&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <PrimaryButton
                  button="Book 2012 White Suzuki Alto - AIRPORT"
                  rootClassName="primary-button-root-class-name25"
                  className="home-component08"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=187278&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <PrimaryButton
                  button="Book 2015 Red Kia Rio - ST PETERS"
                  rootClassName="primary-button-root-class-name26"
                  className="home-component09"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=203120&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <PrimaryButton
                  button="Book 2008 Black Nissan Micra - PROSPECT"
                  rootClassName="primary-button-root-class-name27"
                  className="home-component10"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=206039&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <PrimaryButton
                  button="Book 2017 Orange Kia Picanto - PROSPECT"
                  rootClassName="primary-button-root-class-name28"
                  className="home-component11"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=204466&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link19"
              >
                <PrimaryButton
                  button="Book 2016 Blue Nissan Micra - BROADVIEW"
                  rootClassName="primary-button-root-class-name29"
                  className="home-component12"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T01:02:44&amp;vehicle_id=181774&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link20"
              >
                <PrimaryButton
                  button="Book 2011 Blue Mitsubishi Colt - BROADVIEW"
                  rootClassName="primary-button-root-class-name30"
                  className="home-component13"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T01:02:44&amp;vehicle_id=181774&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link21"
              >
                <PrimaryButton
                  button="Book 2013 White Nissan Micra - BROMPTON"
                  rootClassName="primary-button-root-class-name31"
                  className="home-component14"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=181984&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link22"
              >
                <PrimaryButton
                  button="Book 2013 Silver Mitsubishi Mirage- AIRPORT"
                  rootClassName="primary-button-root-class-name32"
                  className="home-component15"
                ></PrimaryButton>
              </a>
              <a
                href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=204541&amp;click_source=search_map"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link23"
              >
                <PrimaryButton
                  button="Book 2013 Green Mitsubishi Mirage - BROADVIEW"
                  rootClassName="primary-button-root-class-name33"
                  className="home-component16"
                ></PrimaryButton>
              </a>
              <img
                alt="image"
                src="/playground_assets/untitled%20%5B800%20%C3%97%207600px%5D-400w.jpg"
                className="home-cars-large-photo"
              />
              <img
                alt="image"
                src="/playground_assets/untitled%20%5B800%20%C3%97%207600px%5D-400w.jpg"
                loading="lazy"
                className="home-cars-small-photo"
              />
            </div>
            <img
              alt="image"
              src="/playground_assets/turquoise-circle.svg"
              className="home-turquoise-cirble"
            />
            <img
              alt="image"
              src="/playground_assets/turquoise-circle.svg"
              className="home-turquoise-cirble1"
            />
            <img
              alt="image"
              src="/playground_assets/purple-circle.svg"
              className="home-purple-circle"
            />
            <img
              alt="image"
              src="/playground_assets/purple-circle.svg"
              className="home-purple-circle1"
            />
            <img
              alt="image"
              src="/playground_assets/left.svg"
              className="home-left"
            />
            <img
              alt="image"
              src="/playground_assets/right.svg"
              className="home-right"
            />
            <img
              alt="image"
              src="/playground_assets/left.svg"
              className="home-left1"
            />
            <img
              alt="image"
              src="/playground_assets/right.svg"
              className="home-right1"
            />
          </div>
        </div>
        <div id="location" className="home-banner">
          <h1 className="home-text12">
            <span className="home-text13">
              OUR VEHICLES ARE LOCATED IN
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text14">ADELAIDE</span>
          </h1>
          <span className="home-text15">Author: Ilya Shrayber</span>
          <span className="home-text16">
            <span>
              <span></span>
            </span>
          </span>
          <div className="home-btn-group1">
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B6%5D.svg"
              className="home-image2"
            />
          </div>
        </div>
        <form id="enquire" className="home-form button">
          <h1 className="home-heading06">ENQUIRE NOW</h1>
          <div className="home-container13">
            <div className="home-container14"></div>
          </div>
          <a
            href="mailto:charltonvehiclerentals@gmail.com?subject=Vehicle Rental Enquiry"
            id="signupsend"
            name="Sign Up"
            className="home-button button"
          >
            <span className="home-text19">
              <span className="home-text20">Mail Us</span>
            </span>
          </a>
          <img
            alt="image"
            src="/playground_assets/charlton%20vehicle%20management.svg"
            loading="eager"
            className="home-image3"
          />
          <img
            alt="image"
            src="/playground_assets/charlton%20%5B1%5D.svg"
            loading="eager"
            className="home-image4"
          />
        </form>
        <div className="home-pricing"></div>
        <h1 id="faqs" className="home-heading07">
          FAQ&apos;s
        </h1>
        <h1 className="home-heading08 body1">
          <span>What is Charlton Vehicle Rentals?</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="home-heading09 body1">
          <span>
            Charlton Vehicle Rentals is a platform that promotes vehicles that
            are available for rent on Car Next Door in Adelaide. The platform
            uses Car Next Door as Being a small family-run business, we provide
            the upmost quality and support when renting out cars.
          </span>
        </h1>
        <h1 className="home-heading10 body1">
          <span>
            How do I rent a vehicle?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h1>
        <h1 className="home-heading11 body1">
          <span>
            Please make any reservations via the links provided on the website.
            This will direct users to the Car Next Door website or app where
            they can book a vehicle.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h1>
        <h1 className="home-heading12 body1">
          <span>
            Can I book it vehicles direct with Charlton Vehicle Rentals?
          </span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="home-heading13 body1">
          <span>
            We operate solely through the Car Next Door platform. Please sign up
            to Car Next Door if you would like to rent any of these vehicles.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h1>
        <h1 className="home-heading14 body1">
          © 2022 | Charlton Vehicle Rentals
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
      </div>
      <div className="home-main1"></div>
    </div>
  )
}

export default Home
