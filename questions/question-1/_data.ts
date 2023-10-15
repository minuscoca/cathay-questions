import { type User, Profession } from "./type";
import { faker } from "@faker-js/faker";

export const data: User[] = faker.helpers.multiple(
  () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    customerID: faker.string.numeric(6),
    note: faker.lorem.lines(1),
    profession: faker.helpers.enumValue(Profession),
  }),
  {
    count: 50,
  },
);

export const testData: User[] = [
  {
    firstName: "Matteo",
    lastName: "Ferry",
    customerID: "448732",
    note: "Tenetur infit cena cunctatio urbanus voluptas talio spoliatio concido.",
    profession: Profession.PRODUCT_OWNER,
  },
  {
    firstName: "Mercedes",
    lastName: "Bartell",
    customerID: "292369",
    note: "Uter uxor tyrannus curia defendo credo adipiscor.",
    profession: Profession.STUDENT,
  },
  {
    firstName: "Jevon",
    lastName: "O'Connell",
    customerID: "532529",
    note: "Urbs correptius varius officia subito.",
    profession: Profession.FREELANCER,
  },
  {
    firstName: "Murl",
    lastName: "Prohaska",
    customerID: "746194",
    note: "Cupiditate viduo cur conicio uter animus copiose suadeo.",
    profession: Profession.ENGINEER,
  },
  {
    firstName: "Pete",
    lastName: "Smitham",
    customerID: "406866",
    note: "Beneficium texo caecus cunae succedo usus casso agnosco.",
    profession: Profession.SYSTEM_ANALYTICS,
  },
];
