// Hard-coded way
/*export function Sticker(target) {
  target.prototype.stickers = ['GitHub', 'Google', 'Mozilla', 'Angular'];
}*/

// Param way
export function Sticker(configuration) {
  return function(target) {
    target.prototype.stickers = configuration.stickers;
  }  
}

