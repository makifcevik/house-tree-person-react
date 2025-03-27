interface IPatient {
  id: bigint;
  id_initials: string;
  gender: string;
  age: number;
  externalization: number;
  anxiety: number;
  depression: number;
  iq: number;
  created_at: Date;
  updated_at: Date;
}

export default IPatient;
