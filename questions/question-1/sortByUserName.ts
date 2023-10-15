import { type User } from "./type";

export function sortByUserName(users: User[], orderBy: "asc" | "desc" = "asc") {
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
    "[sortByUserName]",
    sorted.map((user) => ({
      index: user.firstName + user.lastName + user.customerID,
    })),
  );

  return sorted;
}

function sortingPrinciple(user: User) {
  return user.firstName + user.lastName + user.customerID;
}
