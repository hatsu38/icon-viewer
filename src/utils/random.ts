import { faker } from "@faker-js/faker/locale/en";
export const randomUsername = () => faker.internet.userName();
export const randomPostText = () => faker.lorem.sentence({ max: 20, min: 10 });
export const randomInt = () => faker.number.int({ max: 100, min: 1 });
