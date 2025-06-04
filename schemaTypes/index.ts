import { notification } from "./notification";
import { note } from "./objects/note";
import { pricing } from "./objects/pricing";
import { repairImage } from "./objects/repairImage";
import { repairService } from "./objects/repairService";
import { payment } from "./payment";
import { pickup } from "./pickup";
import { repair } from "./repair";
import { review } from "./review";
import { user } from "./user";
import { warranty } from "./objects/warranty";
import { timelineEvent } from "./objects/timelineEvent";
import { customer } from "./customer";
import { technician } from "./technician";

export const schemaTypes = [
    user, 
    repair, 
    payment, 
    pickup, 
    warranty, 
    review, 
    notification,
    note,
    pricing,
    repairService,
    repairImage,
    timelineEvent,
    customer,
    technician
]
