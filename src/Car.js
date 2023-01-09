import Chassis from "./components/chassis/Chassis";
import Structure from "./components/structure/Structure";

function Car() {
    return (
        <div>

            <header>This is Car</header>
            <Structure />
            <Chassis />
        </div>
    );
}

export default Car;
