import { sortByProfession } from "./sortByProfession";
import { testData as data } from "./_data";

describe("[sortByProfession]", () => {
  it("should sort users by profession: systemAnalytics > engineer > productOwner > freelancer > student ", () => {
    expect(sortByProfession(data)).toEqual([
      {
        firstName: "Pete",
        lastName: "Smitham",
        customerID: "406866",
        note: "Beneficium texo caecus cunae succedo usus casso agnosco.",
        profession: "systemAnalytics",
      },
      {
        firstName: "Murl",
        lastName: "Prohaska",
        customerID: "746194",
        note: "Cupiditate viduo cur conicio uter animus copiose suadeo.",
        profession: "engineer",
      },
      {
        firstName: "Matteo",
        lastName: "Ferry",
        customerID: "448732",
        note: "Tenetur infit cena cunctatio urbanus voluptas talio spoliatio concido.",
        profession: "productOwner",
      },
      {
        firstName: "Jevon",
        lastName: "O'Connell",
        customerID: "532529",
        note: "Urbs correptius varius officia subito.",
        profession: "freelancer",
      },
      {
        firstName: "Mercedes",
        lastName: "Bartell",
        customerID: "292369",
        note: "Uter uxor tyrannus curia defendo credo adipiscor.",
        profession: "student",
      },
    ]);
  });
});
