# 8.

## Interface and where will you be using, please make some examples.

Interface 是用來定義 object 的型別，例如有個 user object 需要定義一個 User 型別，則可以使用 interface 來定義。

```typescript
const user: User = {
  name: 'John',
  age: 18,
};

interface User {
  name: string;
  age: number;
}
```

interface 的功能與 type alias 相似但有幾點不同，根據[官方文件](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)兩者可以自由選用，但我在實做上習慣使用 type 來定義 object 而不使用 interface，原因基於以下幾點：

1. interface 只能用來定義 object 而 type 可以用來定義包含 object 以外的其他型別，因此使用 type 比較通用。
2. 如果不小心有重複命名的話 type 會報錯， 而 interface 不會報錯而是會將兩者合併，到使用到的地方才會發現，因此使用 type 比較嚴謹。
3. 在使用 utility types 如 Pick, Omit 時，type 的語法比較簡潔。

```typescript
interface User {
  id: string;
  name: string;
  age: number;
  postIds: string[];
}

interface UserWithoutPostIds extends Omit<User, 'postIds'> {}
```

```typescript
type User = {
  id: string;
  name: string;
  age: number;
  postIds: string[];
};

type UserWithoutPostIds = Omit<User, 'postIds'>;
```

4. 如果要從已經定義的 object 中得到型別定義時，用 interface 需要自己寫定義，而用 type 可以用 typeof 直接得到定義，因此使用 type 可以避免重複。

```typescript
const data = [
  { name: 'Aareal Bank', location: { city: 'Wiesbaden', country: 'Germany' } },
  { name: 'ABN AMRO', location: { city: 'Amsterdam', country: 'Netherlands' } },
  { name: 'AB Bank', location: { city: 'Dhaka', country: 'UBangladesh' } },
] as const;

type Banks = typeof data;
```

## Enum and where will you be using, please make some examples.

以第一題的資料為例。

假如要寫一個 filter function，可以將 function 的 profession 參數的型別指定為 enum Profession，且在使用時一定要使用 enum Profession，就算將 profession 參數傳入 'studant' 也不行，因此比較嚴謹。

```typescript
export type User = {
  firstName: string;
  lastName: string;
  customerID: string;
  note: string;
  profession: Profession;
};

enum Profession {
  STUDENT = 'student',
  FREELANCER = 'freelancer',
  PRODUCT_OWNER = 'productOwner',
  ENGINEER = 'engineer',
  SYSTEM_ANALYTICS = 'systemAnalytics',
}

function getUsersByProfession(users: User[], profession: Profession) {
  return users.filter((user) => user.profession === profession);
}

const students = getUsersByProfession([], Profession.STUDENT);
```

我在實做上比較少用 enum 而比較多透過定義一個 object 後使用 as const 得到 object 的 readonly type，並定義一個 utility type 以得到 object 的 values。這樣在傳入 profession 參數時除了使用 Profession.STUDENT 外也可以直接使用 'student'，使用上比較直觀。

```typescript
const Profession = {
  STUDENT: 'student',
  FREELANCER: 'freelancer',
  PRODUCT_OWNER: 'productOwner',
  ENGINEER: 'engineer',
  SYSTEM_ANALYTICS: 'systemAnalytics',
} as const;

type ValuesOf<T> = T[keyof T];
type Profession = ValuesOf<typeof Profession>;
const students = getUsersByProfession([], 'student');
```
