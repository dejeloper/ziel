import { IObjective } from "./IObjective";

export interface IResponse {
  status: number;
  message: string;
  data: IObjective[];
  success: boolean;
}
