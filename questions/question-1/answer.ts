import { sortByUserName } from "./sortByUserName";
import { sortByProfession } from "./sortByProfession";
import { data } from "./_data";

export const sortedByUserName = sortByUserName(data);
export const sortedByUserProfession = sortByProfession(data);
