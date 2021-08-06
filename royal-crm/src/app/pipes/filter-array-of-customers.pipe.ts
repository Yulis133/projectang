import { Pipe, PipeTransform } from '@angular/core';
import { CustomersEditComponent } from '../components/customers-edit/customers-edit.component';

@Pipe({
  name: 'filterArrayOfCustomers',
})
export class FilterArrayOfCustomersPipe implements PipeTransform {
  transform(
    value: Customer[],
    properyName: string,
    searchTerm: string
  ): Customer[] {
    return value?.filter((item) =>
      item[propertyName].tolowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
