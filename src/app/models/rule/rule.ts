export class Rule {
  id: number; //for filtering, calculation
  title: string; //filter by title of rule
  dateCreated: Date; // for audit, time-stamp
  rule: any; // user-selected rules from dropdown

  constructor(id: number, title: string, dateCreated: Date, rule: any) {
    this.id = id;
    this.title = title;
    this.dateCreated = dateCreated;
    this.rule = rule;
  }
}

export class SubRule {
  parentId: number; //tagged to the original rule created
  operatorType: Operator; // take in operator to combine more sub rule

  constructor(parentId: number, operatorType: Operator) {
    this.parentId = parentId;
    this.operatorType = operatorType;
  }
}


export enum Operator {
  Add = '+',
  Subtract = '-',
  Multiply = '*',
  Divide = '/',
  Modulus = '%',
  And = '&&',
  Or = '||',
}
