import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getEmployee() {
        return [{
        id: 1,
        name: 'agustin'
    },
    {
        id: 2,
        name: 'oracio'
    },
    {
        id: 3,
        name: 'martin'
    }]
    }
}