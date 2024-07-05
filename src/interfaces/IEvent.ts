export interface IEventCreate {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
}

export interface IEventUpdate {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
}
