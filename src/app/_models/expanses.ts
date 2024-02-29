// expanses.model.ts
export class Expanses {
  idExps!: number;
  category!: string;
  montant!: number;
  date!: Date;
  description!: string;
  projet?: project;
}

export class project {

}
