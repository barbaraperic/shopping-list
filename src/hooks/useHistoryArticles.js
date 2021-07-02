import { useState, useEffect } from "react";
import { shoppingHistory } from "../mock-api";

const useHistoryArticles = (id) => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    shoppingHistory.map(item => (

      setArticle({

      })
    ))
  }, [path])
}