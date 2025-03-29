import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";

export default function ResultsDisplay() {
  const { results, loading, error } = useSelector((state: RootState) => state.queries);

  if (loading) return <div className="p-4 text-neon">⏳ AI Processing your query...</div>;
  if (error) return <div className="p-4 text-red-500">🚨 {error}</div>;
  if (!results) return <div className="p-4 text-gray-300">⚡ No results yet</div>;

  const data = [
    { name: "Query Result", value: results.value, color: "#00ffcc" },
    { name: "Industry Avg", value: results.value - 20, color: "#ff8a00" },
  ];

  return (
    <motion.div
      className="p-4 glassmorphism"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-bold text-white">📊 Query Results</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="url(#neonGradient)" radius={[10, 10, 0, 0]} />
          <defs>
            <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00ffcc" />
              <stop offset="100%" stopColor="#ff8a00" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
