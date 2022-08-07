import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import PrimaryButton from '../components/primary-button'
import './vehicles.css'

const Vehicles = (props) => {
  return (
    <div className="vehicles-container">
      <Helmet>
        <title>Vehicles - Charlton Vehicle Rentals</title>
        <meta
          name="description"
          content="This ain't your everyday Car Next Door car rental fleet. We specialise in hosting great quality vehicles. Vehicle prices are from approximately $20/day + 45c/km"
        />
        <meta
          property="og:title"
          content="Vehicles - Charlton Vehicle Rentals"
        />
        <meta
          property="og:description"
          content="This ain't your everyday Car Next Door car rental fleet. We specialise in hosting great quality vehicles. Vehicle prices are from approximately $20/day + 45c/km"
        />
      </Helmet>
      <div data-role="Header" className="vehicles-header-container">
        <div data-type="MobileMenu" className="vehicles-mobile-menu">
          <div className="vehicles-top">
            <div className="vehicles-logo">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="vehicles-image"
              />
            </div>
            <div data-type="CloseMobileMenu" className="vehicles-close-menu">
              <svg viewBox="0 0 1024 1024" className="vehicles-icon">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="vehicles-mid">
            <span className="vehicles-text">About</span>
            <span className="vehicles-text01">Products</span>
            <span className="vehicles-text02">Pricing</span>
            <span className="vehicles-text03">Blog</span>
            <span className="vehicles-text04">Jobs</span>
            <span className="vehicles-text05">More</span>
          </div>
          <div className="vehicles-bot">
            <div className="vehicles-container01">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="vehicles-link"
              >
                <div className="vehicles-container02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="vehicles-icon02"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="vehicles-link01"
              >
                <div className="vehicles-container03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="vehicles-icon04"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="vehicles-link02"
              >
                <div className="vehicles-container04">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="vehicles-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="vehicles-link03"
              >
                <div className="vehicles-container05">
                  <svg viewBox="0 0 1024 1024" className="vehicles-icon08">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vehicles-container06">
        <div className="vehicles-container07">
          <div data-role="Header" className="vehicles-header-container1">
            <div data-type="MobileMenu" className="vehicles-mobile-menu1">
              <div className="vehicles-top1">
                <div className="vehicles-logo1">
                  <img
                    alt="image"
                    src="/playground_assets/logotype-dark.svg"
                    className="vehicles-image1"
                  />
                </div>
                <div
                  data-type="CloseMobileMenu"
                  className="vehicles-close-menu1"
                >
                  <svg viewBox="0 0 1024 1024" className="vehicles-icon10">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="vehicles-mid1">
                <span className="vehicles-text06">About</span>
                <span className="vehicles-text07">Products</span>
                <span className="vehicles-text08">Pricing</span>
                <span className="vehicles-text09">Blog</span>
                <span className="vehicles-text10">Jobs</span>
                <span className="vehicles-text11">More</span>
              </div>
              <div className="vehicles-bot1">
                <div className="vehicles-container08">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vehicles-link04"
                  >
                    <div className="vehicles-container09">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="vehicles-icon12"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vehicles-link05"
                  >
                    <div className="vehicles-container10">
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="vehicles-icon14"
                      >
                        <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vehicles-link06"
                  >
                    <div className="vehicles-container11">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="vehicles-icon16"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="vehicles-link07"
                  >
                    <div className="vehicles-container12">
                      <svg viewBox="0 0 1024 1024" className="vehicles-icon18">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <header className="vehicles-header">
              <div className="vehicles-container13">
                <div className="vehicles-logo2"></div>
              </div>
              <div className="vehicles-container14">
                <div className="vehicles-container15">
                  <div className="vehicles-container16"></div>
                </div>
                <nav className="vehicles-nav">
                  <Link to="/" className="vehicles-navlink">
                    Home
                  </Link>
                </nav>
              </div>
              <Link to="/" className="vehicles-navlink1">
                <img
                  alt="image"
                  src="/playground_assets/charlton.svg"
                  loading="eager"
                  className="vehicles-image2"
                />
              </Link>
            </header>
          </div>
          <div className="vehicles-container17"></div>
          <div className="vehicles-main">
            <div className="vehicles-hero">
              <h1 className="vehicles-heading">
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
              <h1 className="vehicles-heading01">
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
                  GALLERY
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <h1 className="vehicles-heading02 body1">
                <span>
                  Please view photos and each advertisement of the 14 cars we
                  currently host on Car Next Door!
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  We host a range of small and reliable, predominantly Japanese
                  vehicles.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  All vehicles are well maintained, clean and are equipped with
                  basic amenities.
                </span>
              </h1>
              <h1 id="rotatedphrase" className="vehicles-heading03">
                RENTING CARS is.... EASY
              </h1>
            </div>
            <div className="vehicles-blur-background"></div>
            <div id="vehicles" className="vehicles-hero1"></div>
            <img
              alt="image"
              src="/playground_assets/turquoise-circle.svg"
              className="vehicles-turquoise-cirble"
            />
            <img
              alt="image"
              src="/playground_assets/purple-circle.svg"
              className="vehicles-purple-circle"
            />
            <img
              alt="image"
              src="/playground_assets/left.svg"
              className="vehicles-left"
            />
            <img
              alt="image"
              src="/playground_assets/right.svg"
              className="vehicles-right"
            />
          </div>
        </div>
        <div className="vehicles-pricing"></div>
        <h1 className="vehicles-heading04 body1">
          © 2022 | Charlton Vehicle Rentals
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <h1 className="vehicles-heading05 headline3">
          <span>2012 Honda Jazz - (Walkerville)</span>
          <br></br>
          <span>​</span>
          <span></span>
          <span></span>
        </h1>
        <img
          alt="image"
          src="/playground_assets/untitled%20%5B800%20%C3%97%207600px%5D-500w.jpg"
          className="vehicles-image3"
        />
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=187278&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link08"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name12"
            className="vehicles-component"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T11:25:59&amp;vehicle_id=182444&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link09"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name8"
            className="vehicles-component01"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=206039&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link10"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name13"
            className="vehicles-component02"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=205708&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link11"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name11"
            className="vehicles-component03"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=204536&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link12"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name14"
            className="vehicles-component04"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=207965&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link13"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name7"
            className="vehicles-component05"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=203120&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link14"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name15"
            className="vehicles-component06"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=192821&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link15"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name9"
            className="vehicles-component07"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=204466&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link16"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name16"
            className="vehicles-component08"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=171964&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link17"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name10"
            className="vehicles-component09"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=202313&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link18"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name17"
            className="vehicles-component10"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=204541&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link19"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name19"
            className="vehicles-component11"
          ></PrimaryButton>
        </a>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=181984&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link20"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name20"
            className="vehicles-component12"
          ></PrimaryButton>
        </a>
        <h1 className="vehicles-heading06 headline3">
          <span>2013 Mitsubishi Mirage - (Norwood)</span>
        </h1>
        <a
          href="https://www.carnextdoor.com.au/trips/new?end_time_iso=&amp;start_time_iso=2022-08-04T13:15:14&amp;vehicle_id=181774&amp;click_source=search_map"
          target="_blank"
          rel="noreferrer noopener"
          className="vehicles-link21"
        >
          <PrimaryButton
            button="Book Me"
            rootClassName="primary-button-root-class-name6"
            className="vehicles-component13"
          ></PrimaryButton>
        </a>
        <h1 className="vehicles-heading07 headline3">
          <span>2013 Suzuki SX4 - (Walkerville)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading08 headline3">
          <span>2013 Toyota Yaris - (Airport)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading09 headline3">
          <span>2015 Mitsubishi Mirage - (Collinswood)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading10 headline3">
          <span>2012 Suzuki Alto - (Airport)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading11 headline3">
          <span>2015 Kia Rio - (St Peters)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading12 headline3">
          <span>2008 Nissan Micra - (Prospect)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading13 headline3">
          <span>2013 Nissan Micra - (Brompton)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading14 headline3">
          <span>2011 Mitsubishi Colt - (Broadview)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading15 headline3">
          <span>2016 Nissan Micra - (Fitzroy)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading16 headline3">
          <span>2017 Kia Picanto - (Prospect)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading17 headline3">
          <span>2013 Mitsubishi Mirage - (Airport)</span>
          <br></br>
          <span></span>
        </h1>
        <h1 className="vehicles-heading18 headline3">
          <span>2013 Mitsubishi Mirage - (Broadview)</span>
          <br></br>
          <span></span>
        </h1>
      </div>
    </div>
  )
}

export default Vehicles
