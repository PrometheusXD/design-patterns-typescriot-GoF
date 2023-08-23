import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CreateVehicleCustomerFactory } from './customer-vehicle-factory';

export class EnterpriseCreateVehicleCustomerFactorty
  implements CreateVehicleCustomerFactory
{
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(carName: string, CustomerName: string): VehicleProtocol {
    const customer = this.createCustomer(CustomerName);
    return new EnterpriseCar(carName, customer);
  }
}
