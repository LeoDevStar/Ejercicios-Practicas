import { ActivityModel } from "./activity-model";

export interface List{
    id: number;
    total: number;
    progress: number;
    activities: ActivityModel[];
}