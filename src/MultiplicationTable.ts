export class MultiplicationTable {
  
  public render(start: number, end: number): string{
    if(this.IsValidStartandEndNumber(start, end)){
      if(this.IsInRange(start, end)){
        return this.equation(start, end);
      }
    }
    return '';
  }
  private IsValidStartandEndNumber(start: number, end: number): boolean {
    return start <= end;
  }
  private IsInRange(start: number, end: number): boolean {
    return (start >= 1) && (start <= 10) && (end >= 1) && (end <= 10);
  }
  private getRange(start: number, end: number): number[]{
    return Array.from({length: end-start+1}, (value, index) => start+ index);
  }
  private equation(num1: number, num2: number): string {
    const result = num1 * num2;
    return num1 + '*' + num2 + '=' + result;
  }





}

 
// export function MultipliTable(start: number, end: number): boolean {

// }
// export function Lines(start: number, lineNum: number): string {

// }
