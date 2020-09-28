import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = (todayWithNoTime - value)/1000; //return value in seconds

    let years,months,days,hours,minutes;
    console.log(value)
    if (dateDifference<=59){
      return `a few seconds ago`
    }
    if (dateDifference>60 && dateDifference<=3599){
      minutes=Math.floor(dateDifference/60);

      if (minutes ==1){
        return `${minutes} minutes ago`;
      }
      else{
        return `${minutes} minutes ago`;
      }
    }
    else if (dateDifference>=3600 && dateDifference <=86399){
      hours=Math.floor(dateDifference/86400);

      if (hours ==1){
        return `${hours} hour ago`;
      }
      else{
        return `${hours} hours ago`;
      }
    }
    else if (dateDifference>=86400 && dateDifference <=2591999){
      days=Math.floor(dateDifference/86400);

      if (days ==1){
        return `${days} days ago`;
      }
      else{
        return `${days} days ago`;
      }
    }
    else if (dateDifference >= 2592000 && dateDifference <= 31535999) {
      months = Math.floor(dateDifference / 2592000);

      if (months == 1) {
        return `${months} month ago`;
      }
      else {
        return `${months} months ago`;
      }
    }
    else if (dateDifference >= 31536000) {
      years = Math.floor(dateDifference / 31536000);

      if (years == 1) {
        return `${years} year ago`;
      }
      else {
        return `${years} years ago`;
      }
    }
  }
}
