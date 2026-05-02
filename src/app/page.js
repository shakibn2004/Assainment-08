import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import LearningTips from "@/Components/LearningTips";
import Navbar from "@/Components/Navbar";
import PopularCourses from "@/Components/PopularCourses";
import TopInstructor from "@/Components/TopInstructor";
import { Toast } from "@heroui/react";


export default function RootHome() {
  return (
    <div>
      <main>
        <Navbar />
        <Home />
        <PopularCourses />
        <LearningTips />
        <TopInstructor />
        <Footer />
      </main>
    </div>
  );
}
