export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
    
  for (const category in reportWithIterator.allEmployees) {
    employeeNames.push(...reportWithIterator.allEmployees[category]);
  }
  
  return employeeNames.join(' | ');
  }
