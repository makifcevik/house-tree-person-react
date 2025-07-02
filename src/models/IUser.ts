interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: string | null;//Date;
  password: string;
  profile_picture: string;
  privilege: number;
  remember_token: string;
  created_at: string;//Date;
  updated_at: string;//Date;
}

export default IUser;
