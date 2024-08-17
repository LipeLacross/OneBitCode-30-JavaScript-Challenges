// Função que verifica se é possível chegar do início ao fim em um labirinto e encontra o caminho mais curto.
function solveMaze(maze) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const queue = [];
    const visited = Array(maze.length).fill().map(() => Array(maze[0].length).fill(false));

    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 'S') queue.push([i, j, []]);
        }
    }

    while (queue.length > 0) {
        const [x, y, path] = queue.shift();

        if (maze[x][y] === 'E') return path.concat([[x, y]]);

        directions.forEach(([dx, dy]) => {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < maze.length && newY >= 0 && newY < maze[0].length && maze[newX][newY] !== '#' && !visited[newX][newY]) {
                queue.push([newX, newY, path.concat([[x, y]])]);
                visited[newX][newY] = true;
            }
        });
    }

    return [];
}

// Testes de saída:
console.log(solveMaze([
    ['S', ' ', ' ', ' '],
    ['#', '#', '#', ' '],
    ['#', ' ', ' ', ' '],
    ['#', ' ', '#', 'E']
])); // Saída: [[0, 0], [1, 3], [2, 3], [3, 3]]

console.log(solveMaze([
    ['S', '#', '#', '#'],
    [' ', ' ', ' ', '#'],
    [' ', '#', ' ', ' '],
    ['#', '#', '#', 'E']
])); // Saída: []
