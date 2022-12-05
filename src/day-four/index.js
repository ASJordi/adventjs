function fitsInOneBox(boxes) {

  const boxOrder = boxes.sort((a, b) => a.l - b.l);

  const order = boxOrder.map((box, i) => {

    if(i + 1 < boxOrder.length){
      return box.l < boxOrder[i + 1].l 
      && box.w < boxOrder[i + 1].w 
      && box.h < boxOrder[i + 1].h;
    } else{
      return true;
    }

  });

  return !order.some(ele => !ele);

}

module.exports = fitsInOneBox;