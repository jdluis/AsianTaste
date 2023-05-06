import { FC } from "react";
import { Titles } from "../../../dictionary";
import './style.css'
import MenuRestaurant from "../../components/Menu";
//interface HomePageProps {}

const HomePage: FC/* <HomePageProps> */ = () => {
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
                    <img src="/public/bg-intro2.png" alt="" />
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
                    <img src="/public/bg-asianEating.png" alt="eating rice asian taste" />
                </div>
                <div className="main_container">
                    <header>
                        <h2>{Titles.ABOUT_TITLE}</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia exercitationem quae pariatur repellendus enim cumque esse eius impedit numquam.</p>
                    </header>
                </div>
            </section>

            <section className="bg-vainilla">
                <MenuRestaurant />
            </section>

            <section>
                <div>
                    <button>Full Menu</button>
                    <button>Dowload Menu</button>
                </div>
            </section>

            <section className="bg-vainilla">

                <address>
                    location
                </address>
            </section>

            <footer className="bg-dark">
                Footer
            </footer>
        </div>);
}

export default HomePage;