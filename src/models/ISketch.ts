interface ISketch {
  id: bigint;
  uploaded_by: bigint;
  drawn_by: bigint;
  pressure: number;
  interrupted_lines: number;
  chaotic_lines: number;
  object_size: number;
  object_location: number;
  shaded_figures: number;
  created_at: Date;
  updated_at: Date;
}

export default ISketch;
