export class MultiplicationTable {
  



  public render(start: number, end: number): string{
    
  }
  private IsValidStartandEndNumber(start: number, end: number): boolean {
    return start <= end;
  }
  private IsInRange(start: number, end: number): boolean {
    return (start >= 1) && (start <= 10) && (end >= 1) && (end <= 10);
  }




}

 
export function MultipliTable(start: number, end: number): boolean {

}
export function Lines(start: number, lineNum: number): string {

}
export function Equation(start: number, end: number): string {
  return `${start} * ${end} = ${start* end}`;
}