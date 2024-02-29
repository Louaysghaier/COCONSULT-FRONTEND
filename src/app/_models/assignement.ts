// assignments.model.ts

export class Assignments {
  idAssign!: number;
  timeRecording!: Date; // Assuming you want to use Date instead of LocalDate
  expenses!: number;
  projets?: Projets; // Optional field if Projets is a related entity
}

export class Projets {
  // Define the structure of the Projets entity if applicable
}
