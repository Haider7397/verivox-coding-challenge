import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Tariff } from '../models';

export class MockData implements InMemoryDbService {

    createDb(): {} | Observable<{}> | Promise<{}> {
        const tariffs: Tariff[] = [
            { 
              id: 1, 
              name: 'Basic Plan', 
              downloadSpeed: 50, 
              uploadSpeed: 10, 
              price: 9.99, 
              benefits: [
                'Basic customer support', 
                'Email notifications',
                'Data usage reports',
                'Online account management'
              ] 
            },
            { 
              id: 2, 
              name: 'Standard Plan', 
              downloadSpeed: 100, 
              uploadSpeed: 25, 
              price: 19.99, 
              benefits: [
                'Priority customer support', 
                'SMS notifications',
                'Extended device warranty',
                'Monthly usage statistics'
              ] 
            },
            { 
              id: 3, 
              name: 'Premium Plan', 
              downloadSpeed: 200, 
              uploadSpeed: 50, 
              price: 29.99, 
              benefits: [
                '24/7 customer support', 
                'Phone notifications',
                'Free router upgrade',
                'Dedicated account manager'
              ] 
            },
            { 
              id: 4, 
              name: 'Ultra Plan', 
              downloadSpeed: 500, 
              uploadSpeed: 150, 
              price: 49.99, 
              benefits: [
                '24/7 premium support', 
                'Home security alerts',
                'Annual device upgrade',
                'Unlimited data'
              ] 
            },
            { 
              id: 5, 
              name: 'Economy Plan', 
              downloadSpeed: 30, 
              uploadSpeed: 8, 
              price: 7.99, 
              benefits: [
                'Basic customer support', 
                'Email and SMS notifications',
                'Data usage alerts',
                'Self-service portal'
              ] 
            },
            { 
              id: 6, 
              name: 'Business Plan', 
              downloadSpeed: 1000, 
              uploadSpeed: 250, 
              price: 79.99, 
              benefits: [
                '24/7 business support', 
                'Priority outage resolution',
                'Multiple static IPs',
                'Service level agreement'
              ] 
            },
            { 
              id: 7, 
              name: 'Family Plan', 
              downloadSpeed: 150, 
              uploadSpeed: 135, 
              price: 24.99, 
              benefits: [
                'Family support line', 
                'Parental controls',
                'Multiple device connections',
                'Family usage dashboard'
              ] 
            },
            { 
              id: 8, 
              name: 'Gaming Plan', 
              downloadSpeed: 300, 
              uploadSpeed: 175, 
              price: 39.99, 
              benefits: [
                'Gaming optimized support', 
                'Low latency routing',
                'Gaming device prioritization',
                'High-speed game downloads'
              ] 
            }
          ];

          return { tariffs };
    }

}