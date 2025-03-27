interface IDatabaseDownload {
  id: bigint;
  user_id: bigint;
  download_at: Date;
  created_at: Date;
  updated_at: Date;
}

export default IDatabaseDownload;
