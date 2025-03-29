interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified_at: Date;
  password: string;
  profile_picture: string;
  status: number;
  privilage: number;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
}

export default IUser;
