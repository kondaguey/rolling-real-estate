import Header from "./Header";
import Sidebar from "./Sidebar";
import Builders from "./Builders";
import Features from "./Features";
import StoryPictures from "./StoryPictures";
import StoryContent from "./StoryContent";
import Homes from "./Homes";
import Gallery from "./Gallery"; 
import Footer from "./Footer";

function App() {
  return (
  <div className="container">
    <Sidebar />
    <Header />
    <Builders />
    <Features/>
    <StoryPictures />
    <StoryContent />
    <Homes/>
    <Gallery />
    <Footer />
  </div>
  );
}

export default App;
