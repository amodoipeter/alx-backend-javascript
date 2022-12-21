export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(emplist){
      return Object.keys(emplist).length;
    },
  };
}
