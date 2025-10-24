import { ActivityModel } from "./activity-model";
import { CategoryModel } from "./category-model";

export interface List{
    total: number;
    progress: number;
    activities: ActivityModel[];
    categories: CategoryModel[];
}