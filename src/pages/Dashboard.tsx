import QueryInput from "../components/QueryInput";
import QueryHistory from "../components/QueryHistory";
import ResultsDisplay from "../components/ResultsDisplay";

export default function Dashboard() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 neon-border glassmorphism">
      <h1 className="text-4xl font-bold text-center text-glow">🚀 AI Analytics Dashboard</h1>
      <QueryInput />
      <ResultsDisplay />
      <QueryHistory />
    </div>
  );
}
