
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HomeCourses from "./components/HomeCourses";
import Courses from "./components/Courses";
import AboutUsPage from "./components/AboutUsPage";
import FacultyPage from "./components/FacultyPage";
import Testimonial from "./components/Testimonial";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import LoginPage from "./LoginPage";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar onLogin={() => setShowLogin(true)} />

      {showLogin ? (
        <LoginPage onBack={() => setShowLogin(false)} />
      ) : (
        <>
          <main>
            <div id="home">
              <Banner />
            </div>

            <div id="courses">
              <HomeCourses />
              <Courses />
            </div>

            <div id="about">
              <AboutUsPage />
            </div>

            <div id="faculty">
              <FacultyPage />
            </div>

            <Testimonial />

            <div id="contact">
              <ContactPage />
            </div>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
