import Navbar from "./Navbar";
import Title from "./Title";
import Footer from "./Footer";

export default function Page({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Title />
                {children}
                <Footer />
            </div>

        </div>
    );
}