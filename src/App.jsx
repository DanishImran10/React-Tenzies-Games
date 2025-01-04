import Info from "./components/Info"
import PlayArea from "./components/PlayArea"

export default function App() {
    return (
      <div className="app--maindiv">
        <div className="app--subdiv">
          <Info />
          <PlayArea />
        </div>
      </div>
    )
}