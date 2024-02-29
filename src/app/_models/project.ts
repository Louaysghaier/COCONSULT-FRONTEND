export class Projets {
  idProjet!: number;
  projetTitle!: string;
  budget!: number;
  mail!: string;
  dateDebut!: Date;
  dateFin!: Date;
  effectif!: number;
  description!: string;
  expanses?: Expanses[];
  timeRecord?: TimeRecord;
  assignements?: Assignements;
  activities?: Activity[];
  meetings?: Meetings[];
  contracts?: Contract[];
}

export class Expanses {
  // Define the structure of the Expanses entity if applicable
}

export class TimeRecord {
  // Define the structure of the TimeRecord entity if applicable
}

export class Assignements {
  // Define the structure of the Assignements entity if applicable
}

export interface Activity {
  // Define the structure of the Activity entity if applicable
}

export class Meetings {
  // Define the structure of the Meetings entity if applicable
}

export class Contract {
  // Define the structure of the Contract entity if applicable
}
