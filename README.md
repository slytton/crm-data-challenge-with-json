# CRM Data Challenge

You just started a new job.  Your boss comes over and says that
their CRM (customer-relationship-management) app is too hard to work with,
and that you need to do some data transformation.  They tell you that you
will get a big hash of all the data, and you need
to write some code that will take that data and convert it to
other data structures more useful to the business.

The original data set has data about people and companies,
and about which person works for which companies as well as
what their job titles are.  The original data looks like this:

```json
{
  "people": [
    {
      "id": 1,
      "first_name": "Whitney",
      "last_name": "Domenic",
      "employments": [ ]
    },
    {
      "id": 3,
      "first_name": "Elyse",
      "last_name": "Jensen",
      "employments": [
        {
          "company_id": 4,
          "title": "Chief Communications Consultant"
        }
      ]
    },
    {
      "id": 6,
      "first_name": "Elise",
      "last_name": "Camylle",
      "employments": [
        {
          "company_id": 1,
          "title": "Regional Applications Designer"
        },
        {
          "company_id": 9,
          "title": "Internal Mobility Executive"
        }
      ]
    },
  ],
  "companies": [
    {
      "id": 1,
      "name": "Mueller LLC"
    },
    {
      "id": 4,
      "name": "Schmidt-Rolfson"
    },
    {
      "id": 9,
      "name": "Steuber, Wisozk and Gorczany"
    }
  ]
}
```

## Challenge #1 - employees of companies

Write a function that will take in the raw data, and return an array of objects that contain

- the company name
- an `employees` property that points to an array of people and their titles

Some example output is:

```js
[
  {
    name: "Nicolas and Sons",
    employees: [
      {
        id: 20,
        first_name: "Savannah",
        last_name: "Clementina",
        title: "Chief Communications Consultant"
      },
      {
        id: 46,
        first_name: "Elyse",
        last_name: "Jensen",
        title: "Human Directives Engineer"
      },
    ]
  }
]
```

## Challenge #2 - all employments

Write a function that will take in raw data and return an array of all the employments,
including the person name, company name, person id, company id
and title.

```js
[
  {
    company_id: 4,
    company_name: "Nicolas and Sons",
    person_id: 20,
    person_first_name: "Savannah",
    person_last_name: "Clementina",
    title: "Chief Communications Consultant"
  },
  {
    company_id: 6,
    company_name: "Mueller LLC",
    person_id: 20,
    person_first_name: "Elyse",
    person_last_name: "Jensen",
    title: "Human Directives Engineer"
  },
]
```

## Challenge #3 - people without employments

Write some code that will return an array of all the people
who have no employments.  The resulting hashes in the array should
_not_ include the `:employments` key.

```js
[
  {
    id: 20,
    first_name: "Savannah",
    last_name: "Clementina"
  },
  {
    id: 32,
    first_name: "Elyse",
    last_name: "Jensen",
  }
]
```
