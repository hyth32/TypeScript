const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8 , 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'TypeScript']

//tuple
const contact: [string, number] = ['Ivan', 1234567]

//any
let variable: any = 42 //any для возможности использования в другом типе
//..
variable = 'New string'
variable = []

// --
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Heisenberg')

//never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

//null | undefined
type someType = string | null | undefined