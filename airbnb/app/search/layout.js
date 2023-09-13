import Header from "./Header";
// import { useBearStore } from "../../store";

export default function SearchLayout({ children }) {
    return (
        <>
            <Header />
            <main className="bg-white relative top-[7.5rem] pt-4 container mx-auto">
                {children}
            </main>
        </>
    )
}
