interface ITreeSketch {
  id: number;
  sketch_id: number;
  trunk: number;
  root: number;
  branches: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export default ITreeSketch;
