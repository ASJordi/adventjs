export function getCompleted(part, total) {

  let partToArray = part.split(':');
  let totalToArray = total.split(':');

  let p1 = (partToArray[0] * 60)
  let p2 = (partToArray[1] * 1)
  let p3 = (partToArray[2] / 60)
  let t1 = (totalToArray[0] * 60)
  let t2 = (totalToArray[1] * 1)
  let t3 = (totalToArray[2] / 60)

  let partToMinutes =  p1 + p2 + p3 ;
  let totalToMinutes = t1 + t2 + t3;

  const lowestFraction = ((x0) => {
    let eps = 1.0E-15;
    let h, h1, h2, k, k1, k2, a, x;

    x = x0;
    a = Math.floor(x);
    h1 = 1;
    k1 = 0;
    h = a;
    k = 1;

    while (x-a > eps*k*k) {
        x = 1/(x-a);
        a = Math.floor(x);
        h2 = h1; h1 = h;
        k2 = k1; k1 = k;
        h = h2 + a*h1;
        k = k2 + a*k1;
    }

    return h + "/" + k;
  });
    
  let res = lowestFraction(partToMinutes / totalToMinutes);

  return res;
}
