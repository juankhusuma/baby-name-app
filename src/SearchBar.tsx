import { useContext } from "react"
import { Search } from "./App"

export default function SearchBar() {
    const [search, setSearch] = useContext(Search) as unknown as [string, any]
    return (
        <>
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Insert baby name..."
              value={search}
              onChange={(event) => {
                setSearch(() => event.target.value)
              }}
            />
        </>
    )
}