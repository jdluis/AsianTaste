import { FC } from "react";
import { Titles } from "../../../dictionary";
import './style.css'
import MenuRestaurant from "../../components/Menu";
//interface HomePageProps {}

const HomePage: FC/* <HomePageProps> */ = () => {
    return (
        <div>
            <header className="introduction_container">
                <h1>{Titles.RESTAURANT_TITLE}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia exercitationem quae pariatur repellendus enim cumque esse eius impedit numquam.</p>
            </header>
            <main className="btn_container">
                <button className="btn-action">Order Now</button>
                <button className="btn-info">Menu</button>
            </main>

            <section className="bg-vainilla_light">
                Testimonials
            </section>

            <section className="bg-blue">

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