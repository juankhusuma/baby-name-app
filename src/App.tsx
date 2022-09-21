import { useEffect, useState, createContext, useContext } from "react"
import "./App.css"
import SearchBar from "./SearchBar";

export interface BabyData {
  id: number;
  name: string;
  sex: "f" | "m";
}

export const Search = createContext<any>([])

function App() {
  const [search, setSearch] = useState<string>("")
  const [data, setData] = useState<BabyData[]>([])

  useEffect(() => {
    (async () => {
      const response = await fetch("./src/babyNamesData.json");
      const data: BabyData[] = await response.json();
      if (search === "") {
        return setData(data)
      }
      setData(data.filter(data => data.name.toLowerCase().includes(search.toLowerCase())))
    })()
  }, [search])

  return (
    <Search.Provider value={[search, setSearch]}>
      <div className="App">
        <p>{search}</p>
        <SearchBar />
        {
          data.map(baby => (
            <div className="baby-list-item">
              <p>id: {baby.id}</p>
              <p>name: {baby.name}</p>
              <p>sex: {baby.sex}</p>
            </div>
          ))
        }
      </div>
    </Search.Provider>
  )
}

export default App
