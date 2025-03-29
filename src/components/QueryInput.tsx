import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, setQueryResult, setError } from "../store";
import { AppDispatch } from "../store";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function QueryInput() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleQuerySubmit = () => {
    if (!query.trim()) return;
    dispatch(submitQuery());

    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(setError("⚠️ Invalid query detected"));
      } else {
        dispatch(setQueryResult({ query, value: Math.random() * 100 }));
      }
    }, 1200);
  };

  return (
    <motion.div
      className="p-4 glassmorphism"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="🔍 Ask AI a business question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          style: { color: "#0ff", fontWeight: "bold" },
        }}
        sx={{ input: { color: "#fff" } }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          background: "linear-gradient(90deg, #ff8a00, #da1b60)",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        onClick={handleQuerySubmit}
      >
        🚀 Generate Insights
      </Button>
    </motion.div>
  );
}
