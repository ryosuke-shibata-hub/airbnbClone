// export default function Page() {
//     return (
//         <h1>Results Page</h1>
//     )
// }
import { ResultsList } from "./ResultsList";

export default async function Page() {
    const res = await fetch('http://localhost:3000//api/search')
    const data = await res.json()

    return (
        <>
            <ResultsList data={data} />
        </>
    )
}
