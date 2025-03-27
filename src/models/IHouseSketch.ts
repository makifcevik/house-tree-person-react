interface IHouseSketch {
  id: bigint;
  sketch: bigint;
  chimney: number;
  smoke: number;
  door: number;
  roof: number;
  windows: number;
  window_quantity: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export default IHouseSketch;
