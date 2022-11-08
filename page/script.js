const getOddNumbers = (N) => N.filter((n) => n % 2 !== 0).length;
const isPalindrome = (A) => A.split('').reverse().join('') === A;
const createObject = (C, V) => JSON.stringify({ [C]: V });

const tasks = [
    {
        fn: getOddNumbers,
        defaultArgument: '[1, 3, 4, 2]',
    },
    {
        fn: isPalindrome,
        defaultArgument: '\'arara\'',
    },
    {
        fn: createObject,
        defaultArgument: ['\'name\'','\'gabriel\'',]
    },
];

const root = document.querySelector('#root');

const createTask = ({ fn, defaultArgument }, idx) => {
    const realIndex = idx + 1;
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>TASK ${realIndex}</h1>
        <textarea class="input" id="input-${realIndex}">
const ${fn.name} = ${fn.toString()};

${fn.name}(${defaultArgument ?? ''});
        </textarea>
        <button onclick="runCode(${realIndex})">Run</button>
        <p class="output" id="output-${realIndex}">
            Output...
        </p>
        <hr>
    `;
    root.appendChild(div);
}

const loadPage = () => tasks.forEach((task, idx) => createTask(task, idx));

window.onload = () => loadPage();

const runCode = (taskId) => {
    const code = document.querySelector(`#input-${taskId}`).value;
    const output = document.querySelector(`#output-${taskId}`);
    try {
        output.innerHTML = eval(code);
    } catch (e) {
        window.alert(e)
    }
}
