import { height } from "@mui/system";
import FormCard from "./components/FormCard";

function App() {
  return (
    <div 
    style={{   
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#fffe"
    }}
    >
      <FormCard />
    </div>
  );
}

export default App;
