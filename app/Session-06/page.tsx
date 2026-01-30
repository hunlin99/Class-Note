import BackBtn from "../components/back-btn"
const links = [
  { name: 'Session Overview', href: '#overview' },
  { name: 'Key Proper Nouns', href: '#proper-nouns' },
  { name: 'Instance Methods (class)', href: '#instance-methods' },
  { name: 'Mutating Methods (struct)', href: '#mutating' },
  { name: 'Self Mutating (replace self)', href: '#self-mutating' },
  { name: 'Mutating Methods (enum)', href: '#enum-mutating' },
  { name: 'Type Methods: static / class', href: '#type-methods' },
  { name: 'Inheritance: Vehicle → ElectricVehicle', href: '#inheritance' },
  { name: 'override + super', href: '#override-super' },
  { name: 'Polymorphism (Runtime)', href: '#runtime-poly' },
  { name: 'Polymorphism (Compile-time)', href: '#compile-poly' },
  { name: 'Operator Overloading (+, *)', href: '#operator' },
  { name: 'Common Beginner Mistakes', href: '#mistakes' },
  { name: 'Mini Quiz + Answers', href: '#quiz' },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-gray-100 rounded-lg p-4 my-3 overflow-auto text-sm leading-6">
      <code>{children}</code>
    </pre>
  )
}

function Tip({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 border-l-4 border-blue-500 p-4 bg-blue-50 rounded">
      <p className="font-semibold">{title}</p>
      <div className="mt-2 text-sm leading-6">{children}</div>
    </div>
  )
}

