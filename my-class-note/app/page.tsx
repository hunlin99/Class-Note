import Image from "next/image";

const posts = [
  {
    id: 1,
    title: 'Swift Fundamentals — Session 1',
    href: '/Session-01',
    description:
      'This class is about using Swift language fundamentals together to solve a realistic data-processing problem.',
    date: 'Jan 12, 2026',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 2,
    title: 'Swift Fundamentals — Session 2',
    href: '/Session-02',
    description: 'Today’s focus: Arrays, Dictionaries, Loop patterns, and Tuples — the tools you use to store and process real data (like server logs).',
    date: 'Jan 13, 2026',
    datetime: '2020-03-10',
    category: { title: 'Sales', href: '#' },
  },
  {
    id: 3,
    title: 'Swift Fundamentals — Session 3',
    href: '/Session-03',
    description:
      'Today’s focus: switch, enums, and functions — the tools that power app logic and clean decision-making.',
    date: 'Jan 14, 2026',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
  },
  {
    id: 4,
    title: 'Swift Fundamentals — Session 4',
    href: '/Session-04',
    description:
      'Today’s focus: Optionals + Closures + advanced Functions patterns (passing, returning, and escaping).',
    date: 'Jan 15, 2026',
    datetime: '2020-02-12',
    category: { title: 'Business', href: '#' },
  },
  {
    id: 5,
    title: 'Swift Fundamentals — Session: Structs & Classes',
    href: '/Session-05',
    description:
      'This session teaches the most important “app dev” idea: Structs copy (value type) while Classes share (reference type). We also practice properties, initializers, and optionals.',
    date: 'Jan 16, 2026',
    datetime: '2020-02-13',
    category: { title: 'Business', href: '#' },
  },
  {
    id: 6,
    title: 'Swift Fundamentals — Session 6',
    href: '/Session-06',
    description:
      'Focus: Methods + Mutating + Inheritance olymorphism. You learn how Swift objects “do actions”, and how child classes extend parent classes.',
    date: 'Jan 19, 2026',
    datetime: '2020-02-13',
    category: { title: 'Business', href: '#' },
  },
      {
    id: 7,
    title: 'Swift Fundamentals — Session 8',
    href: '/Session-08',
    description:
      'Topic combo: Error Handling + Access Control. Learn how Swift lets you: 1. detect failures safely, 2. protect sensitive data.',
    date: 'Jan 21, 2026',
    datetime: '2020-02-13',
    category: { title: 'Business', href: '#' },
  },
    {
    id: 8,
    title: 'Swift Fundamentals — Session 9',
    href: '/Session-09',
    description:
      'Today’s “power combo”: Optional Chaining + Concurrency (async/await) + OOP Game Design.',
    date: 'Jan 22, 2026',
    datetime: '2020-02-13',
    category: { title: 'Business', href: '#' },
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Ling's Class Note</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                {/* <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a> */}
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
