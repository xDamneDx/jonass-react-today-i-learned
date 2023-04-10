import { useEffect, useState } from "react";
import { supabase } from "./config/supabaseClient";

// Components:
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { NewFactForm } from "./components/NewFactForm";
import { CategoryFilter } from "./components/CategoryFilter";
import { FactList } from "./components/FactList";

export const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const getFacts = async () => {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all") {
        query = query.eq("category", currentCategory);
      }

      const { data, error } = await query.limit(100);

      if (error) {
        alert("There was a problem getting data");
      } else {
        setFacts(data);
      }

      setIsLoading(false);
    };

    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}
