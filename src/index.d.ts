export function getPersons(): {
  name: string;
  age: number;

}[];

export function personToString(
  person:
      | {
            name: string;
            age: number;
            gender: 'male' | 'female';
        }
      | {
            name: string;
            age: number;
            gender: 'male' | 'female';
            company: string;
        },
): string;