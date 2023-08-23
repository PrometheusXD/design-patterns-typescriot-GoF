import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class IndividualCreateVehicleCustomerFactorty
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(carName: string, CustomerName: string): VehicleProtocol {
    const customer = this.createCustomer(CustomerName);
    return new IndividualCar(carName, customer);
  }
}
