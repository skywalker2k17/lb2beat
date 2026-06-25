import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import CoursesSection from "../../../components/home/CoursesSection";
export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 68 }}>
        <CoursesSection />
      </main>
      <Footer />
    </>
  );
}
