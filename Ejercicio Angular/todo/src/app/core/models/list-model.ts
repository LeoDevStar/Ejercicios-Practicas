import { ActivityModel } from "./activity-model";

export interface List{
    total: number;
    progress: number;
    activities: ActivityModel[];
    filter: string
}