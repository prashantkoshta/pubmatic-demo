
export class Matdata {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public datetimes: MDateTime,
    public tags: Array<string>
  ) {}

  
}

class MDateTime {
      constructor(
        public lastexecuted:Date,
        public updated:Date
    ) {}
}
