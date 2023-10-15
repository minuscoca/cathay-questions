import { sortByUserName } from "./sortByUserName";
import { testData as data } from "./_data";

describe("[sortByUserName]", () => {
  it("should sort users by firstName + lastName + customerID", () => {
    expect(sortByUserName(data)).toEqual([
      {
        firstName: "Jevon",
        lastName: "O'Connell",
        customerID: "532529",
        note: "Urbs correptius varius officia subito.",
        profession: "freelancer",
      },
      {
        firstName: "Matteo",
        lastName: "Ferry",
        customerID: "448732",
        note: "Tenetur infit cena cunctatio urbanus voluptas talio spoliatio concido.",
        profession: "productOwner",
      },
      {
        firstName: "Mercedes",
        lastName: "Bartell",
        customerID: "292369",
        note: "Uter uxor tyrannus curia defendo credo adipiscor.",
        profession: "student",
      },
      {
        firstName: "Murl",
        lastName: "Prohaska",
        customerID: "746194",
        note: "Cupiditate viduo cur conicio uter animus copiose suadeo.",
        profession: "engineer",
      },
      {
        firstName: "Pete",
        lastName: "Smitham",
        customerID: "406866",
        note: "Beneficium texo caecus cunae succedo usus casso agnosco.",
        profession: "systemAnalytics",
      },
    ]);
  });
});
