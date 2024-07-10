import { IResponse } from "@/interfaces/IResponse";
const service = "/api/objectives";

export async function getAllObjectives(): Promise<IResponse> {
  const res = await fetch(service);
  if (!res.ok) {
    throw new Error("Error al cargar los objetivos");
  }
  const data = await res.json();
  return data;
}
