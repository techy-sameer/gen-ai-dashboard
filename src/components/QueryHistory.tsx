import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function QueryHistory() {
  const history = useSelector((state: RootState) => state.queries.history);

  return (
    <div className="p-4 border">
      <h2 className="text-lg font-bold">Query History</h2>
      <ul>
        {history.map((q, index) => (
          <li key={index} className="text-gray-600">{q}</li>
        ))}
      </ul>
    </div>
  );
}
