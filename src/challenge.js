
module.exports = {
  companies: (data) => {
    var companies = JSON.parse(JSON.stringify(data.companies));

    data.people.forEach((person) => {
      person.employments.forEach((employment) => {
        var company = companies.find((company) => {
          return company.id === employment.company_id
        })
        var newPerson = { id: person.id,
                          first_name: person.first_name,
                          last_name: person.last_name,
                          title: employment.title }

        if(company.employees){
          company.employees.push(newPerson)
        }else{
          company.employees = [newPerson];
        }
      })
    })

    companies.forEach((company) => {
      company.employees = company.employees || [] ;
      delete company.id;
    })
    return companies;
  },

  employments: (data) => {
    var employments = []
    data.people.forEach((person) => {
      person.employments.forEach((employment)=>{
        var company = data.companies.find((company) => {
          return company.id === employment.company_id;
        })
        employments.push({ company_id: employment.company_id,
                           company_name: company.name,
                           person_id: person.id,
                           person_first_name: person.first_name,
                           person_last_name: person.last_name,
                           title: employment.title })
      })
    })
    return employments;
  },

  peopleWithoutEmployments: (data) => {
    var noEmployments = [];

    data.people.forEach(function(person){
      if(person.employments.length === 0) noEmployments.push({id: person.id,
                                                            first_name: person.first_name,
                                                            last_name: person.last_name })
    })
    return noEmployments;
  }
}
