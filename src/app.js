export class Validator {
  validateUsername(name){
    return /^[a-z]+[-_]*\d{0,3}[-_]*[a-z]+$/.test(name) ;
  }
}
const a = new Validator();
console.log(a.validateUsername('gd45-fdf'))