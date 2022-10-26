export class MultiplicationTable {
  public render(start: number, end: number): string{
    if(!this.isInputValid(start, end)){return ''}
    return this.createMultiplicationTable(start, end)
  }

  isInputValid(start:number, end: number): boolean {
    return this.isInRange1To10(start) && this.isInRange1To10(end) && this.isStartLessEqualThanEnd(start, end)
  }

  isInRange1To10(num: number){
    return num in [...Array(10).keys()].map(i => i + 1)
  }

  isStartLessEqualThanEnd(start:number, end: number){
    return start <= end
  }

  createMultiplicationTable(start: number, end: number): string {
    const lines = []
    for(let i = start; i < end + 1; i++) {
      lines.push(this.createLine(start, i))
    }
    return lines.join('\n')
  }

  createLine(lineStart: number, lineEnd: number): string {
    const equations = []
    for(let i = lineStart; i < lineEnd + 1; i++){
      equations.push(this.createEquation(i, lineEnd))
    }
    return equations.join('  ')
  }

  createEquation(num1: number, num2:number): string {
    return `${num1}*${num2}=${num1*num2}`
  }

}
