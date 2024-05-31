import { faker } from "@faker-js/faker/locale/en";
export const randomUsername = faker.internet.userName();
export const randomPostText = faker.lorem.sentence({ max: 20, min: 10 });
