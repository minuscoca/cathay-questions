import { Profession, type User } from "./type";

const sortingWeight: Profession[] = [
  Profession.SYSTEM_ANALYTICS,
  Profession.ENGINEER,
  Profession.PRODUCT_OWNER,
  Profession.FREELANCER,
  Profession.STUDENT,
];

export function sortByProfession(
  users: User[],
  orderBy: "asc" | "desc" = "asc",
) {
  const sorted = [...users];

  sorted.sort((user1, user2) => {
    const a = sortingPrinciple(user1);
    const b = sortingPrinciple(user2);
    if (orderBy === "asc") {
      return a > b ? 1 : -1;
    } else {
      return a > b ? -1 : 1;
    }
  });

  console.log(
    "[sortedByUserProfession]",
    sorted.map((user) => ({
      index: user.profession,
    })),
  );

  return sorted;
}

function sortingPrinciple(user: User) {
  return sortingWeight.findIndex(
    (profession) => profession === user.profession,
  );
}
