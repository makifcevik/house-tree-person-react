interface ITreeSketch {
  id: bigint;
  sketch_id: bigint;
  trunk: number;
  root: number;
  branches: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export default ITreeSketch;
