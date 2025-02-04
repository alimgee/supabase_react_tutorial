import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const VITE_REACT_APP_DATABASE_URL = import.meta.env.VITE_REACT_APP_DATABASE_URL;
const VITE_REACT_APP_DATABASE_ANON_KEY = import.meta.env.VITE_REACT_APP_DATABASE_ANON_KEY;

const supabase = createClient(VITE_REACT_APP_DATABASE_URL, VITE_REACT_APP_DATABASE_ANON_KEY);


function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;