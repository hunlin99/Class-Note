import BackBtn from "../components/back-btn"
const links = [
  { name: 'Session Overview', href: '#overview' },
  { name: 'Optional Chaining Basics', href: '#optional-chaining' },
  { name: 'Optional Chaining with Classes', href: '#optional-chaining-classes' },
  { name: 'Unwrapping Patterns (if let / ?? / !)', href: '#unwrapping' },
  { name: 'Optional Chaining for Methods', href: '#optional-methods' },
  { name: 'Concurrency: async/await', href: '#async-await' },
  { name: 'Task { } (Run async code)', href: '#task' },
  { name: 'Sequential vs Concurrent Calls', href: '#seq-vs-concurrent' },
  { name: 'async let (True concurrency)', href: '#async-let' },
  { name: 'Task.sleep (Simulate delay)', href: '#task-sleep' },
  { name: 'Mini Lab: Download Images', href: '#download-images' },
  { name: 'OOP Game Part: Entity/Character/Enemy', href: '#oop-1' },
  { name: 'Game App Part: Enums + Items + Failable Init', href: '#oop-2' },
  { name: 'Common Beginner Mistakes', href: '#mistakes' },
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
              Swift Fundamentals — Session 9
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Today’s “power combo”: <b>Optional Chaining</b> + <b>Concurrency (async/await)</b> + <b>OOP Game Design</b>.
              <br />
              <span className="text-gray-300">
                Goal: write safer Swift (no crashes) and faster Swift (do tasks concurrently).
              </span>
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>Optional chaining</Badge>
              <Badge>if let</Badge>
              <Badge>async/await</Badge>
              <Badge>Task</Badge>
              <Badge>async let</Badge>
              <Badge>Inheritance</Badge>
              <Badge>Failable init</Badge>
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
            Your demo code has three big parts:
          </p>
          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>
              <b>Optional Chaining</b> — safely access properties through “maybe-nil” objects.
            </li>
            <li>
              <b>Concurrency</b> — run async work (downloads / API calls) using <code>async</code>, <code>await</code>, <code>Task</code>, and <code>async let</code>.
            </li>
            <li>
              <b>Game/OOP Example</b> — classes, inheritance, enums, failable init, inventory & items.
            </li>
          </ol>

          <Tip title="Memory hook 🧠">
            <p>
              Optional chaining = “if it exists, go deeper” ✅ <br />
              Concurrency = “don’t wait one-by-one if you can do together” ⚡ <br />
              OOP game = “objects + rules + interactions” 🎮
            </p>
          </Tip>
        </div>

        {/* OPTIONAL CHAINING */}
        <div id="optional-chaining" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Optional Chaining Basics</h2>

          <p className="mt-3">
            Optional chaining uses <code>?.</code>. It means:
            <br />
            <b>“If the left side is not nil, continue. Otherwise return nil.”</b>
          </p>

          <CodeBlock>{`struct Child {
    var toy: String?
}

var kid = Child(toy: "Hot Wheels")

let toyName = kid.toy
print(toyName) // Optional("Hot Wheels")`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              <code>toy</code> is optional, so printing it shows Optional(...). That’s normal.
              If you want plain text, unwrap it:
            </p>
            <CodeBlock>{`print(kid.toy ?? "No toy") // "Hot Wheels"`}</CodeBlock>
          </Tip>

          <h3 className="mt-6 text-lg font-semibold">Parent → child → toy (optional chain)</h3>
          <CodeBlock>{`struct Parent {
    var child: Child?
}

let parent = Parent(child: nil)
let toy = parent.child?.toy
print(toy) // nil`}</CodeBlock>

          <Tip title="What exactly happened?">
            <p>
              Because <code>parent.child</code> is <code>nil</code>, the expression stops at <code>?.</code> and the whole result becomes <code>nil</code>.
              No crash ✅.
            </p>
          </Tip>
        </div>

        {/* OPTIONAL CHAINING WITH CLASSES */}
        <div id="optional-chaining-classes" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Optional Chaining with Classes</h2>

          <CodeBlock>{`class Residence {
    var numberOfRooms = 2
}

class Person {
    var residence: Residence?

    init(residence: Residence? = nil) {
        self.residence = residence
    }
}

let r1 = Residence()
let p1 = Person(residence: r1)

let roomCount = p1.residence?.numberOfRooms // Int?
`}</CodeBlock>

          <p className="mt-3">
            Notice the type: <code>p1.residence?.numberOfRooms</code> becomes <code>Int?</code> (optional),
            because chaining always returns optional.
          </p>

          <Tip title="Why the if statement works">
            <p>
              If you force unwrap (<code>!</code>) and it’s nil → crash 💥.
              So you check first:
            </p>
            <CodeBlock>{`if roomCount == nil {
    print("Unable to retrieve rooms")
} else {
    print("Rooms: \\(roomCount!)")
}`}</CodeBlock>
          </Tip>

          <h3 className="mt-6 text-lg font-semibold">Preferred style: if let</h3>
          <CodeBlock>{`if let rooms = p1.residence?.numberOfRooms {
    print("Has \\(rooms) rooms.")
} else {
    print("No residence found.")
}`}</CodeBlock>
        </div>

        {/* UNWRAPPING */}
        <div id="unwrapping" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Unwrapping Patterns (if let / ?? / !)
          </h2>

          <p className="mt-3">You used multiple patterns in the demo. Here’s the “safety ranking”:</p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Safest ✅</p>
              <p className="text-sm mt-1">
                <code>if let</code> / <code>guard let</code>
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Safe ✅</p>
              <p className="text-sm mt-1">
                <code>??</code> default value
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold">Risky ⚠️</p>
              <p className="text-sm mt-1">
                <code>!</code> force unwrap
              </p>
            </div>
          </div>

          <CodeBlock>{`func doSomeTask(isFinished: Bool) {
    var statement: String? = "Start of execution..."
    print(statement!) // ⚠️ safe here because it is not nil at this moment

    if isFinished {
        statement = "End of execution!"
    } else {
        statement = nil
    }

    if let message = statement {
        print(message)
    } else {
        print("Cannot determine the state.")
    }
}`}</CodeBlock>

          <Tip title="Key idea">
            <p>
              You can force unwrap only when you are 100% sure it is not nil.
              For beginners: try to use <code>if let</code> most of the time ✅.
            </p>
          </Tip>
        </div>

        {/* OPTIONAL METHODS */}
        <div id="optional-methods" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Optional Chaining for Methods</h2>

          <p className="mt-3">
            Your demo shows a method that returns an optional string based on whether a name exists.
          </p>

          <CodeBlock>{`class Student {
    var name: String?

    func greetStudent() -> String? {
        if let studentName = name {
            return "Hello \\(studentName), Welcome to GBC."
        }
        return nil
    }
}

let student1 = Student()

if let greeting = student1.greetStudent() {
    print(greeting)
} else {
    print("Cannot greet an Alien!")
}`}</CodeBlock>

          <Tip title="Why does it print the else message?">
            <p>
              Because <code>student1.name</code> is nil (never assigned), so <code>greetStudent()</code> returns nil.
              Then <code>if let</code> fails and the else runs.
            </p>
          </Tip>
        </div>

        {/* ASYNC AWAIT */}
        <div id="async-await" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Concurrency: async/await</h2>

          <p className="mt-3">
            <code>async</code> marks a function that may take time (network/download). <code>await</code> means “pause here until it finishes”.
          </p>

          <CodeBlock>{`func getSnack() async -> String {
    return "🍪 Cookie"
}

// You can't call await at top-level without being in async context,
// so you used Task { }:
Task {
    let snack = await getSnack()
    print(snack)
}`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              <code>async</code> = might take time ⏳ <br />
              <code>await</code> = wait for result ✋ <br />
              <code>Task {}</code> = start an async “mini program” ✅
            </p>
          </Tip>
        </div>

        {/* TASK */}
        <div id="task" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Task { } (Run async code)</h2>

          <p className="mt-3">
            A <code>Task</code> lets you run async code from a normal place.
          </p>

          <CodeBlock>{`Task {
    let snack = await getSnack()
    print(snack)
}`}</CodeBlock>

          <Tip title="Why do we need Task?">
            <p>
              Because <code>await</code> can only be used inside async contexts.
              <code>Task</code> creates that async context for you.
            </p>
          </Tip>
        </div>

        {/* SEQ VS CONCURRENT */}
        <div id="seq-vs-concurrent" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sequential vs Concurrent Calls</h2>

          <p className="mt-3">
            This part is <b>sequential</b>: one call finishes before the next starts.
          </p>

          <CodeBlock>{`let v1 = await getVehicleInfo(vehicleName: "Cadillac CT5 Blackwing")
let v2 = await getVehicleInfo(vehicleName: "Toyota Tundra")
let v3 = await getVehicleInfo(vehicleName: "Nissan GTR")`}</CodeBlock>

          <Tip title="Why is this slower?">
            <p>
              If each API call takes 2 seconds, then 3 calls take ~6 seconds, because you wait each time.
            </p>
          </Tip>
        </div>

        {/* ASYNC LET */}
        <div id="async-let" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">async let (True concurrency)</h2>

          <p className="mt-3">
            <code>async let</code> starts tasks immediately (in parallel), then you <code>await</code> the results later.
          </p>

          <CodeBlock>{`async let v11 = getVehicleInfo(vehicleName: "Cadillac CT5 Blackwing")
async let v12 = getVehicleInfo(vehicleName: "Toyota Tundra")
async let v13 = getVehicleInfo(vehicleName: "Nissan GTR")

let carData = await [v11, v12, v13]`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              This is like ordering 3 bubble teas at once 🧋🧋🧋,
              instead of ordering, waiting, ordering again.
            </p>
          </Tip>
        </div>

        {/* TASK SLEEP */}
        <div id="task-sleep" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Task.sleep (Simulate delay)</h2>

          <CodeBlock>{`func downloadImages(name: String) async -> String {
    print("Started downloading for \\(name)")
    try? await Task.sleep(for: .seconds(2))
    print("Finished downloading \\(name)")
    return "\\(name).jpeg"
}`}</CodeBlock>

          <Tip title="Why try? here?">
            <p>
              <code>Task.sleep</code> can throw (it’s <code>throws</code>) if the task is cancelled.
              <code>try?</code> means: “if it fails, just make it nil and keep going.”
            </p>
          </Tip>
        </div>

        {/* DOWNLOAD IMAGES LAB */}
        <div id="download-images" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mini Lab: Download Images Concurrently</h2>

          <CodeBlock>{`func downloadImagesConcurrently() async {
    print("Starting downloading images concurrently...")

    async let i1 = downloadImages(name: "Image1")
    async let i2 = downloadImages(name: "Image2")
    async let i3 = downloadImages(name: "Image3")

    let (r1, r2, r3) = await (i1, i2, i3)

    print("Downloaded Images:\\n\\(r1)\\n\\(r2)\\n\\(r3)")
}`}</CodeBlock>

          <Tip title="What output pattern should you expect?">
            <p>
              “Started downloading…” messages may appear quickly for all images.
              “Finished downloading…” may appear in any order (because they run concurrently).
            </p>
          </Tip>
        </div>

        {/* OOP GAME 1 */}
        <div id="oop-1" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">OOP Game Part 1: Entity → Character → Enemy</h2>

          <p className="mt-3">
            This part is practicing <b>inheritance</b>:
          </p>
          <ul className="list-disc px-5 mt-3 space-y-1">
            <li>
              <code>Entity</code> = base class (has name + position)
            </li>
            <li>
              <code>Character</code> extends Entity (adds health/xp/items)
            </li>
            <li>
              <code>Enemy</code> extends Character (adds move/attack logic)
            </li>
          </ul>

          <CodeBlock>{`class Entity {
    var name: String
    var position: (Int, Int)

    init(name: String, position: (Int, Int)) {
        self.name = name
        self.position = position
    }
}

class Character: Entity {
    var health: Double
    var maxHealth: Double
    var xp: Double
    var items: Array<Item>

    init(name: String, maxHealth: Double, position: (Int, Int)) {
        self.maxHealth = maxHealth
        self.health = maxHealth
        self.xp = 0.0
        self.items = []
        super.init(name: name, position: position)
    }
}

class Enemy: Character {
    func move() {
        let direction = Int.random(in: 1...8)
        switch direction {
        case 1: self.position.0 += 1
        case 2: self.position.0 -= 1
        case 3: self.position.1 += 1
        case 4: self.position.1 -= 1
        default: print("doing nothing")
        }
    }
}`}</CodeBlock>

          <Tip title="Beginner check ✅">
            <p>
              <b>super.init</b> means: “Call the parent’s initializer first so name/position get set correctly.”
            </p>
          </Tip>
        </div>

        {/* OOP GAME 2 */}
        <div id="oop-2" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            OOP Game Part 2: Enums + Items + Failable Init
          </h2>

          <h3 className="mt-4 text-lg font-semibold">Enums = controlled set of choices</h3>
          <CodeBlock>{`enum Direction: String { case north, south, east, west }
enum Terrain { case forest, hill, castle }
enum ItemType { case weapon, key, potion }`}</CodeBlock>

          <Tip title="Why enums are great for games">
            <p>
              Because you prevent invalid values. Direction can only be north/south/east/west — not “banana”.
            </p>
          </Tip>

          <h3 className="mt-6 text-lg font-semibold">Item model (struct)</h3>
          <CodeBlock>{`struct Item {
    let itemName: String
    let itemType: ItemType
}`}</CodeBlock>

          <h3 className="mt-6 text-lg font-semibold">Failable init (init?)</h3>
          <p className="mt-2">
            Your <code>Character</code> initializer can fail if health or attackPower is invalid:
          </p>

          <CodeBlock>{`class Character {
    var name: String
    var inventory: [Item]
    var health: Int
    var attackPower: Int
    var direction: Direction
    var position: (x: Int, y: Int)

    init?(name: String, inventory: [Item], health: Int, attackPower: Int, direction: Direction) {
        if attackPower <= 0 || health <= 0 { return nil }
        self.name = name
        self.inventory = inventory
        self.health = health
        self.attackPower = attackPower
        self.direction = direction
        self.position = (0, 0)
    }
}`}</CodeBlock>

          <Tip title="Why init? is important">
            <p>
              It blocks “impossible characters” from existing. If someone tries to create a character with attackPower 0,
              Swift returns <code>nil</code> instead of making a broken object.
            </p>
          </Tip>
        </div>

        {/* MISTAKES */}
        <div id="mistakes" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Beginner Mistakes</h2>
          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>
              Using <code>!</code> too early → crash risk. Prefer <code>if let</code> or <code>??</code>.
            </li>
            <li>
              Thinking <code>?.</code> gives a normal value — it always gives an <b>optional</b>.
            </li>
            <li>
              Calling async functions one-by-one when you really wanted concurrency → use <code>async let</code>.
            </li>
            <li>
              Forgetting <code>super.init</code> when subclass has its own initializer.
            </li>
            <li>
              In game logic: mixing up <code>contains(where:)</code> conditions (easy bug). Always read the boolean carefully.
            </li>
          </ul>

          <Tip title="Tiny bug-spotting game 🎯">
            <p>
              In your Player <code>useItem</code> demo, the message says “Player does not have item” inside a condition that checks <code>contains(where:)</code>.
              Ask yourself: should the message be inside <b>contains</b> or <b>not contains</b>? (Hint: likely needs <code>if !contains</code>.)
            </p>
          </Tip>
        </div>

        {/* TAKEAWAYS */}
        <div id="takeaways" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Takeaways + Mini Quiz</h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>
              Optional chaining <code>?.</code> prevents crashes by returning nil if something is missing.
            </li>
            <li>
              Use <code>if let</code> to safely unwrap optional results from chaining or failable init.
            </li>
            <li>
              <code>async/await</code> handles slow tasks (network/download) in a clean way.
            </li>
            <li>
              <code>async let</code> runs tasks concurrently and can reduce total waiting time.
            </li>
            <li>
              OOP game code shows inheritance + shared rules (base class) + specialized behavior (subclass).
            </li>
          </ul>

          <Tip title="Mini Quiz ✅ (answer in 1 sentence each)">
            <ol className="list-decimal px-5 space-y-2">
              <li>
                What does <code>parent.child?.toy</code> return if <code>child</code> is nil?
              </li>
              <li>
                Why is <code>p1.residence?.numberOfRooms</code> an <code>Int?</code> not an <code>Int</code>?
              </li>
              <li>
                What is the difference between sequential awaits vs <code>async let</code>?
              </li>
              <li>
                What does <code>init?</code> mean in the Character class?
              </li>
              <li>
                Why do subclasses often call <code>super.init</code>?
              </li>
            </ol>
          </Tip>
        </div>
      </section>
    </main>
  )
}
