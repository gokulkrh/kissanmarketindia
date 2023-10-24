import { React } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Categories from "../components/catregories-carousel";

function HomePage() {
    return (
        <div className="content">
            <Header />
            <Categories />
            <Footer />
        </div>
    )
}

export default HomePage