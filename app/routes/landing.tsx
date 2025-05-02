import { Header } from "~/components/common/Header";
import { Hero } from "~/components/landing/Hero";

export default function LandingPage() {
    return (
        <div className="h-screen">
            <Header />
            <Hero />
        </div>
    );
}
