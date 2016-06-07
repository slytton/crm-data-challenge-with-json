const expect = require("chai").expect
const lib = require("../src/challenge")

const rawData = {
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
          "company_id": 4,
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

describe("#companies", () => {

  it("returns an array of companies and their employees", () => {
    const expectedOutput = [
      {
        name: "Mueller LLC",
        employees: []
      },
      {
        name: "Schmidt-Rolfson",
        employees: [
          {
            "id": 3,
            "first_name": "Elyse",
            "last_name": "Jensen",
            "title": "Chief Communications Consultant"
          },
          {
            "id": 6,
            "first_name": "Elise",
            "last_name": "Camylle",
            "title": "Regional Applications Designer"
          }
        ]
      },
      {
        name: "Steuber, Wisozk and Gorczany",
        employees: [
          {
            "id": 6,
            "first_name": "Elise",
            "last_name": "Camylle",
            "title": "Internal Mobility Executive"
          },
        ]
      }
    ]

    expect(lib.companies(rawData)).to.deep.equal(expectedOutput)
  })

})

describe("employments", () => {

  it("returns an array of employments with the person and company info", () => {

    const expectedOutput = [
      {
        "company_id": 4,
        "company_name": "Schmidt-Rolfson",
        "person_id": 3,
        "person_first_name": "Elyse",
        "person_last_name": "Jensen",
        "title": "Chief Communications Consultant"
      },
      {
        "company_id": 4,
        "company_name": "Schmidt-Rolfson",
        "person_id": 6,
        "person_first_name": "Elise",
        "person_last_name": "Camylle",
        "title": "Regional Applications Designer"
      },
      {
        "company_id": 9,
        "company_name": "Steuber, Wisozk and Gorczany",
        "person_id": 6,
        "person_first_name": "Elise",
        "person_last_name": "Camylle",
        "title": "Internal Mobility Executive"
      },

    ]

    expect(lib.employments(rawData)).to.deep.equal(expectedOutput)
  })

})

describe("peopleWithoutEmployments", () => {

  it("returns an array of people without employments", () => {
    let expectedOutput = [
      {
        "id": 1,
        "first_name": "Whitney",
        "last_name": "Domenic",
      },
    ]

    expect(lib.peopleWithoutEmployments(rawData)).to.deep.equal(expectedOutput)
  })

})
