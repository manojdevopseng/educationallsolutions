/** @format */
"use client";

type NavItem = {
  label: string;
};

const navItems: NavItem[] = [
  {
    label: 'Contact +91 9871023007',
  },
  {
    label: 'Email-info@eduallsolutions.com',
  }
];

export default function TopBar() {
  return (
    <div className="firefox:bg-opacity-90 mx-auto border-b flex bg-black text-white w-full max-w-8xl justify-between px-4 py-1 text-lg">
      <section className="flex items-center gap-10">
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <span>{d.label}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

