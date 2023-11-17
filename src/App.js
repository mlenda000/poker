import Footer from "./components/footer";
import Header from "./components/header";
import Table from "./components/table";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Table />
      </div>

      <Footer />
    </div>
  );
}

export default App;
