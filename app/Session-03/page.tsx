import BackBtn from "../components/back-btn"
const links = [
  { name: 'Session Overview', href: '#overview' },
  { name: 'Switch (Basics)', href: '#switch-basics' },
  { name: 'Switch (Multiple + Ranges)', href: '#switch-advanced' },
  { name: 'Enums (Basics)', href: '#enums-basics' },
  { name: 'CaseIterable + allCases', href: '#caseiterable' },
  { name: 'Raw Values (Int)', href: '#raw-values' },
  { name: 'Associated Values', href: '#associated-values' },
  { name: 'Functions (Basics)', href: '#functions-basics' },
  { name: 'Variadic + Tuples', href: '#variadic-tuples' },
  { name: 'inout + Swap', href: '#inout-swap' },
  { name: 'Functions as Types', href: '#functions-as-types' },
  { name: 'Functions as Parameters', href: '#functions-as-params' },
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
              Swift Fundamentals — Session 3
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Today’s focus: <b>switch</b>, <b>enums</b>, and <b>functions</b> — the tools that power app logic and clean
              decision-making.
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
            Session 3 connects three big ideas:
          </p>
          <ul className="list-disc px-5 mt-3 space-y-1">
            <li>
              <b>switch</b>: choose one path based on a value (cleaner than many if-else blocks)
            </li>
            <li>
              <b>enum</b>: represent a fixed set of valid values (safe states)
            </li>
            <li>
              <b>functions</b>: reusable logic blocks (including advanced patterns like returning functions)
            </li>
          </ul>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Memory hook 🧠: <b>switch</b> decides, <b>enum</b> defines choices, <b>functions</b> reuse behavior.
            </p>
          </div>
        </div>

        {/* SWITCH BASICS */}
        <div id="switch-basics" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Switch (Basics)</h2>
          <p className="mt-3">
            <code>switch</code> compares a value against multiple cases. Swift’s <code>switch</code> must be{' '}
            <b>exhaustive</b> (you include <code>default</code> if needed).
          </p>

          <CodeBlock>{`var x = 10

switch x {
case 5:
    print("below average")
case 10:
    print("average")
case 15:
    print("above average")
default:
    print("not in the range")
}`}</CodeBlock>

          <ul className="list-disc px-5 mt-3 space-y-1">
            <li>No <code>break</code> needed in Swift (it stops automatically after matching one case).</li>
            <li><code>default</code> handles anything not covered by cases.</li>
          </ul>
        </div>

        {/* SWITCH MULTIPLE + RANGES */}
        <div id="switch-advanced" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Switch (Multiple + Ranges)</h2>

          <h3 className="mt-4 text-lg font-semibold">Multiple values in one case</h3>
          <CodeBlock>{`x = 75

switch x {
case 50, 55, 60:
    print("x is below 60s")
case 65, 70, 75:
    print("x is between 60s and 70s")
case 80, 85, 90:
    print("x is in 80s")
default:
    print("not in the range")
}`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Ranges (great for categories like HTTP codes)</h3>
          <CodeBlock>{`x = 404

switch x {
case 100...199:
    print("code is in 1xx family")
case 200...299:
    print("code is in 2xx family")
case 300...399:
    print("code is in 3xx family")
case 400...499:
    print("code is in 4xx family")
case 500...599:
    print("code is in 5xx family")
default:
    print("not in the range")
}`}</CodeBlock>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Exam tip ✅: Use <code>100...199</code> style ranges to classify values quickly.
            </p>
          </div>
        </div>

        {/* ENUMS BASICS */}
        <div id="enums-basics" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Enums (Basics)</h2>
          <p className="mt-3">
            An <code>enum</code> defines a fixed set of valid values. This prevents invalid states like “Mars2” or
            “PurplePlanet”.
          </p>

          <CodeBlock>{`enum Planets {
    case Mercury
    case Venus
    case Earth
    case Mars
    case Jupiter
    case Saturn
}

var myPlanet: Planets = .Saturn
myPlanet = .Venus`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Enums + switch = perfect match</h3>
          <CodeBlock>{`func describePlanet(planet: Planets) {
    switch planet {
    case .Mercury:
        print("Mercury is the closest planet to the Sun.")
    case .Venus:
        print("Venus is often referred to as Earth's twin.")
    case .Earth:
        print("Earth is the only planet known to support life.")
    case .Mars:
        print("Mars is often referred to as the Red Planet.")
    case .Jupiter:
        print("Jupiter is the only planet which is gassy and has 7 moons.")
    default:
        print("Not in a milky way")
    }
}`}</CodeBlock>
        </div>

        {/* CASEITERABLE */}
        <div id="caseiterable" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">CaseIterable + allCases</h2>
          <p className="mt-3">
            If you want to loop through every enum case, the enum must adopt <code>CaseIterable</code>.
          </p>

          <CodeBlock>{`enum Fruits: CaseIterable {
    case Apple, Banana, Orange, Mango
}

print(Fruits.allCases.count)

for fruit in Fruits.allCases {
    print(fruit)
}`}</CodeBlock>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Why needed? 🧠 Without <code>CaseIterable</code>, Swift doesn’t automatically know how to list all cases.
            </p>
          </div>
        </div>

        {/* RAW VALUES */}
        <div id="raw-values" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Raw Values (Int)</h2>
          <p className="mt-3">
            An enum can store raw values like <code>Int</code>. Raw values are useful for IDs, database codes, or
            configuration numbers.
          </p>

          <CodeBlock>{`enum Colors: Int, CaseIterable {
    case Red = 5
    case Blue = 8
    case Green
    case Yellow
    case White
    case Black = 56
    case Indigo
    case Violet = 90
}

for color in Colors.allCases {
    print("\\(color) - rawValue \\(color.rawValue)")
}

let c = Colors(rawValue: 8)  // Optional<Colors>
let safe = Colors(rawValue: 88) // nil (doesn't exist)`}</CodeBlock>

          <ul className="list-disc px-5 mt-3 space-y-1">
            <li><code>rawValue</code> reads the stored raw number.</li>
            <li><code>Colors(rawValue:)</code> returns an <b>Optional</b> because the value might not exist.</li>
            <li>Force unwrap <code>!</code> can crash if raw value is invalid.</li>
          </ul>
        </div>

        {/* ASSOCIATED VALUES */}
        <div id="associated-values" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Associated Values</h2>
          <p className="mt-3">
            Associated values let enum cases carry data. This is great when one “type” can appear in different shapes.
          </p>

          <CodeBlock>{`enum ProductInfo {
    case productDesc(Int, String, String)
    case qrCode(String)
}

var p1Info: ProductInfo = .productDesc(101, "iPhone 12", "Apple")
p1Info = .qrCode("123456ABC0")

switch p1Info {
case .productDesc(let productId, let productName, let brand):
    print("product info: \\(productId), \\(productName), \\(brand)")
case .qrCode(let qrCode):
    print("product info can be found using QR code: \\(qrCode)")
}`}</CodeBlock>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Memory hook 🧠: Raw values = one fixed value per case. Associated values = custom data per case.
            </p>
          </div>
        </div>

        {/* FUNCTIONS BASICS */}
        <div id="functions-basics" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Functions (Basics)</h2>

          <p className="mt-3">
            Functions are reusable blocks of code. Some print results, others return values.
          </p>

          <CodeBlock>{`func addition(a: Int, b: Int) {
    print("sum of \\(a) and \\(b) is \\(a+b)")
}

func subtraction(_ a: Int, _ b: Int) {
    print("\\(a) - \\(b) is \\(a-b)")
}

func multiplication(a: Int, b: Int) -> Int {
    return a * b
}`}</CodeBlock>

          <ul className="list-disc px-5 mt-3 space-y-1">
            <li><code>addition</code> prints (no return type).</li>
            <li><code>multiplication</code> returns an <code>Int</code> so you can store it in a variable.</li>
            <li><code>subtraction</code> uses <code>_</code> to remove external parameter labels.</li>
          </ul>
        </div>

        {/* VARIADIC + TUPLES */}
        <div id="variadic-tuples" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Variadic + Tuples</h2>

          <h3 className="mt-4 text-lg font-semibold">Variadic parameters (...)</h3>
          <p className="mt-2">
            Variadic parameters accept 1 or more values.
          </p>

          <CodeBlock>{`func sum(numbers: Int...) -> Int {
    var total = 0
    for num in numbers {
        total += num
    }
    return total
}

let r = sum(numbers: 1, 2, 3, 4, 5)`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Return multiple values with a tuple</h3>
          <CodeBlock>{`func findMinMaxTemp(temperatures: [Float]) -> (min: Float, max: Float) {
    var min = temperatures[0]
    var max = temperatures[0]

    for temp in temperatures {
        if temp < min { min = temp }
        else if temp > max { max = temp }
    }

    return (min, max)
}

let tempList: [Float] = [21.0, 19.5, 18.0, 10.0, -1.0, 17.0, 16.5]
let minMax = findMinMaxTemp(temperatures: tempList)
print(minMax.min)
print(minMax.max)`}</CodeBlock>
        </div>

        {/* INOUT */}
        <div id="inout-swap" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">inout + Swap</h2>

          <p className="mt-3">
            Function parameters are <b>constants</b> by default. <code>inout</code> allows a function to modify the
            original variable.
          </p>

          <CodeBlock>{`func swap(a: inout Int, b: inout Int) {
    let temp = a
    a = b
    b = temp
}

var k = 10
var y = 20
swap(a: &k, b: &y)`}</CodeBlock>

          <ul className="list-disc px-5 mt-3 space-y-1">
            <li><code>inout</code> = “this function can change the input variable”.</li>
            <li><code>&</code> is required when calling the function with variables.</li>
          </ul>
        </div>

        {/* FUNCTIONS AS TYPES */}
        <div id="functions-as-types" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Functions as Types</h2>

          <p className="mt-3">
            Functions can be stored in variables if the types match.
          </p>

          <CodeBlock>{`// A function variable that can store a (Int, Int) -> Int function
var p: (Int, Int) -> Int

p = multiplication
let result = p(4, 5)`}</CodeBlock>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Memory hook 🧠: “A function can be data.” This helps with callbacks and reusable logic.
            </p>
          </div>
        </div>

        {/* FUNCTIONS AS PARAMETERS */}
        <div id="functions-as-params" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Functions as Parameters</h2>

          <p className="mt-3">
            You can pass a function into another function. This is like giving a “strategy” for how to calculate.
          </p>

          <CodeBlock>{`func division(a: Int, b: Int) -> Int {
    return a / b
}

func mathOperation(_ operation: (Int, Int) -> Int, a: Int, b: Int) -> Int {
    return operation(a, b)
}

print(mathOperation(multiplication, a: 7, b: 8))
print(mathOperation(division, a: 10, b: 2))`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Returning a function</h3>
          <CodeBlock>{`func chooseOperation(a: Int, b: Int) -> (Int, Int) -> Int {
    if a > b {
        return division
    }
    return multiplication
}

let op = chooseOperation(a: 20, b: 5)
print(mathOperation(op, a: 20, b: 5))`}</CodeBlock>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Takeaways</h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>
              Use <b>switch</b> for clean decision logic (supports grouped values and ranges).
            </li>
            <li>
              Use <b>enums</b> to represent safe states; add <code>CaseIterable</code> if you want <code>allCases</code>.
            </li>
            <li>
              Use <b>raw values</b> for fixed IDs; use <b>associated values</b> when cases need extra data.
            </li>
            <li>
              Functions can <b>return values</b>, accept <b>variadic parameters</b>, return <b>tuples</b>, and modify
              variables with <code>inout</code>.
            </li>
            <li>
              Advanced: Functions can be stored in variables, passed as parameters, and returned from functions.
            </li>
          </ul>

          <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-medium">
              Mini challenge ✅: Create an enum <code>LoginState</code> and a function that prints messages for each
              state using <code>switch</code>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
