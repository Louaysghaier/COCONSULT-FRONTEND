import {Projects} from "@angular/cli/lib/config/workspace-schema";

export class ProjFeed {
  idPjtFeed!: number;
  content!: string;
  timeUpd!: string; // You might consider using Date type instead
  fctsUpd!: string;
  projects?: Projects[]; // Assuming Projets is another entity

}

export class project {

}
