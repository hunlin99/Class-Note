import BackBtn from "../components/back-btn"

const links = [
    { name: 'Session Overview', href: '#overview' },
    { name: 'Arrays (Basics)', href: '#arrays-basics' },
    { name: 'Arrays (Editing & Ranges)', href: '#arrays-editing' },
    { name: 'Mixed Types (Any)', href: '#any-mixed' },
    { name: 'Loop Patterns', href: '#loop-patterns' },
    { name: 'Dictionaries (Basics)', href: '#dict-basics' },
    { name: 'Dictionaries (Update/Delete)', href: '#dict-update-delete' },
    { name: 'Iterating Dictionaries', href: '#dict-iteration' },
    { name: 'Tuples', href: '#tuples' },
    { name: 'Key Takeaways', href: '#takeaways' },
]

function CodeBlock({ children }: { children: string }) {
    return (
        <pre className="bg-gray-100 rounded-lg p-4 my-3 overflow-auto text-sm leading-6">
            <code>{children}</code>
        </pre>
    )
}

export default function Example() {
    return (
        <main>
            {/* HERO */}
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
                            Swift Fundamentals — Session 2 (Collections)
                        </h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Today’s focus: <b>Arrays</b>, <b>Dictionaries</b>, <b>Loop patterns</b>, and <b>Tuples</b> — the tools you
                            use to store and process real data (like server logs).
                        </p>
                    </div>

                    {/* NAV LINKS */}
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

            {/* CONTENT */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
                {/* OVERVIEW */}
                <div id="overview" className="mt-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Session Overview</h2>
                    <p className="mt-3">
                        In Session 2, you learned how to store and process collections of data:
                    </p>
                    <ul className="list-disc px-5 mt-3 space-y-1">
                        <li>
                            <b>Arrays</b> store ordered lists (good for sequential data).
                        </li>
                        <li>
                            <b>Dictionaries</b> store key → value pairs (good for lookups like HTTP code → message).
                        </li>
                        <li>
                            <b>Loop patterns</b> help you scan, print, and transform collections.
                        </li>
                        <li>
                            <b>Tuples</b> let you group multiple values without making a struct/class.
                        </li>
                    </ul>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Memory hook 🧠: <b>Array = list</b>, <b>Dictionary = lookup table</b>, <b>Tuple = quick bundle</b>
                        </p>
                    </div>
                </div>

                {/* ARRAYS BASICS */}
                <div id="arrays-basics" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Arrays (Basics)</h2>
                    <p className="mt-3">
                        Arrays are <b>ordered</b> collections. They have indexes starting at <code>0</code>.
                    </p>

                    <CodeBlock>{`// Type inference
var ar1 = [1, 2, 3, 4, 5]          // [Int]

// Explicit type
var ar2: [String] = ["a", "b", "c", "d", "e"]`}</CodeBlock>

                    <ul className="list-disc px-5 mt-3 space-y-1">
                        <li>
                            Arrays are <b>type-safe</b>: <code>[Int]</code> cannot store strings.
                        </li>
                        <li>
                            Use <code>.append()</code> to add one item.
                        </li>
                        <li>
                            Use <code>.append(contentsOf:)</code> to add multiple items.
                        </li>
                    </ul>

                    <CodeBlock>{`ar1.append(10)
ar1.append(20)

ar1.append(contentsOf: [33, 44, 55])

let ar3 = [90, 91, 92, 93]   // constant array (cannot append)
ar1.append(contentsOf: ar3)`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Creating empty arrays & repeating values</h3>
                    <CodeBlock>{`ar2 = Array()  // empty array

ar2 = Array(repeating: "P", count: 16)
ar2[0] = "A"
ar2[7] = "A"`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Count, first, last, empty check</h3>
                    <CodeBlock>{`print(ar1.count)
print(ar1.isEmpty)
print(ar1.first ?? 0)   // safe default if empty
print(ar1.last)`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Exam tip ✅: Always check <code>isEmpty</code> or use <code>first ?? default</code> to avoid nil issues.
                        </p>
                    </div>
                </div>

                {/* ARRAYS EDITING */}
                <div id="arrays-editing" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Arrays (Editing & Ranges)</h2>

                    <p className="mt-3">
                        Arrays let you insert, remove, and replace values by index.
                    </p>

                    <CodeBlock>{`var ar5: [Int] = []
ar5 += [4, 5, 6, 7]        // add multiple items

ar5.insert(3, at: 0)       // insert at front
ar5.insert(100, at: ar5.count)   // insert at end
ar5.insert(contentsOf: [1000, 2000], at: 2)`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Slicing and replacing with a range</h3>
                    <CodeBlock>{`print(ar5[3])           // single index
print(ar5[3...7])         // range slice

// Replace items in the range with a new array
ar5[0...4] = [88]         // replaces indices 0..4 with ONE value 88`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Why does <code>ar5[0...4] = [88]</code> work? 🤔 Because the right side must be an <b>array</b>, even if
                            it has one element.
                        </p>
                    </div>
                </div>

                {/* ANY / MIXED */}
                <div id="any-mixed" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mixed Types (Any)</h2>

                    <p className="mt-3">
                        <code>Any</code> means “this variable can hold <b>any type</b>”. Useful for demos, but in real apps you try
                        to avoid it unless needed.
                    </p>

                    <CodeBlock>{`var x: Any = 10
x = "Hello"
x = true
x = [9.0, 8.0]
x = 89.7`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">A mixed array</h3>
                    <CodeBlock>{`var mixedArray: [Any] = []
mixedArray.append(10)
mixedArray.append("Hello")
mixedArray.append(true)
mixedArray.append([9.0, 8.0])
mixedArray.append(89.7)

mixedArray.remove(at: 3)
mixedArray.removeLast(2)`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Beginner tip 🔎: Use <code>[Any]</code> only when the exercise asks for mixed types.
                        </p>
                    </div>
                </div>

                {/* LOOP PATTERNS */}
                <div id="loop-patterns" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Loop Patterns</h2>

                    <p className="mt-3">
                        Session 2 shows many loop styles you’ll use often.
                    </p>

                    <h3 className="mt-6 text-lg font-semibold">Loop over items</h3>
                    <CodeBlock>{`for item in mixedArray {
    print(item)
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Loop by index</h3>
                    <CodeBlock>{`for n in 0...6 {
    print("ar1[\\(n)] : \\(ar1[n])")
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Half-open range (0..&lt;4)</h3>
                    <CodeBlock>{`for n in 0..<4 {
    print("ar2[\\(n)] : \\(ar2[n])")
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">enumerated() gives (index, value)</h3>
                    <CodeBlock>{`for (index, value) in ar1.enumerated() {
    print("index: \\(index), value: \\(value)")
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">stride() for custom steps</h3>
                    <CodeBlock>{`for n in stride(from: 70, through: 95, by: 3) {
    print(n)
}

for n in stride(from: 100, through: 70, by: -5) {
    print(n)
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">repeat-while (do-while)</h3>
                    <CodeBlock>{`var y = 10
repeat {
    print("y: \\(y)")
    y += 1
} while y < 15`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Memory hook 🧠: <code>enumerated()</code> = “I want index + value together.”
                        </p>
                    </div>
                </div>

                {/* DICTIONARIES BASICS */}
                <div id="dict-basics" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dictionaries (Basics)</h2>

                    <p className="mt-3">
                        Dictionaries store <b>key → value</b> pairs. Keys must be unique. Order is not guaranteed.
                    </p>

                    <CodeBlock>{`var d1: [Int: String] = [:]   // empty dictionary
var d2: [String: Int] = ["apple": 2, "banana": 5, "orange": 4]
var d4: [Double: String] = [3.14: "pi", 2.72: "e"]`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Add / update values</h3>
                    <CodeBlock>{`d1[401] = "Authorization Error"
d1[403] = "Forbidden"

// If the key already exists, this updates the value
d1[401] = "Not Found"

// Put it back
d1[401] = "Authorization Error"`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Count & key existence check</h3>
                    <CodeBlock>{`print(d1.count)

if d1.keys.contains(405) {
    print("key 405 exists")
} else {
    d1[405] = "Method Not Allowed"
}`}</CodeBlock>
                </div>

                {/* DICTIONARIES UPDATE / DELETE */}
                <div id="dict-update-delete" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dictionaries (Update/Delete)</h2>

                    <h3 className="mt-4 text-lg font-semibold">updateValue(_:forKey:)</h3>
                    <p className="mt-2">
                        Updates a value and returns the old one (optional). Good when you care about what it replaced.
                    </p>
                    <CodeBlock>{`d1.updateValue("Forbidden Access", forKey: 403)`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">removeValue(forKey:)</h3>
                    <p className="mt-2">
                        Removes a key and returns the removed value (optional).
                    </p>
                    <CodeBlock>{`let oldValue = d1.removeValue(forKey: 401)
print("Deleted: \\(oldValue)")`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Exam tip ✅: Dictionary lookups and removals often return <b>Optional</b> values.
                        </p>
                    </div>
                </div>

                {/* DICTIONARY ITERATION */}
                <div id="dict-iteration" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Iterating Dictionaries</h2>

                    <h3 className="mt-4 text-lg font-semibold">Loop over (key, value)</h3>
                    <CodeBlock>{`for pair in d1 {
    print(pair.key, pair.value)
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Print keys and values</h3>
                    <CodeBlock>{`d1.keys.forEach { print($0) }
d1.values.forEach { print($0) }`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">forEach with (k, v)</h3>
                    <CodeBlock>{`d1.forEach { (k, v) in
    print("\\(k) : \\(v)")
}`}</CodeBlock>
                </div>

                {/* TUPLES */}
                <div id="tuples" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Tuples</h2>

                    <p className="mt-3">
                        Tuples group multiple values into one. Great for quick bundles of different types.
                    </p>

                    <h3 className="mt-6 text-lg font-semibold">Tuple by position (0,1,2...)</h3>
                    <CodeBlock>{`var book1 = ("Head First - Swift", "John Doe", 4, 32.5, true)

print(book1.0) // title
print(book1.1) // author`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Named tuple fields</h3>
                    <CodeBlock>{`var book2 = (title: "Java Programming",
             author: "Herbetz G.",
             edition: 3,
             price: 55.0,
             isMandatory: false)

print(book2.title)
print(book2.price)`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Deconstructing (unpacking)</h3>
                    <CodeBlock>{`let (title1, author1, edition1, price1, isMandatory1) = book2
print(title1)
print(price1)

// Skip values using _
let (title2, _, _, price2, _) = book2`}</CodeBlock>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Memory hook 🧠: Tuple = “quick package” (no need to build a struct for simple demos).
                        </p>
                    </div>
                </div>

                {/* TAKEAWAYS */}
                <div id="takeaways" className="mt-12 pb-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Takeaways</h2>

                    <ul className="list-disc px-5 mt-3 space-y-2">
                        <li>
                            Use <b>Arrays</b> for ordered lists; use <b>Dictionaries</b> for fast lookups (key → value).
                        </li>
                        <li>
                            Most dictionary operations return <b>Optional</b> values: handle safely.
                        </li>
                        <li>
                            Know loop styles: <code>for-in</code>, <code>enumerated()</code>, <code>stride()</code>, and{' '}
                            <code>repeat-while</code>.
                        </li>
                        <li>
                            Use <b>Tuples</b> when you want to return or store a small group of related values quickly.
                        </li>
                    </ul>

                    <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
                        <p className="font-medium">
                            Mini challenge ✅: Write a dictionary that maps <b>HTTP codes</b> (Int) to <b>messages</b> (String), then
                            loop over it and print each pair.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
