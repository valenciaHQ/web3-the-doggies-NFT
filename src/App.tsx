import ConnectMetamask from "./components/ConnectMetamask";
import ReadERC20 from "./components/ReadERC20";

function App() {
  return (
    <div className="text-lg">
      Hola
      <ConnectMetamask />
      <ReadERC20 addressContract="0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6" />
    </div>
  );
}

export default App;
