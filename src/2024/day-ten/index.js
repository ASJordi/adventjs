export function compile(instructions) {
    let registers = {};

    for (let i = 0; i < instructions.length; i++) {
        const r = instructions[i];
        const [instruction, dirA, dirB] = r.split(" ");

        switch (instruction) {
            case "MOV":
                if (isNaN(dirA)) {
                    registers[dirA] ??= 0;
                    registers[dirB] = registers[dirA];
                } else registers[dirB] = +dirA;
                break;
            case "INC":
                registers[dirA] ??= 0;
                registers[dirA]++;
                break;
            case "DEC":
                registers[dirA] ??= 0;
                registers[dirA]--;
                break;
            case "JMP":
                registers[dirA] ??= 0;
                if (registers[dirA] === 0) i = +dirB - 1;
                break;
        }
    }

    return registers["A"]
}