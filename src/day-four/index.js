function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    return (a.l + a.w + a.h) - (b.l + b.w + b.h)
  }).every((box, i) => { 
    if( i === 0 ) return true; 
    const prev = boxes[i - 1] 
    return box.l > prev.l && box.w > prev.w && box.h > prev.h 
  });
}

module.exports = fitsInOneBox;