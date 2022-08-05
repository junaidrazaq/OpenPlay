import { Tags } from "./tags";

export interface Activities {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
  level: string;
  location: string;
  facility_id: number;
  tags: Tags[];
  length: number;
}
