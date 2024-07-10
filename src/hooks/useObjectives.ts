"use client";

import { useState, useEffect } from "react";
import { IObjective, IResponse } from "@/interfaces";
import { getAllObjectives } from "@/services/objectives";

const useObjectivesAll = () => {
  const [response, setResponse] = useState<IResponse>();
  const [objectives, setObjectives] = useState<IObjective[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllObjectives()
      .then((res) => {
        setResponse(res);
        setObjectives(res.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return { response, objectives, error };
};

export { useObjectivesAll };
