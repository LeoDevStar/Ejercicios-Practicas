import { Activity } from "./activity-model";

export interface List{
    total: number;
    progress: number;
    activities: [Activity];
}