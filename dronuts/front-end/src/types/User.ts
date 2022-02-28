export default interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  username: string;
  password: string;
  access_level: string;
};

export const EmptyUser: User = {
  id: -1,
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  username: '',
  password: '',
  access_level: '',
};
