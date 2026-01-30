import BackBtn from "../components/back-btn"
const links = [
  { name: 'Session Overview', href: '#overview' },
  { name: 'Struct vs Class (Big Picture)', href: '#struct-vs-class' },
  { name: 'Struct: Resolution + Point', href: '#structs' },
  { name: 'Class: VideoMode', href: '#classes' },
  { name: 'Value vs Reference Semantics', href: '#value-vs-reference' },
  { name: 'Identity (===) vs Equality (==)', href: '#identity' },
  { name: 'Stored vs Computed Properties', href: '#properties' },
  { name: 'Initializers in Struct (Person)', href: '#person' },
  { name: 'Initializers in Class (User)', href: '#user' },
  { name: 'Mutating (Struct) vs Normal Methods', href: '#mutating' },
  { name: 'Failable init? + Optional binding', href: '#failable' },
  { name: 'Key Takeaways + Mini Quiz', href: '#takeaways' },
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
              Swift Fundamentals — Session: Structs & Classes
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              This session teaches the most important “app dev” idea: <b>Structs copy</b> (value type) while{' '}
              <b>Classes share</b> (reference type). We also practice <b>properties</b>, <b>initializers</b>, and{' '}
              <b>optionals</b>.
            </p>
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
            The demo starts by printing <code>"Structure and Class"</code>, then builds:
          </p>
          <ul className="list-disc px-5 mt-3 space-y-1">
            <li>
              A <b>struct</b> (<code>Resolution</code>) and another struct (<code>Point</code>)
            </li>
            <li>
              A <b>class</b> (<code>VideoMode</code>)
            </li>
            <li>
              A <b>User</b> class and a <b>Person</b> struct to compare initializers, computed properties, and mutation
            </li>
          </ul>

          <Tip title="Main file we are following">
            <p className="text-sm">
              Everything in this handout is based on your uploaded demo files: <b>main.swift</b>, <b>Person.swift</b>,{' '}
              <b>User.swift</b>.
            </p>
          </Tip>
        </div>

        {/* STRUCT VS CLASS */}
        <div id="struct-vs-class" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Struct vs Class (Big Picture)</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Struct ✅ (Value Type)</p>
              <ul className="list-disc px-5 mt-2 space-y-1 text-sm">
                <li>Copy on assignment: <b>A = B</b> makes a new copy</li>
                <li>Great for “data” (points, sizes, settings)</li>
                <li>To change self inside a method → use <code>mutating</code></li>
              </ul>
            </div>

            <div className="rounded-xl border p-4">
              <p className="font-semibold">Class ✅ (Reference Type)</p>
              <ul className="list-disc px-5 mt-2 space-y-1 text-sm">
                <li>Shared reference: <b>A = B</b> points to the same object</li>
                <li>Great for “shared identity” (user session, controller)</li>
                <li>Supports identity check <code>===</code></li>
              </ul>
            </div>
          </div>

          <Tip title="Super simple analogy 🧠">
            <p>
              Struct = <b>photocopy</b> 📄 (you change your copy only). Class = <b>shared Google Doc</b> 📝 (everyone sees
              the same changes).
            </p>
          </Tip>
        </div>

        {/* STRUCTS */}
        <div id="structs" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Struct: Resolution + Point</h2>

          <p className="mt-3">
            In the demo, <code>Resolution</code> is a struct with default values for width and height.
          </p>

          <CodeBlock>{`struct Resolution {
    var width: Int = 0
    var height: Int = 0
}`}</CodeBlock>

          <p className="mt-3">
            Creating an instance of the struct uses a memberwise initializer:
          </p>

          <CodeBlock>{`var hdResolution = Resolution(width: 1920, height: 1280)`}</CodeBlock>

          <p className="mt-3">
            Another struct, <code>Point</code>, includes an optional property <code>z</code>.
          </p>

          <CodeBlock>{`struct Point {
    var x: Int = 0
    var y: Int = 1
    var z: Int?
}

var origin = Point()`}</CodeBlock>

          <Tip title="Why is z optional?">
            <p>
              Because sometimes a point is 2D (x,y) and sometimes 3D (x,y,z). Optional means “z might not exist”.
            </p>
          </Tip>
        </div>

        {/* CLASSES */}
        <div id="classes" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Class: VideoMode</h2>

          <p className="mt-3">
            <code>VideoMode</code> is a class with stored properties and an optional bool.
          </p>

          <CodeBlock>{`class VideoMode {
    var frameRate: Int = 240
    var name: String = "UHD"
    var convertible: Bool?
}`}</CodeBlock>

          <p className="mt-3">When you create a class instance:</p>

          <CodeBlock>{`var hdVideoMode = VideoMode()`}</CodeBlock>

          <p className="mt-3">
            Printing the optional uses <code>??</code> to provide a default value if it is nil.
          </p>

          <CodeBlock>{`print("Convertible: \\(hdVideoMode.convertible ?? false)")`}</CodeBlock>

          <Tip title="Why use ?? here?">
            <p>
              If <code>convertible</code> is <code>nil</code>, printing it directly could show “nil” or force you to unwrap.
              Using <code>?? false</code> means: “If missing, assume false.”
            </p>
          </Tip>
        </div>

        {/* VALUE VS REFERENCE */}
        <div id="value-vs-reference" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Value vs Reference Semantics</h2>

          <h3 className="mt-4 text-lg font-semibold">Struct copy behavior</h3>
          <p className="mt-2">
            The demo assigns one struct to another: that creates a <b>copy</b>.
          </p>

          <CodeBlock>{`var xhdResolution = Resolution(width: 4096)
xhdResolution.height = 2160
var resolution1 = xhdResolution`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Class shared behavior</h3>
          <p className="mt-2">
            Here, two variables can point to the <b>same</b> class object.
          </p>

          <CodeBlock>{`var hdVideo2 = VideoMode()
hdVideo2.frameRate = 240

var hdVideo3 = hdVideo2

hdVideo2.frameRate = 480
// hdVideo3.frameRate also becomes 480 because it's the same object`}</CodeBlock>

          <Tip title="What you should notice">
            <p>
              After changing <code>hdVideo2.frameRate</code>, the code prints that <code>hdVideo3.frameRate</code> changed too. That only happens with classes (shared reference).
            </p>
          </Tip>
        </div>

        {/* IDENTITY */}
        <div id="identity" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Identity (===) vs Equality (==)</h2>

          <p className="mt-3">
            In the demo, you cannot use <code>===</code> with structs (value types), but you can with classes.
          </p>

          <CodeBlock>{`// Structs: cannot use ===
// if(resolution1 === xhdResolution) { ... }  // Error

// Classes: === checks if two variables point to the SAME object
if(hdVideo3 === hdVideo2) {
    print("Both are same")
}`}</CodeBlock>

          <Tip title="Quick definition">
            <p>
              <b>===</b> means “same object in memory” (identity).  
              <b>==</b> means “same value” (equality), if your type supports it.
            </p>
          </Tip>
        </div>

        {/* PROPERTIES */}
        <div id="properties" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Stored vs Computed Properties</h2>

          <p className="mt-3">
            Both <code>User</code> and <code>Person</code> have stored properties (<code>name</code>, <code>birthYear</code>) and a computed property <code>age</code>.
          </p>

          <CodeBlock>{`// Stored properties: actually stored in memory
var name: String
var birthYear: Int

// Computed property: calculated when accessed
var age: Int {
    if birthYear != 0 { return 2026 - birthYear }
    return 0
}`}</CodeBlock>

          <Tip title="Why compute age instead of storing it?">
            <p>
              Because age changes every year. If you store it, it becomes outdated. If you compute it from birthYear, it stays correct (as long as you update the current year).
            </p>
          </Tip>
        </div>

        {/* PERSON */}
        <div id="person" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Struct Example: Person</h2>

          <p className="mt-3">
            <code>Person</code> is a struct that conforms to <code>CustomStringConvertible</code> so printing shows a nice message.
          </p>

          <CodeBlock>{`struct Person: CustomStringConvertible {
    var description: String {
        return "Name: \\(self.name), Age: \\(self.age)"
    }
}`}</CodeBlock>

          <p className="mt-3">
            It also has multiple initializers (different ways to create a Person).
          </p>

          <CodeBlock>{`init(name: String) { ... }
init(_ birthYear: Int) { ... }
init(name: String, birthYear: Int) { ... }`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              Multiple initializers = “multiple ways to build the same type”, depending on what data you have.
            </p>
          </Tip>
        </div>

        {/* USER */}
        <div id="user" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Class Example: User</h2>

          <p className="mt-3">
            <code>User</code> is a class with:
          </p>
          <ul className="list-disc px-5 mt-3 space-y-1">
            <li>Designated initializer: <code>init(name:birthYear:)</code></li>
            <li>Convenience initializer: <code>convenience init(name:)</code></li>
            <li>Failable initializer: <code>init?(birthYear:)</code></li>
          </ul>

          <p className="mt-3">
            The failable initializer returns <code>nil</code> when input is invalid.
          </p>

          <CodeBlock>{`init?(birthYear: Int) {
    if(birthYear < 1900 || birthYear > 2026) {
        return nil
    }
    self.name = "Anonymous"
    self.birthYear = birthYear
}`}</CodeBlock>

          <Tip title="Why is this powerful? 💥">
            <p>
              It prevents creating “impossible” users (like birthYear 3000). Instead of crashing, it safely returns nil.
            </p>
          </Tip>
        </div>

        {/* MUTATING */}
        <div id="mutating" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mutating (Struct) vs Normal Methods</h2>

          <p className="mt-3">
            Structs cannot change their stored properties inside a method unless the method is marked <code>mutating</code>.
          </p>

          <CodeBlock>{`mutating func changeBirthYear() {
    self.birthYear += 1
}`}</CodeBlock>

          <p className="mt-3">
            In a class, you can change properties in normal methods (no <code>mutating</code> needed).
          </p>

          <CodeBlock>{`func changeBirthYear() {
    self.birthYear += 1
}`}</CodeBlock>

          <Tip title="Beginner rule ✅">
            <p>
              Struct method that changes data → add <code>mutating</code>. Class method can change data normally.
            </p>
          </Tip>
        </div>

        {/* FAILABLE + OPTIONAL BINDING */}
        <div id="failable" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Failable init? + Optional Binding</h2>

          <p className="mt-3">
            In <code>main.swift</code>, the demo creates a user using the failable initializer and then unwraps it using <code>if let</code>.
          </p>

          <CodeBlock>{`let user3 = User(birthYear: 1965)

if let user3 {
    print(user3.name)
} else {
    print("User3 is nil")
}`}</CodeBlock>

          <Tip title="What’s happening?">
            <p>
              Because <code>init?</code> can return nil, <code>user3</code> is an Optional.  
              <code>if let</code> safely checks whether it exists before using it.
            </p>
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Takeaways + Mini Quiz</h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>
              <b>Struct</b> = value type (copy). <b>Class</b> = reference type (shared).
            </li>
            <li>
              Classes can be checked with <code>===</code> (same object). Structs can’t.
            </li>
            <li>
              <b>Stored properties</b> store data; <b>computed properties</b> calculate results like <code>age</code>.
            </li>
            <li>
              Struct mutation inside methods requires <code>mutating</code>.
            </li>
            <li>
              <b>init?</b> can fail and return <code>nil</code> → use <code>if let</code> to unwrap safely.
            </li>
          </ul>

          <Tip title="Mini Quiz (check yourself ✅)">
            <ol className="list-decimal px-5 space-y-2">
              <li>
                If you do <code>var b = a</code> where <code>a</code> is a struct, is <code>b</code> a copy or shared?
              </li>
              <li>
                Why does <code>hdVideo3.frameRate</code> change when you modify <code>hdVideo2.frameRate</code>?
              </li>
              <li>
                What does <code>init?</code> mean, and why do we need <code>if let</code> after using it?
              </li>
            </ol>
          </Tip>
        </div>
      </section>
    </main>
  )
}
