import { note } from "./objects/note";
import { pricing } from "./objects/pricing";
import { repairImage } from "./objects/repairImage";
import { repairService } from "./objects/repairService";
import { payment } from "./payment";
import { pickup } from "./pickup";
import { repair } from "./repair";
import { review } from "./review";
import { warranty } from "./objects/warranty";
import { timelineEvent } from "./objects/timelineEvent";
import { technician } from "./technician";

export const schemaTypes = [
    repair, 
    payment, 
    pickup, 
    warranty, 
    review, 
    note,
    pricing,
    repairService,
    repairImage,
    timelineEvent,
    technician
]
