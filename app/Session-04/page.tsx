import BackBtn from "../components/back-btn";
const links = [
    { name: 'Session Overview', href: '#overview' },
    { name: 'Functions Review (as params)', href: '#functions-as-params' },
    { name: 'Return a Function', href: '#return-a-function' },
    { name: 'Nested Functions', href: '#nested-functions' },
    { name: 'Optionals (What & Why)', href: '#optionals-why' },
    { name: 'Optional Unwrap Methods', href: '#optional-unwrapping' },
    { name: 'Closures (Basics)', href: '#closures-basics' },
    { name: 'Closures + Sorting', href: '#closures-sorting' },
    { name: 'map() Transform', href: '#map-transform' },
    { name: 'Escaping Closures', href: '#escaping-closures' },
    { name: 'Exercise: Study Schedule', href: '#exercise-schedule' },
    { name: 'Exercise: Contact Dictionary', href: '#exercise-contacts' },
    { name: 'Key Takeaways', href: '#takeaways' },
]

function CodeBlock({ children }: { children: string }) {
    return (
        <pre className="bg-gray-100 rounded-lg p-4 my-3 overflow-auto text-sm leading-6">
            <code>{children}</code>
        </pre>
    )
}

function Tip({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mt-6 border-l-4 p-4 bg-gray-50 rounded">
            <p className="font-semibold">{title}</p>
            <div className="mt-2 text-sm leading-6">{children}</div>
        </div>
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
                            Swift Fundamentals — Session 4
                        </h2>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Today’s focus: <b>Optionals</b> + <b>Closures</b> + advanced <b>Functions</b> patterns (passing, returning,
                            and escaping).
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
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                {/* OVERVIEW */}
                <div id="overview" className="mt-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Session Overview</h2>
                    <p className="mt-3">
                        Session 4 is where Swift starts to feel “real-world” because apps constantly deal with:
                    </p>
                    <ul className="list-disc px-5 mt-3 space-y-1">
                        <li>
                            Missing data (<b>Optionals</b>) — “this value might not exist”
                        </li>
                        <li>
                            Passing behavior around (<b>Closures</b>) — “run this code later”
                        </li>
                        <li>
                            Async style patterns (<b>Escaping closures</b>) — used heavily in iOS (network calls, UI events)
                        </li>
                    </ul>

                    <Tip title="Memory hook 🧠">
                        <p>
                            <b>Optional</b> = “maybe value” • <b>Closure</b> = “code as data” • <b>Escaping</b> = “run later”
                        </p>
                    </Tip>
                </div>

                {/* FUNCTIONS AS PARAMS */}
                <div id="functions-as-params" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Functions Review (as parameters)</h2>
                    <p className="mt-3">
                        A function can be stored in a variable and passed into another function if the types match.
                    </p>

                    <CodeBlock>{`func multiply(_ x1: Int, _ x2: Int) -> Int { x1 * x2 }
func addition(_ x1: Int, _ x2: Int) -> Int { x1 + x2 }

var mathOperation: (Int, Int) -> Int
mathOperation = addition
print(mathOperation(10, 20)) // 30

mathOperation = multiply
print(mathOperation(10, 20)) // 200`}</CodeBlock>

                    <p className="mt-3">
                        This function receives another function (<code>mathFunc</code>) and uses it to calculate:
                    </p>

                    <CodeBlock>{`func printCalculation(_ mathFunc: (Int, Int) -> Int, a1: Int, a2: Int) {
    print(mathFunc(a1, a2))
}

printCalculation(mathOperation, a1: 10, a2: 20)`}</CodeBlock>

                    <Tip title="Why do we do this?">
                        <p>
                            Because you can reuse <code>printCalculation</code> with <b>any</b> math function that matches the type.
                            This is the base idea behind callbacks.
                        </p>
                    </Tip>
                </div>

                {/* RETURN A FUNCTION */}
                <div id="return-a-function" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Return a Function</h2>
                    <p className="mt-3">
                        You can return a function from another function. Think: “choose a strategy”.
                    </p>

                    <CodeBlock>{`func moveForward(_ number: Int) -> Int { number + 10 }
func moveBackward(_ number: Int) -> Int { number - 10 }

func chooseStep(flag: Bool) -> (Int) -> Int {
    let f1: (Int) -> Int = flag ? moveForward : moveBackward
    return f1
}

var testNumber = 70
let step = chooseStep(flag: testNumber < 0)
print(step(testNumber))`}</CodeBlock>

                    <Tip title="Beginner translation 🧩">
                        <p>
                            <code>chooseStep</code> doesn’t return a number. It returns a “step function” you can apply later.
                        </p>
                    </Tip>
                </div>

                {/* NESTED FUNCTIONS */}
                <div id="nested-functions" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Nested Functions</h2>
                    <p className="mt-3">
                        You can define helper functions inside a function. They only exist inside that scope.
                    </p>

                    <CodeBlock>{`func chooseStepCount(flag: Bool) -> (Int) -> Int {
    func goFwd(_ n: Int) -> Int { n + 10 }
    func goBack(_ n: Int) -> Int { n - 10 }
    return flag ? goFwd : goBack
}

var testNumber2 = -50
let step2 = chooseStepCount(flag: testNumber2 < 0)

while testNumber2 != 0 {
    print(testNumber2)
    testNumber2 = step2(testNumber2)
}
print(testNumber2)`}</CodeBlock>

                    <Tip title="What’s happening here?">
                        <p>
                            If the number is negative, we keep adding 10 until we reach 0. The returned function becomes our loop
                            engine.
                        </p>
                    </Tip>
                </div>

                {/* OPTIONALS */}
                <div id="optionals-why" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Optionals (What & Why)</h2>
                    <p className="mt-3">
                        An <b>Optional</b> is a value that might be missing. It is written with <code>?</code> (example: <code>Int?</code>).
                    </p>

                    <CodeBlock>{`let possibleNumber = "10"
let convertedNumber = Int(possibleNumber)  // Int?
print(type(of: convertedNumber))            // Optional<Int>

var statusCode: Int? = 404
statusCode = nil

var serverResponse: Int?
print(serverResponse) // nil`}</CodeBlock>

                    <Tip title="Why Swift forces optionals ✅">
                        <p>
                            To prevent crashes from missing data. Instead of “surprise null”, Swift makes you handle it intentionally.
                        </p>
                    </Tip>
                </div>

                {/* OPTIONAL UNWRAPPING */}
                <div id="optional-unwrapping" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Optional Unwrap Methods</h2>

                    <h3 className="mt-4 text-lg font-semibold">1) Force unwrap (!) — risky</h3>
                    <CodeBlock>{`var response: Any?
response = "Hello"
print(response!)  // ✅ works
response = nil
// print(response!)  // ❌ crash`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">2) if-let optional binding — safe</h3>
                    <CodeBlock>{`var price: Double? = 16.99

if let price {
    let total = price * 1.13
    print("Total: \\(total)")
} else {
    print("Price cannot be nil")
}`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">3) Multiple optionals in one if</h3>
                    <CodeBlock>{`var price: Double? = 100
var tax: Double? = 1.13

if let price, let tax {
    print(price * tax)
} else {
    print("Missing values")
}`}</CodeBlock>

                    <Tip title="Rule for beginners 👇">
                        <p>
                            Use <code>if let</code> first. Avoid <code>!</code> unless your teacher explicitly says it’s safe.
                        </p>
                    </Tip>
                </div>

                {/* CLOSURES BASICS */}
                <div id="closures-basics" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Closures (Basics)</h2>
                    <p className="mt-3">
                        A closure is a block of code you can store in a variable and call later.
                    </p>

                    <CodeBlock>{`let announce = {
    print("Announcement from a Closure")
}
announce()

let greet = { (name: String) in
    print("Hello \\(name)!")
}
greet("Chintan")`}</CodeBlock>

                    <h3 className="mt-6 text-lg font-semibold">Closure that returns a value</h3>
                    <CodeBlock>{`let add = { (a: Int, b: Int) -> Int in
    a + b
}
print(add(5, 16))`}</CodeBlock>

                    <Tip title="Closure + Optional example">
                        <p>
                            This closure accepts an optional age and decides if entry is allowed.
                        </p>
                        <CodeBlock>{`let isAdult = { (age: Int?) -> Bool in
    if age == nil { return false }
    return age! >= 18
}`}</CodeBlock>
                    </Tip>
                </div>

                {/* CLOSURES SORTING */}
                <div id="closures-sorting" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Closures + Sorting (Same logic, shorter syntax)</h2>
                    <p className="mt-3">
                        <code>sorted(by:)</code> needs a function/closure that compares two items and returns <code>Bool</code>.
                    </p>

                    <CodeBlock>{`var fruits = ["Kiwi", "Mango", "Apple", "Cherry", "Banana"]

func stepForwards(_ x1: String, _ x2: String) -> Bool { x1 < x2 }
let a = fruits.sorted(by: stepForwards)

// Full closure
let b = fruits.sorted(by: { (x1: String, x2: String) -> Bool in
    return x1 > x2
})

// Inferred types
let c = fruits.sorted(by: { x1, x2 in x1 > x2 })

// Shorthand arguments
let d = fruits.sorted(by: { $0 > $1 })

// Operator method
let e = fruits.sorted(by: <)`}</CodeBlock>

                    <Tip title="Why so many versions?">
                        <p>
                            They all do the same thing. Swift lets you write closures more and more compact once the compiler can infer types.
                        </p>
                    </Tip>
                </div>

                {/* MAP TRANSFORM */}
                <div id="map-transform" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">map() Transform</h2>
                    <p className="mt-3">
                        <code>map</code> transforms every element in an array into a new array.
                    </p>

                    <CodeBlock>{`let numbers = [15, 175, 243810]

let digitName = [0:"Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five",
                 6:"Six", 7:"Seven", 8:"Eight", 9:"Nine"]

let numberString = numbers.map { (number) -> String in
    var number = number
    var output = ""

    repeat {
        output = digitName[number % 10]! + output
        number /= 10
    } while number > 0

    return output
}`}</CodeBlock>

                    <Tip title="Beginner translation 🧩">
                        <p>
                            Each number becomes a spelled-out string. Example: <code>15</code> → <code>"OneFive"</code>.
                        </p>
                    </Tip>
                </div>

                {/* ESCAPING CLOSURES */}
                <div id="escaping-closures" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Escaping Closures</h2>
                    <p className="mt-3">
                        Escaping means the closure can be saved and run later (not immediately).
                    </p>

                    <CodeBlock>{`var completionHandler: (() -> Void)?

func registerAction(action: @escaping () -> Void) {
    completionHandler = action
}

registerAction {
    print("Hello T440 Class!")
}

completionHandler?()`}</CodeBlock>

                    <Tip title="Why important for iOS? 📱">
                        <p>
                            Network calls, button clicks, Firebase callbacks… all use escaping closures because the result comes back later.
                        </p>
                    </Tip>
                </div>

                {/* EXERCISE SCHEDULE */}
                <div id="exercise-schedule" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Exercise: Study Schedule (Escaping Closure)</h2>

                    <CodeBlock>{`func generateStudySchedule(courses: [String], completion: @escaping ([String]) -> Void) {
    var schedule: [String] = []

    for course in courses {
        if course == "MADS4003" {
            schedule.append("\\(course) - 4 Hours")
        } else {
            schedule.append("\\(course) - 2 Hours")
        }
    }

    completion(schedule)
}

generateStudySchedule(courses: ["MADS4002", "MADS4003", "MADS4004"]) { schedule in
    print(schedule)
}`}</CodeBlock>

                    <Tip title="What’s the pattern here?">
                        <p>
                            Function does work → then calls <code>completion(result)</code>. This is the same pattern used in async APIs.
                        </p>
                    </Tip>
                </div>

                {/* EXERCISE CONTACTS */}
                <div id="exercise-contacts" className="mt-12">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Exercise: Contact Dictionary</h2>
                    <p className="mt-3">
                        Key = contact name. Value = another dictionary with <code>"phone"</code> and <code>"email"</code>.
                    </p>

                    <CodeBlock>{`var contactDictionary: [String: [String: String]] = [:]

func addContact(name: String, phone: String, email: String) {
    contactDictionary[name] = ["phone": phone, "email": email]
}

func removeContact(name: String) {
    contactDictionary.removeValue(forKey: name)
}

func getContact(name: String) -> String {
    if let contact = contactDictionary[name] {
        return "Phone: \\(contact["phone"]!), Email: \\(contact["email"]!)"
    }
    return "Contact not found"
}

func listContact() {
    for (name, contact) in contactDictionary {
        print("\\(name) - \\(contact["phone"]!) \\(contact["email"]!)")
    }
}`}</CodeBlock>

                    <Tip title="Small safety upgrade (recommended)">
                        <p>
                            Replace the forced unwraps <code>!</code> with <code>??</code> to avoid crashes if keys are missing:
                        </p>
                        <CodeBlock>{`let phone = contact["phone"] ?? "N/A"
let email = contact["email"] ?? "N/A"`}</CodeBlock>
                    </Tip>
                </div>

                {/* TAKEAWAYS */}
                <div id="takeaways" className="mt-12 pb-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Takeaways</h2>
                    <ul className="list-disc px-5 mt-3 space-y-2">
                        <li>
                            Functions can be stored in variables and passed around like data.
                        </li>
                        <li>
                            Optionals protect you from missing values; unwrap safely with <code>if let</code>.
                        </li>
                        <li>
                            Closures are “mini functions” stored in variables; they power sorting, mapping, and callbacks.
                        </li>
                        <li>
                            Escaping closures are used when code runs later (common in iOS development).
                        </li>
                    </ul>

                    <Tip title="Mini challenge ✅">
                        <p>
                            Write a function <code>filterAdults</code> that takes an array of ages and a closure, then prints only the
                            ages allowed by the closure.
                        </p>
                    </Tip>
                </div>
            </section>
        </main>
    )
}
