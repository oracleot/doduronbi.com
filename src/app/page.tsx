import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>
          <Terminal className="h-4 w-4" /> Welcome to{" "}
          <strong>doduronbi.com</strong>
        </h1>
      </div>
    </div>
  );
}