function Warn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6 border-l-4 border-amber-500 p-4 bg-amber-50 rounded">
      <p className="font-semibold">{title}</p>
      <div className="mt-2 text-sm leading-6">{children}</div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-2 py-1 text-xs font-semibold">
      {children}
    </span>
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
              Swift Fundamentals — Session 6
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Focus: <b>Methods</b> + <b>Mutating</b> + <b>Inheritance</b> + <b>Polymorphism</b> 🧠⚙️🚗🐶
              <br />
              You learn how Swift objects “do actions”, and how child classes extend parent classes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>instance method</Badge>
              <Badge>mutating</Badge>
              <Badge>static</Badge>
              <Badge>class</Badge>
              <Badge>inheritance</Badge>
              <Badge>override</Badge>
              <Badge>super</Badge>
              <Badge>polymorphism</Badge>
              <Badge>overloading</Badge>
              <Badge>operator overloading</Badge>
            </div>
          </div>

          {/* NAV */}
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
            This demo code covers these “chapters”:
          </p>
          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li><b>Methods</b>: functions that belong to a class/struct/enum</li>
            <li><b>Mutating</b>: structs/enums need “mutating” to change their own properties</li>
            <li><b>Type Methods</b>: methods called on the type itself (Student.printStudent)</li>
            <li><b>Inheritance</b>: child class extends parent class (ElectricVehicle → Vehicle)</li>
            <li><b>Polymorphism</b>: same function name, different behavior (Animal → Cat/Dog)</li>
            <li><b>Overloading</b>: same function name, different parameter types</li>
            <li><b>Operator overloading</b>: make “+” work for your own type (Vector)</li>
          </ol>

          <Tip title="Memory hook 🧠✨">
            <p>
              Methods = “skills/actions” 🎯 <br />
              Inheritance = “family tree” 👨‍👩‍👧‍👦 <br />
              Polymorphism = “same button, different result” 🎛️
            </p>
          </Tip>
        </div>

        {/* PROPER NOUNS */}
        <div id="proper-nouns" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Proper Nouns (memorize these)</h2>
          <ul className="list-disc px-5 mt-3 space-y-2">
            <li><b>Instance Method</b>: method called on an instance (counter.increment())</li>
            <li><b>mutating</b>: keyword that allows struct/enum to modify itself</li>
            <li><b>self</b>: the current object (like “this” in other languages)</li>
            <li><b>Type Method</b>: method called on the type (Student.printStudent)</li>
            <li><b>static</b>: type method/property (structs and enums use this)</li>
            <li><b>class func</b>: type method that can be overridden in subclasses</li>
            <li><b>Inheritance</b>: child class extends base class</li>
            <li><b>override</b>: replace parent method with child version</li>
            <li><b>super</b>: call parent’s version (super.displayVehicle())</li>
            <li><b>Runtime Polymorphism</b>: override method chosen at runtime</li>
            <li><b>Compile-time Polymorphism</b>: function overloading, operator overloading</li>
          </ul>
        </div>

        {/* INSTANCE METHODS */}
        <div id="instance-methods" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Instance Methods (class Counter)</h2>
          <p className="mt-3">
            A class method is like a “button” on the object 🎛️. You press it and it changes state.
          </p>

          <CodeBlock>{`class Counter {
  var count = 0

  func increment() { count += 1 }
  func increment(by amount: Int) { count += amount }
  func decrement() { count -= 1 }
  func reset() { count = 0 }
}`}</CodeBlock>

          <Tip title="Why no 'mutating' here? 🤔">
            <p>
              Because <b>class</b> is a reference type. It can change its properties inside methods without the keyword.
            </p>
          </Tip>
        </div>

        {/* MUTATING */}
        <div id="mutating" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mutating Methods (struct Point)</h2>
          <p className="mt-3">
            Structs are value types 📦. Swift is strict: “If you want to change yourself, say it clearly.”
          </p>

          <CodeBlock>{`struct Point {
  var x = 0.0, y = 0.0

  mutating func movePoint(a: Double, b: Double) {
    self.x += a
    self.y += b
  }
}`}</CodeBlock>

          <Warn title="Why constant struct can't change? ⚠️">
            <p>
              If you create a struct with <code>let</code>, it becomes immutable. Even mutating methods won’t run.
            </p>
          </Warn>
        </div>

        {/* SELF MUTATING */}
        <div id="self-mutating" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Self Mutating (replace self)</h2>
          <p className="mt-3">
            Sometimes you don’t change <code>x</code> and <code>y</code> one by one…
            you replace the whole struct with a new one 🔄.
          </p>

          <CodeBlock>{`mutating func moveSelfPoint(a: Double, b: Double) {
  self = SelfMutatingPoint(x: x + a, y: y + b)
}`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              “self = new value” means: throw away the old Point and become a new Point.
            </p>
          </Tip>
        </div>

        {/* ENUM MUTATING */}
        <div id="enum-mutating" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mutating Methods (enum LightSwitch)</h2>
          <p className="mt-3">
            Enums can also mutate themselves (because enum is also a value type).
          </p>

          <CodeBlock>{`enum LightSwitch {
  case off, low, high

  mutating func nextSwitch() {
    switch self {
      case .off: self = .low
      case .low: self = .high
      case .high: self = .off
    }
  }
}`}</CodeBlock>

          <Tip title="Memory hook 💡">
            <p>Enum + mutating = “state machine” 🔁 (off → low → high → off)</p>
          </Tip>
        </div>

        {/* TYPE METHODS */}
        <div id="type-methods" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Type Methods: static / class func</h2>
          <p className="mt-3">
            Type methods belong to the <b>type itself</b> (like a “company rule”), not a single student.
          </p>

          <CodeBlock>{`class Student {
  class func printStudent(s: Student) {
    print("\\(s.studentID) - \\(s.name)")
  }
}

struct Student1 {
  static func printStudent(s: Student1) {
    print("\\(s.studentID) - \\(s.name)")
  }
}`}</CodeBlock>

          <Tip title="Quick difference ✅">
            <p>
              <code>static</code> = cannot be overridden (mostly for structs/enums) <br />
              <code>class func</code> = can be overridden in subclasses (classes only)
            </p>
          </Tip>
        </div>

        {/* INHERITANCE */}
        <div id="inheritance" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Inheritance: Vehicle → ElectricVehicle</h2>
          <p className="mt-3">
            Base class = general “Vehicle” 🚗 <br />
            Child class = more specific “ElectricVehicle” ⚡🚙
          </p>

          <CodeBlock>{`class Vehicle {
  var make: String
  var model: String
  var year: Int

  func displayVehicle() {
    print("\\(year) \\(make) \\(model)")
  }
}

class ElectricVehicle: Vehicle {
  var batteryCapacity: String
  var range: String
  var noOfMotors: Int
}`}</CodeBlock>
        </div>

        {/* OVERRIDE + SUPER */}
        <div id="override-super" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">override + super (adding more info)</h2>
          <p className="mt-3">
            <code>override</code> means: “I’m replacing the parent’s method.” <br />
            <code>super</code> means: “Call parent’s version first.”
          </p>

          <CodeBlock>{`override func displayVehicle() {
  super.displayVehicle()
  print("Battery: \\(batteryCapacity), Range: \\(range), Motors: \\(noOfMotors)")
}`}</CodeBlock>

          <Tip title="Why call super first? 🧠">
            <p>
              So the child keeps the base behavior (year/make/model) and then adds extra details.
            </p>
          </Tip>
        </div>

        {/* RUNTIME POLY */}
        <div id="runtime-poly" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Runtime Polymorphism (Animal → Cat/Dog)</h2>
          <p className="mt-3">
            Same method name, different sound 🐱🐶:
          </p>

          <CodeBlock>{`class Animal {
  func makeSound() -> String { "Unknown..." }
}

class Cat: Animal {
  override func makeSound() -> String { "Meow Meow!" }
}

class Dog: Animal {
  override func makeSound() -> String { "Woof Woof!" }
}`}</CodeBlock>

          <Tip title="Why it’s called 'runtime'? 🕒">
            <p>
              The program decides which version to run based on the real object type at runtime.
              (Animal parameter can accept Cat/Dog.)
            </p>
          </Tip>
        </div>

        {/* COMPILE POLY */}
        <div id="compile-poly" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Compile-time Polymorphism (Overloading)</h2>
          <p className="mt-3">
            Same function name, different parameter types = Swift chooses the right one while compiling 🧠⚙️
          </p>

          <CodeBlock>{`func addNumbers(a: Int, b: Int) -> Int { a + b }
func addNumbers(a: Int, b: Double) -> Int { a + Int(b) }
func addNumbers(a: Double, b: Double) -> Double { a + b }`}</CodeBlock>

          <Tip title="Memory hook 🧩">
            <p>Overloading = “same name, different shapes” 🔺🔵⬛</p>
          </Tip>
        </div>

        {/* OPERATOR OVERLOADING */}
        <div id="operator" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Operator Overloading (+ and *) for Vector</h2>
          <p className="mt-3">
            You teach Swift how to add your custom type ➕✨
          </p>

          <CodeBlock>{`struct Vector {
  let x: Double
  let y: Double

  static func + (first: Vector, second: Vector) -> Vector {
    Vector(x: first.x + second.x, y: first.y + second.y)
  }

  static func * (first: Vector, second: Vector) -> Vector {
    Vector(x: first.x * second.x, y: first.y * second.y)
  }
}`}</CodeBlock>

          <Tip title="Beginner translation 🧠">
            <p>
              Now you can do: <code>vector1 + vector2</code> and it returns a new Vector with added x/y.
            </p>
          </Tip>
        </div>

        {/* MISTAKES */}
        <div id="mistakes" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Beginner Mistakes</h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>Forgetting <code>mutating</code> inside a struct/enum method that changes properties.</li>
            <li>Creating a struct with <code>let</code> then wondering why it won’t change.</li>
            <li>Using <code>override</code> but not calling <code>super</code> when you actually want base info too.</li>
            <li>Confusing overloading (same name, different params) with overriding (child replaces parent method).</li>
          </ul>
        </div>

        {/* QUIZ */}
        <div id="quiz" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mini Quiz + Answers ✅</h2>

          <ol className="list-decimal px-5 mt-3 space-y-3">
            <li>
              <b>Q:</b> Why doesn’t a class method need <code>mutating</code>? <br />
              <b>A:</b> Class is a reference type; it can update properties directly.
            </li>
            <li>
              <b>Q:</b> Why does a struct method need <code>mutating</code> to change <code>x</code>/<code>y</code>? <br />
              <b>A:</b> Struct is a value type; Swift requires explicit permission to modify self.
            </li>
            <li>
              <b>Q:</b> What’s the difference between <code>override</code> and <code>overload</code>? <br />
              <b>A:</b> Override = child replaces parent method; Overload = same name, different parameter types.
            </li>
            <li>
              <b>Q:</b> What is polymorphism in the Animal example? <br />
              <b>A:</b> Same method name <code>makeSound()</code>, different behavior depending on actual object (Cat/Dog).
            </li>
          </ol>
        </div>
      </section>
    </main>
  )
}
