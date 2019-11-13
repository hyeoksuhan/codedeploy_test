import { createConnection, Connection } from 'typeorm';

class DBConnection {
  public async connect(): Promise<Connection> {
    return await createConnection();
  }
}

export default new DBConnection();
