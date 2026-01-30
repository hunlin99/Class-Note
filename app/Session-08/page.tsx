import BackBtn from "../components/back-btn"
const links = [
  { name: 'Session Overview', href: '#overview' },
  { name: 'Key Proper Nouns', href: '#proper-nouns' },
  { name: 'Error Handling: The Big Picture', href: '#big-picture' },
  { name: 'Custom Error Types (enum Error)', href: '#error-enums' },
  { name: 'throws / throw / try / do-catch', href: '#throws-flow' },
  { name: 'NetworkOps Example', href: '#networkops' },
  { name: 'VendingMachine Example', href: '#vending' },
  { name: 'guard + throwing', href: '#guard' },
  { name: 'Access Control: private / internal / fileprivate', href: '#access' },
  { name: 'Patient + SIN Example', href: '#patient' },
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
              Swift Fundamentals — Session 8
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Topic combo: <b>Error Handling</b> + <b>Access Control</b> 🔐💥
              <br />
              Learn how Swift lets you: 1. detect failures safely, 2. protect sensitive data.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-gray-900/90">
              <Badge>enum Error</Badge>
              <Badge>throws</Badge>
              <Badge>do-catch</Badge>
              <Badge>try</Badge>
              <Badge>guard</Badge>
              <Badge>private</Badge>
              <Badge>fileprivate</Badge>
              <Badge>internal</Badge>
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
            This session’s demo code is split into three mini programs:
          </p>
          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>
              <b>NetworkOps</b>: simulate network failures and handle them with <code>do-catch</code>.
            </li>
            <li>
              <b>VendingMachine</b>: throw different errors (invalid selection / out of stock / insufficient funds).
            </li>
            <li>
              <b>Patient</b>: use access control (<code>private</code>, <code>fileprivate</code>) to protect SIN.
            </li>
          </ol>

          <Tip title="Memory hook 🧠">
            <p>
              Errors = “something went wrong, but don’t crash” 🧯 <br />
              Access control = “some info should be hidden” 🔐
            </p>
          </Tip>
        </div>

        {/* PROPER NOUNS */}
        <div id="proper-nouns" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Key Proper Nouns (memorize these)</h2>
          <ul className="list-disc px-5 mt-3 space-y-2">
            <li><b>Error</b> (Swift protocol): makes an enum usable as an error type.</li>
            <li><b>throws</b>: marks a function that can fail and “throw” an error.</li>
            <li><b>throw</b>: actually triggers the error.</li>
            <li><b>try</b>: required when calling a throwing function.</li>
            <li><b>do-catch</b>: block that catches and handles thrown errors.</li>
            <li><b>guard</b>: early-exit check (great for validating conditions).</li>
            <li><b>private</b>: only accessible inside the type (class/struct).</li>
            <li><b>fileprivate</b>: only accessible inside the same file.</li>
            <li><b>internal</b>: default access level (same module/app).</li>
          </ul>
        </div>

        {/* BIG PICTURE */}
        <div id="big-picture" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Error Handling: The Big Picture</h2>
          <p className="mt-3">
            Swift error handling is like a “controlled explosion” 💥➡️🧯:
            instead of crashing, you <b>throw</b> an error and <b>catch</b> it.
          </p>

          <CodeBlock>{`// 3 steps:
1) define possible errors
2) throw errors when something is wrong
3) catch errors and show friendly messages`}</CodeBlock>
        </div>

        {/* ERROR ENUMS */}
        <div id="error-enums" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Custom Error Types (enum : Error)</h2>
          <p className="mt-3">
            Your file defines two error enums: <code>NetworkError</code> and <code>VendingError</code>.
            This is how you create your own “error categories” 📦.
          </p>

          <CodeBlock>{`enum NetworkError: Error {
    case noInternet
    case serverNotResponding
    case noAuthrization
}

enum VendingError: Error {
    case invalidSelection
    case outOfStock
    case insufficientFunds(coinsNeeded: Float) // carries extra data!
}`}</CodeBlock>

          <Tip title="Why add associated values? 🎁">
            <p>
              <code>insufficientFunds</code> stores <code>coinsNeeded</code> so the catch block can say:
              “Please add X coins more.” (more helpful UX ✅)
            </p>
          </Tip>
        </div>

        {/* THROWS FLOW */}
        <div id="throws-flow" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">throws / throw / try / do-catch</h2>

          <p className="mt-3">
            Here is the “pipeline” 🔁:
          </p>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li><code>throws</code> on function = “this function might fail”</li>
            <li><code>throw</code> inside function = “fail now with this reason”</li>
            <li><code>try</code> when calling = “I know it might fail”</li>
            <li><code>do-catch</code> = “if it fails, handle it here”</li>
          </ul>

          <Warn title="Important beginner rule ⚠️">
            <p>
              If a function is marked <code>throws</code>, you MUST call it using <code>try</code> (and usually in a <code>do-catch</code>).
            </p>
          </Warn>
        </div>

        {/* NETWORKOPS */}
        <div id="networkops" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">NetworkOps Example (do-catch with specific errors)</h2>

          <p className="mt-3">
            In <code>NetworkOps</code>, you wrote a private throwing function <code>dataService</code>.
            It throws an error when “connected” is true (simulating a server failure).
          </p>

          <CodeBlock>{`struct NetworkOps {

    private func dataService(isConnected: Bool) throws {
        if isConnected {
            throw NetworkError.serverNotResponding
        }
        print("Data Service connected with authrization")
    }

    func fetchData(firstTime: Bool) {
        do {
            try dataService(isConnected: firstTime)
        } catch NetworkError.noAuthrization {
            print("No authorization to the data service")
        } catch NetworkError.noInternet {
            print("No internet access to fetch data")
        } catch NetworkError.serverNotResponding {
            print("Server not responding")
        } catch let err {
            print("Something went wrong while fetching data: \\(err)")
        }
    }
}`}</CodeBlock>

          <Tip title="Why multiple catch blocks? 🎯">
            <p>
              Because each error needs a different user-friendly message.
              It’s like different “warning signs” 🚧 depending on what went wrong.
            </p>
          </Tip>
        </div>

        {/* VENDING */}
        <div id="vending" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">VendingMachine Example (real-world validation)</h2>

          <p className="mt-3">
            <code>vend(itemNumber:)</code> is a throwing function.
            It validates 3 things in order:
          </p>

          <ol className="list-decimal px-5 mt-3 space-y-2">
            <li>Item exists in inventory?</li>
            <li>Item is in stock?</li>
            <li>User deposited enough coins?</li>
          </ol>

          <CodeBlock>{`func vend(itemNumber: Int) throws {

    guard let selectedItem = inventory[itemNumber] else {
        throw VendingError.invalidSelection
    }

    guard selectedItem.count > 0 else {
        throw VendingError.outOfStock
    }

    guard selectedItem.price <= coinsDeposited else {
        throw VendingError.insufficientFunds(
            coinsNeeded: selectedItem.price - coinsDeposited
        )
    }

    coinsDeposited -= selectedItem.price

    var purchasedItem = selectedItem
    purchasedItem.count -= 1
    inventory[itemNumber] = purchasedItem

    print("Vending \\(selectedItem.name) ....")
}`}</CodeBlock>

          <Tip title="Why this order matters 🧠">
            <p>
              You can’t check price if the item doesn’t exist.
              You can’t reduce stock if it’s already 0.
              This “step-by-step validation” prevents logic bugs ✅
            </p>
          </Tip>
        </div>

        {/* GUARD */}
        <div id="guard" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">guard + throwing = clean validation</h2>
          <p className="mt-3">
            <code>guard</code> is perfect for “requirements”. If requirement fails, exit early.
          </p>
          <CodeBlock>{`guard condition else {
    throw SomeError.reason
}`}</CodeBlock>

          <Tip title="Beginner translation 🧩">
            <p>
              guard = “If this is NOT true, stop right now.” ✋
            </p>
          </Tip>
        </div>

        {/* ACCESS CONTROL */}
        <div id="access" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Access Control (private / internal / fileprivate)</h2>

          <p className="mt-3">
            Swift uses access control to control who can read or change data.
            Your Patient example protects sensitive info (SIN) 🔐.
          </p>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li><code>private</code>: only inside the class/struct</li>
            <li><code>fileprivate</code>: only inside the same file</li>
            <li><code>internal</code>: default (inside same app/module)</li>
          </ul>

          <Warn title="Real-world reason ⚠️">
            <p>
              SIN (or SSN) should NEVER be fully visible everywhere. You hide it to reduce data leaks.
            </p>
          </Warn>
        </div>

        {/* PATIENT */}
        <div id="patient" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Patient + SIN Example (private + fileprivate)</h2>

          <p className="mt-3">
            You used:
          </p>
          <ul className="list-disc px-5 mt-3 space-y-2">
            <li><code>fileprivate func validateSIN</code> — only callable inside Patient.swift file</li>
            <li><code>private let SIN</code> — cannot be read directly outside the class</li>
            <li><code>accessSIN()</code> — safe “public-style” method that returns masked SIN</li>
          </ul>

          <CodeBlock>{`fileprivate func validateSIN(_ SIN: String) -> Bool {
    return SIN.count == 9 && SIN.allSatisfy { $0.isNumber }
}

class Patient {
    internal let patientId: String
    private let SIN: String

    init(patientId: String, SIN: String) {
        self.patientId = patientId
        if validateSIN(SIN) {
            self.SIN = SIN
        } else {
            self.SIN = "000000000"
        }
    }

    func accessSIN() -> String {
        return "XXX-XXX-" + self.SIN.suffix(3)
    }
}`}</CodeBlock>

          <Tip title="Why return only last 3 digits? 🕵️‍♀️">
            <p>
              It lets you identify the patient record (“ends with 789”) without exposing full SIN.
            </p>
          </Tip>

          <h3 className="mt-6 text-lg font-semibold">Test code behavior</h3>
          <CodeBlock>{`var patient = Patient(patientId: "P101", SIN: "123456789")
print(patient.accessSIN()) // XXX-XXX-789

patient = Patient(patientId: "P102", SIN: "idontknow")
print(patient.accessSIN()) // invalid -> stored as 000000000 -> XXX-XXX-000`}</CodeBlock>
        </div>

        {/* MISTAKES */}
        <div id="mistakes" className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Beginner Mistakes</h2>

          <ul className="list-disc px-5 mt-3 space-y-2">
            <li>
              Forgetting to use <code>try</code> when calling a throwing function.
            </li>
            <li>
              Catching only <code>catch {}</code> and losing helpful, specific messages.
            </li>
            <li>
              Using <code>private</code> and then wondering why you can’t print the value outside.
            </li>
            <li>
              Not understanding that <code>fileprivate</code> means “same file only” (not same folder).
            </li>
          </ul>

          <Tip title="If your app 'cannot see' a function... 👀">
            <p>
              Check the access level first: is it <code>private</code> or <code>fileprivate</code>?
            </p>
          </Tip>
        </div>

        {/* QUIZ */}
        <div id="quiz" className="mt-12 pb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mini Quiz + Answers ✅</h2>

          <ol className="list-decimal px-5 mt-3 space-y-3">
            <li>
              <b>Q:</b> Why must you write <code>try</code> before calling <code>vend()</code>? <br />
              <b>A:</b> Because <code>vend()</code> is marked <code>throws</code>, so Swift forces you to acknowledge it can fail.
            </li>
            <li>
              <b>Q:</b> What’s the benefit of <code>VendingError.insufficientFunds(coinsNeeded:)</code>? <br />
              <b>A:</b> It carries the exact missing amount so your error message can tell the user how many coins to add.
            </li>
            <li>
              <b>Q:</b> Why is <code>SIN</code> marked <code>private</code>? <br />
              <b>A:</b> To prevent other files/classes from reading the full SIN directly (data protection).
            </li>
            <li>
              <b>Q:</b> Why is <code>validateSIN()</code> <code>fileprivate</code>? <br />
              <b>A:</b> So only Patient.swift can use that helper function — it can’t be called from other files.
            </li>
          </ol>

          <Tip title="Quick self-check 🧠">
            <p>
              If you can explain this sentence, you mastered Session 8:
              <br />
              “A throwing function uses <code>throw</code> to report failure, and callers use <code>try</code> + <code>do-catch</code> to handle it.”
            </p>
          </Tip>
        </div>
      </section>
    </main>
  )
}
