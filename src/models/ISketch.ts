interface ISketch {
  id: number;
  uploaded_by: number;
  drawn_by: number;
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
