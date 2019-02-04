const makeBoard = () => {
  const letterDistribution = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const vowels = ['A', 'E', 'I', 'O', 'U']
  const consonants = letterDistribution.filter(x => !vowels.includes(x))

  const create = (letter, quantity) => {
    return Array(quantity).fill(letter)
  }

  let letters
  const createLetters = () => {
    const E = create('E', 19)
    const T = create('T', 13)
    const A = create('A', 12)
    const R = create('R', 12)
    const I = create('I', 11)
    const N = create('N', 11)
    const O = create('O', 11)
    const S = create('S', 9)
    const D = create('D', 6)
    const C = create('C', 5)
    const H = create('H', 5)
    const L = create('L', 5)
    const F = create('F', 4)
    const M = create('M', 4)
    const P = create('P', 4)
    const U = create('U', 4)
    const G = create('G', 3)
    const Y = create('Y', 3)
    const W = create('W', 2)
    const B = create('B', 1)
    const J = create('J', 1)
    const K = create('K', 1)
    const Q = create('Q', 1)
    const V = create('V', 1)
    const X = create('X', 1)
    const Z = create('Z', 1)
    letters = [...A, ...B, ...C, ...D, ...E, ...F, ...G, ...H, ...I, ...J, ...K, ...L, ...M, ...N, ...O, ...P, ...Q, ...R, ...S, ...T, ...U, ...V, ...W, ...X, ...Y, ...Z]
    return letters
  }

  createLetters()
  const chooseTile = (letterDistribution) => {
    let randomIndex = Math.floor(Math.random()*letterDistribution.length)
    let randomletter = letterDistribution[randomIndex]
    letterDistribution = letterDistribution.splice(randomIndex, 1)
    return randomletter
  }

  // Need at least 4 vowels and 4 consonants
  const checkBoggleBoard = (matrix) => {
    let checkArray = []
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        checkArray.push(matrix[i][j])
      }
    }
    let vowelCount = checkArray.filter(x => vowels.includes(x)).length
    let consonantCount = checkArray.filter(x => consonants.includes(x)).length
    return [vowelCount, consonantCount]
  }

  const createBoggleBoard = () => {
    let boggleboard = []
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 4; j++) {
        row.push(chooseTile(letters))
      }
      boggleboard.push(row)
    }
    if (checkBoggleBoard(boggleboard)[0] < 4 || checkBoggleBoard(boggleboard)[1] < 4) {
      createLetters()
      createBoggleBoard()
      return boggleboard
    }
    return boggleboard
  }

  const newBoggleBoard = createBoggleBoard()
  return newBoggleBoard
}

export default makeBoard
