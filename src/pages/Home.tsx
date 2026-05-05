import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { BestSellers } from "@/components/home/BestSellers";
import { PromoBanner } from "@/components/home/PromoBanner";

const Home = () => (
  <>
    <Hero />
    <FeaturedCategories />
    <PromoBanner />
    <BestSellers />
  </>
);

export default Home;
