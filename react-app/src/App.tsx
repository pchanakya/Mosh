import { useState } from "react";
import Alert from "./componenets/Alert";
import Button from "./componenets/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          setvid={() => {
            setAlertVisible(false);
          }}
        >
          My alert
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
