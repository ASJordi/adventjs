export function executeCommands(commands) {

  let reg = [0, 0, 0, 0, 0, 0, 0, 0];

  let exec = {
    MOV: (x) => {
      let mov = x.split(",")[0].split(" ")[1]
      reg[+x.at(-1)] = (reg[+mov.at(-1)] * +mov.startsWith("V")) + (~~+mov)
    },
    ADD: (x) => {
      let op1 = +x.split(",")[0].at(-1)
      let op2 = +x.split(",")[1].at(-1)
      reg[op1] = (reg[op1] + reg[op2]) % 256
    },
    INC: (x) => {
      reg[+x.at(-1)] = (reg[+x.at(-1)] + 1) % 256
    },
    DEC: (x) => {
      reg[+x.at(-1)] = (((reg[+x.at(-1)] - 1) % 256) + 256) % 256
    },
    JMP: (x) => {
      commands = commands
        .concat(
          commands.slice(+x.split(" ").at(-1),
            (commands.indexOf(x) + 1) * !!reg[0])
        )
    }
  }

  for (let i = 0; i < commands.length; i++) {
    exec[commands[i].split(" ")[0]](commands[i])
  }

  return reg;
}
