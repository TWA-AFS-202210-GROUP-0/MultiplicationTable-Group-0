export class MultiplicationTable {
  public render(start: number, end: number): string{
    if(this.isNumberPairValid(start,end)){
      console.log(this.CreateMutiplicationTable(start,end));
      return this.CreateMutiplicationTable(start,end)
    }
    else{
      return "";
    }
  }

  public isNumberPairValid( start: number, end: number): boolean{
    return( this.isNumberInRange10(start) && this.isNumberInRange10(end) && this.isStartLessEqualThanEnd(start,end))

  }

  private isNumberInRange10(num : number){
    if (num <= 10 && num > 0 ){
      return true;
    }
    return false;
  }

  private isStartLessEqualThanEnd( start: number, end: number){
    if ( start <= end){
      return true;
    }
    return false;
  }

  public CreateMutiplicationTable(start: number, end: number): string{
    if (start === end){
      return this.BuildOneLineMultiplication(start, end)
    }
    else{
      return (this.CreateMutiplicationTable(start, end-1) + this.BuildOneLineMultiplication(start,end))
    }
  }

  private BuildOneLineMultiplication(n1: number, n2: number){
    var oneLine = "";
    for (let i = 0; i < n2 - n1 + 1; i++){
      oneLine += `${n1 + i}*${n2}=${(n1+i)*n2}  `; 
    }
    oneLine += "\n"
    return oneLine;

  }
}
