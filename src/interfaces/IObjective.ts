export interface IObjective {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IObjectiveCreate {
  name: string;
  description: string;
}

export interface IObjectiveUpdate {
  id: number;
  name?: string;
  description?: string;
}
