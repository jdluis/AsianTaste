import { FC } from "react";
import { Titles } from "../../../dictionary";
import MenuRestaurant from "../../components/Menu";
import './style.css'
import Map from "../../components/Map";

const HomePage: FC = () => {
    return (
        <div id="home">
            <div className="introduction_container">
                <main className="main_container">
                    <header>
                        <h1>{Titles.RESTAURANT_TITLE}</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia exercitationem quae pariatur repellendus enim cumque esse eius impedit numquam.</p>
                    </header>

                    <div className="btn_container">
                        <button className="btn-action">Order Now</button>
                        <button className="btn-info">Menu</button>
                    </div>
                </main>
                <div className="img_container">
                    <img src="/bg-intro2.png" alt="" />
                </div>
            </div>


            <section className="bg-vainilla_light testimonials_container">
                <div>
                    <span>+10000</span>
                    <h4>Clients</h4>
                </div>
                <div>
                    <span>6.000</span>
                    <h4>Orders was delivered</h4>
                </div>
                <div>
                    <span>1998</span>
                    <h4>Since</h4>
                </div>
                <div>
                    <span>AE+</span>
                    <h4>Certificaition</h4>
                </div>
            </section>

            <section className="bg-blue about_container">
                <div className="img_container">
                    <img src="/bg-asianEating.png" alt="eating rice asian taste" />
                </div>
                <div className="main_container">
                    <header>
                        <h2>{Titles.ABOUT_TITLE}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia exercitationem quae pariatur repellendus enim cumque esse eius impedit numquam.</p>
                    </header>
                </div>
            </section>

            <section className="bg-vainilla menu_container">
                <MenuRestaurant />
            </section>

            <section className="print-menu_container">
                <div className="text_container">
                    <h2>Print Menus</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium dolore dolorem nisi quam tenetur amet, esse repudiandae cumque et?</p>
                </div>
                <div className="btn_container">
                    <button className="btn-action">Full Menu</button>
                    <button>Dowload Menu</button>
                </div>
            </section>

            <section className="bg-vainilla contact_container">
                <div className="text_container">
                    <h2>Locations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium dolore </p>
                </div>
                <div className="location-time_container">
                    <address className="contact-info-container">
                        <h4>Asian Taste Restaurant</h4>
                        <p>8625 Crosss Street, USA New York City, Spain</p>

                        <a href="tel: ">(+34) 66 88 45 25</a>

                        <ul>
                            Hours
                            <li>Mon-Thu: <span>3.30-9pm</span></li>
                            <li>Fr-Sat: <span>3.30-10pm</span></li>
                        </ul>
                    </address>
                    <div>
                        <Map />
                    </div>
                </div>
            </section>

            {/* Only in medium and largue devices */}
            <footer className="bg-dark footer_container">
                <h5>Asian Taste</h5>

                <ul>
                    <li>About Us</li>
                    <li>Full Menu</li>
                </ul>

                <ul>
                    <li>Testimonials</li>
                    <li>Locations</li>
                </ul>
                <ul>
                    <a href="#"> Twitter</a>
                    <a href="#"> Instagram</a>
                    <a href="#"> Linkedin</a>
                </ul>

            </footer>
        </div>);
}

export default HomePage;