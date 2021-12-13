import { range } from "d3-array";
import Face from "./components/Face";

const App = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
    {range(18).map(() => (
      <Face
        centerX={80}
        centerY={80}
        strokeWidth={6 + Math.random() * 3}
        eyeOffsetX={20 + Math.random() * 9}
        eyeOffsetY={20 + Math.random() * 15}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={7 + Math.random() * 9}
        mouthRadius={30 + Math.random() * 10}
      />
    ))}
  </div>
)

export default App;
