export type User = {
  firstName: string;
  lastName: string; // can be empty
  customerID: string; // ? customerID can only be a set of digital numbers
  note: string; // can be empty
  profession: Profession;
};

export enum Profession {
  STUDENT = "student",
  FREELANCER = "freelancer",
  PRODUCT_OWNER = "productOwner",
  ENGINEER = "engineer",
  SYSTEM_ANALYTICS = "systemAnalytics",
}
