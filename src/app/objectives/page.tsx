"use client";

import { useObjectivesAll } from "@/hooks/useObjectives";
import { ArrowRight } from "lucide-react";

export default function ObjectivesPage() {
  const { response, objectives, error } = useObjectivesAll();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-200">
        Objectives Page
      </h1>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {response?.status && objectives.length > 0 ? (
          objectives.map((objective) => (
            <div
              key={objective.id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {objective.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {objective.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ver más
                <span>
                  <ArrowRight size={16} className="ml-2" />
                </span>
              </a>
            </div>
          ))
        ) : (
          <p>No hay objetivos disponibles</p>
        )}
      </div>
    </>
  );
}
