import Customer from './Customer';

export default interface User {
  id: string;
  name: string;
  customer?: Customer;
}
