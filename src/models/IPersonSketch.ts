interface IPersonSketch {
  id: number;
  sketch_id: number;
  gender: number;
  head: number;
  hair: number;
  eyes: number;
  ears: number;
  nose: number;
  mouth: number;
  body: number;
  neck: number;
  arms: number;
  hands: number;
  legs: number;
  feet: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export default IPersonSketch;
