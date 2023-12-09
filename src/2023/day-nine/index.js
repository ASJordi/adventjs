function adjustLights(lights) {
    let s = "";
    let r = 0;

    for (let l of lights) {
        r += l === s;
        s = l === s ? " " : l;
    }

    return r;
}

module.exports = adjustLights;