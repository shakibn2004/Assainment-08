import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import LearningTips from "@/Components/LearningTips";
import Navbar from "@/Components/Navbar";
import NewReleases from "@/Components/NewReleases";
import PopularCourses from "@/Components/PopularCourses";
import TopInstructor from "@/Components/TopInstructor";


export default function RootHome() {
  return (
    <div>
      <main>
        <Navbar />
        <Home />
        <PopularCourses />
        <LearningTips />
        <TopInstructor />
        <NewReleases />
        <Footer />
      </main>
    </div>
  );
}
