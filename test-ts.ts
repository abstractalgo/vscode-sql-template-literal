type SelectOneUser = {
  id: number;
  username: string;
  email: string;
};

const query = sql<SelectOneUser>`SELECT * FROM users`;
