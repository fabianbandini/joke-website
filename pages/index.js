import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function IndexPage() {
    const [joke, setJoke] = useState("Chuck Norris' jock strap has 2 bag restraint holders.");


    const click = async () => {
        setJoke(await fetch("api/joke").then((resp) => resp.json()));
    }


    return (
        <div className={styles.container}>
            <p>{joke}</p>
            <button onClick={click}>Get another</button>
        </div>
    );
}