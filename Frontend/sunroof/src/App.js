import Address from "./components/Address";
import Bill from "./components/Bill";
import Header from "./components/Header";
import Messages from "./components/Messages";
import Result from "./components/Result";

function App() {
  return (
    <div className="bg-cover h-screen overflow-y-hidden" style={{ backgroundImage: `url("https://stella.demand-iq.com/media/backgrounds/e-AnGx1n-gtw8-unsplash_wAsqa2f.jpg")` }}>
      <Header />
      
      <div className="flex justify-center py-8">
        <div className="bg-white rounded-lg">
          {/* <Address /> */}
          {/* <Bill /> */}
          {/* <Messages /> */}
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
