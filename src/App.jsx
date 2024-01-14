import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { countState } from "./store/atoms/count";
import { evenSelectors } from "./store/atoms/count";

function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countState);
  const isEven = useRecoilValue(evenSelectors)
  return <div>
    {count}
    {isEven && <h1>Even Count</h1>}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countState)
  return <div>
    <button onClick={() => {
      setCount((count) => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount((count) => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
