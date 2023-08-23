import { EnterpriseCreateVehicleCustomerFactorty } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactorty } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactorty();
const individualFactory = new IndividualCreateVehicleCustomerFactorty();

const car1 = enterpriseFactory.createVehicle('Fusca', 'João');
const car2 = individualFactory.createVehicle('Celta', 'Maria');

car1.pickUp();
console.log('--------------');
car2.pickUp();
