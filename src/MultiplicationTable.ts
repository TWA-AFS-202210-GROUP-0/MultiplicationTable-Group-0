export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isValid = isValidInput(start,end)
    
    if (!isValid) {
      return ''
    }
    else
    {
      return multiplicationTable(start,end)
    }
    
  }

  
}

function  isValidInput(start:number, end:number):boolean {
  return isStartLessOrEqualThanEnd(start,end) && isInclusive(start,end)
}
function isStartLessOrEqualThanEnd(start: number, end: number):boolean {
  return start<=end
}

function isInclusive(start: number, end: number): boolean {
  return start<=10 && start>=1 && end<=10 && end>=1 
}

function multiplicationTable(start:number, end:number):string {
  var resultTable=''
  for (let index = start; index < end+1; index++) {
      resultTable += LineExpression(start,index) 
      resultTable += '\n' 
  }
  return resultTable
}
 
function LineExpression(start: number, end: number) :string {
  for (let index = star; index < array.length; index++) {
    const element = array[index];
    
  }
}

