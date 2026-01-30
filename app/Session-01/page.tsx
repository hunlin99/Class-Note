import BackBtn from "../components/back-btn"

const links = [
    { name: 'Variables and Constants', href: '#variables-constants' },
    { name: 'Type Safety & Type Inference', href: '#type-safety-inference' },
    { name: 'String Interpolation', href: '#string-interpolation' },
    { name: 'Checking Types at Runtime', href: '#checking-types' },
    { name: 'Type Casting (Type Conversion)', href: '#type-casting' },
    { name: 'Emojis in Swift 😄', href: '#emojis' },
    { name: 'Ranges (VERY IMPORTANT)', href: '#ranges' },
    { name: 'Loops', href: '#loops' },
    { name: 'Random Values', href: '#random-values' },
    { name: 'Checking Membership', href: '#checking-membership' },
]

export default function Example() {
    return (
        <main>
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    alt=""
                    src="https://github.com/hunlin99/Ling-portfolio/blob/main/image/background-opasity-4.png?raw=true"
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <BackBtn/>
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            Swift Fundamentals — Week 01 Class
                        </h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            This class is about using Swift language fundamentals together to solve a realistic data-processing problem.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex md:flex-wrap lg:gap-x-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="border-2 border-dashed border-gray-300 rounded-lg px-3 py-2 hover:border-blue-500 transition-colors"
                                >
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* What is Swift? */}
                <div id="what-is-swift">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">What is Swift?</h2>
                    <h3 className="mt-4 text-lg font-medium text-pretty sm:text-xl/8">Swift is a:</h3>
                    <ul className="list-disc px-4">
                        <li>Strongly typed language</li>
                        <li>Type-safe language</li>
                        <li>Compiled language by Apple</li>
                        <li>Used for iOS, macOS, watchOS, tvOS, and command-line tools</li>
                    </ul>
                    <div className="ltr py-4">
                        <div className="border-s-4 p-4">
                            <p>Swift’s main goal: safe + readable code</p>
                        </div>
                    </div>
                </div>

                {/* Variables and Constants */}
                <div id="variables-constants">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Variables and Constants</h2>

                    <h3 className="mt-4 text-lg font-medium text-pretty sm:text-xl/8">Variables (var)</h3>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`var num1 = 10
num1 = 16

var num2 = 45.95   // Double`}</code>
                    </pre>
                    <ul className="list-disc px-4">
                        <li><b>var</b> means the value can change</li>
                        <li>Swift uses <b>type inference</b> → <code>num1</code> is inferred as <b>Int</b></li>
                    </ul>

                    <h3 className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">Constants (let)</h3>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let average = 12.52
// average = 5.94  // ❌ Error: cannot reassign a let constant`}</code>
                    </pre>
                    <ul className="list-disc px-4">
                        <li><b>let</b> means the value cannot change</li>
                        <li>Use <b>let</b> by default; only use <b>var</b> when you need to update the value</li>
                    </ul>
                </div>

                {/* Type Safety & Type Inference */}
                <div id="type-safety-inference">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Type Safety & Type Inference</h2>
                    <p className="mt-2">
                        Swift is <b>type-safe</b>: once a variable has a type, you can’t assign a different type later.
                        Swift also uses <b>type inference</b> to guess the type from the first value.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`var num1 = 10        // Int
// num1 = "Chintan"  // ❌ Error: cannot assign String to Int

var num2 = 45.95     // Double`}</code>
                    </pre>

                    <h3 className="mt-4 text-lg font-medium text-pretty sm:text-xl/8">Explicit type declaration</h3>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`var greetingMessage: String = "Hello, World!"
var flag: Bool = true
var pi: Double = 3.14
var age: Int = 25`}</code>
                    </pre>
                </div>

                {/* String Interpolation */}
                <div id="string-interpolation">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">String Interpolation</h2>
                    <p className="mt-2">
                        String interpolation lets you insert values into a string using <code>\( )</code>.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let greetingMessage = "Hello, World!"
print("\\(greetingMessage) Class T440")`}</code>
                    </pre>
                </div>

                {/* Checking Types at Runtime */}
                <div id="checking-types">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Checking Types at Runtime</h2>
                    <p className="mt-2">
                        Use <code>type(of:)</code> to check the inferred type of a variable (useful for learning and debugging).
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`print("Type of num1: \\(type(of: num1))")
print("Type of pi: \\(type(of: pi))")`}</code>
                    </pre>
                </div>

                {/* Type Casting */}
                <div id="type-casting">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Type Casting (Type Conversion)</h2>
                    <p className="mt-2">
                        Type casting converts values between types. Example: converting <b>Double → Int</b> drops the decimals.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`var num2 = 45.95
var num1 = Int(num2)   // 45

var v1: Bool = Bool(10) // true
v1 = Bool(0)            // false
v1 = Bool(1)            // true`}</code>
                    </pre>
                </div>

                {/* Emojis */}
                <div id="emojis">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Emojis in Swift 😄</h2>
                    <p className="mt-2">
                        Swift supports Unicode, so emojis are valid characters in strings and prints.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`print("😀")
print("\\u{1F607}")`}</code>
                    </pre>
                </div>

                {/* Ranges */}
                <div id="ranges">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Ranges (VERY IMPORTANT)</h2>

                    <h3 className="mt-4 text-lg font-medium text-pretty sm:text-xl/8">Closed Range (a...b)</h3>
                    <p className="mt-2">Includes both ends.</p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let validRange = 0...10
print(validRange.lowerBound) // 0
print(validRange.upperBound) // 10`}</code>
                    </pre>

                    <h3 className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">Half-Open Range (a..&lt; b)</h3>
                    <p className="mt-2">Includes the start, excludes the end.</p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let count = 6
let range = 1..<count   // 1 to 5`}</code>
                    </pre>

                    <h3 className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">One-Sided Range (a...)</h3>
                    <p className="mt-2">Has only a lower bound (no upper bound).</p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let range2 = 5...
print(range2.lowerBound) // 5`}</code>
                    </pre>
                </div>

                {/* Loops */}
                <div id="loops">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Loops</h2>

                    <h3 className="mt-4 text-lg font-medium text-pretty sm:text-xl/8">Loop through a range</h3>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`for i in 0...10 {
    print(i, terminator: ", ")
}`}</code>
                    </pre>

                    <h3 className="mt-6 text-lg font-medium text-pretty sm:text-xl/8">Ignore the loop variable with _</h3>
                    <p className="mt-2">Use <code>_</code> when you don’t need the value.</p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`for _ in 0...5 {
    print("Hello there!")
}`}</code>
                    </pre>
                </div>

                {/* Random Values */}
                <div id="random-values">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Random Values</h2>
                    <p className="mt-2">
                        Swift can generate random integers and booleans for testing or exercises.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let validRange = 0...10
let n1 = Int.random(in: validRange)
let n2 = Int.random(in: 5...15)
let n3 = Bool.random()`}</code>
                    </pre>
                </div>

                {/* Checking Membership */}
                <div id="checking-membership" className="pb-16">
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight sm:text-3xl">Checking Membership</h2>
                    <p className="mt-2">
                        Use <code>contains</code> to check whether a value exists inside a range.
                    </p>
                    <pre className="bg-gray-100 rounded-lg p-4 my-2 overflow-auto">
                        <code>{`let searchValue = 45
let validRange = 0...10

if validRange.contains(searchValue) {
    print("SearchValue Present")
} else {
    print("Nope")
}`}</code>
                    </pre>

                    <div className="ltr py-4">
                        <div className="border-s-4 p-4">
                            <p><b>Key tip:</b> Range + loops + random values are the core Week 01 building blocks.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
