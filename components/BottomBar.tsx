/** @format */

export default function TopBar() {
    return (
        <div className="firefox:bg-opacity-90 mx-auto border-b md:flex hidden bg-slate-900 text-white w-full max-w-8xl 
        justify-end px-4 py-1 text-sm">
            <section className="flex items-end gap-10">
                <div className="hidden md:flex items-end gap-4 transition-all">
                    <a href="/terms&condition">
                        <span>Terms & Condition</span>
                    </a>
                    <a href="/privacy&policy">
                        <span>Privacy & Policy</span>
                    </a>
                    <a href="">
                        <span>Email-info@eduallsolutions.com</span>
                    </a>
                </div>
            </section>
        </div>
    );
}  