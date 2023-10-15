# 1.

There is an array, each item has such format:

```javascript
{
  firstName: 'xxx',
  lastName: 'xxx',
  customerID: 'xxx',
  note: 'xxx',
  profession: 'xxx',
}
```

lastName, note can be empty, customerID can only be a set of digital numbers. profession can only have 'student', 'freelancer', 'productOwner', 'engineer' or 'systemAnalytics'.

## Q1.

Please follow the principle ('firstName' + 'lastName' + 'customerID') to sort this array and print it out.

## Q2.

Please sort by 'profession' to follow the principle.
('systemAnalytics' > 'engineer' > 'productOwner' > 'freelancer' > 'student')
