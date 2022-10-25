export class MultiplicationTable {
  public render(start: number, end: number): string{
    const isValid = isValidInput(start,end)
    
    if (!isValid) {
      return ''
    }
    else
    {
      return generateMultiplicationTable(start,end)
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

function generateMultiplicationTable(start:number, end:number):string {
  var multiplicationTable=''
  for (let index = start; index < end; index++) {
      multiplicationTable += generateLineExpression(start,index) 
      multiplicationTable += '\n' 
  }
  multiplicationTable += generateLineExpression(start,end) 
  return multiplicationTable
}

function generateLineExpression(start: number, end: number): string{
  var lineExpression =''
  for (let index = start; index < end; index++) {
    lineExpression += generateExpression(index,end) 
    lineExpression += '  ' 
}
lineExpression += generateExpression(end,end) 
return lineExpression 
}

function generateExpression(start: number, end: number) :string {
  const multiple = start * end
  return start + '*' + end + '=' + multiple
}


