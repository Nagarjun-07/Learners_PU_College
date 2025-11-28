{ name: 'nav-courses', path: '/courses' },
{ name: 'nav-life', path: '/life-at-lgs' },
{ name: 'nav-connect', path: '/connect' },
                        ].map((item) => (
    <Link
        key={item.name}
        href={item.path}
        className="relative px-4 py-2 text-slate-600 font-medium hover:text-sky-700 transition-colors duration-300 group"
    >
        {t(item.name)}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
))}

{/* Language Dropdown */ }
<div className="relative group ml-4">
    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 transition-all duration-300 border border-slate-200 hover:border-sky-200 shadow-sm hover:shadow-md">
        <span className="text-lg">
            {language === 'en' ? '🇺🇸' :
                language === 'hi' ? '🇮🇳' :
                    language === 'kn' ? '🇮🇳' :
                        language === 'te' ? '🇮🇳' :
                            language === 'ta' ? '🇮🇳' : '🇮🇳'}
        </span>
        <span className="font-semibold text-sm">
            {language === 'en' ? 'EN' :
                language === 'hi' ? 'HI' :
                    language === 'kn' ? 'KN' :
                        language === 'te' ? 'TE' :
                            language === 'ta' ? 'TA' : 'ML'}
        </span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>

    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-50 border border-slate-100 overflow-hidden ring-1 ring-black/5">
        <div className="p-1">
            {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
                { code: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
                { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
                { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
                { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
            ].map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm rounded-xl transition-colors duration-200 ${language === lang.code
                        ? 'bg-sky-50 text-sky-700 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                >
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label}
                </button>
            ))}
        </div>
    </div>
</div>
                    </div >

    {/* Mobile Menu Button */ }
    < button
className = "md:hidden p-2 text-slate-600 hover:text-sky-700 transition-colors"
onClick = {() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
{
    isMobileMenuOpen?(
                            <svg className = "w-7 h-7" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
)}
                    </button >
                </div >
            </div >

    {/* Mobile Menu */ }
    < div
className = {`md:hidden fixed inset-x-0 top-[80px] bg-white/95 backdrop-blur-xl shadow-2xl z-40 transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
    }`}
            >
    <div className="px-6 py-8 space-y-4">
        {[
            { name: 'nav-home', path: '/' },
            { name: 'nav-about', path: '/about' },
            { name: 'nav-courses', path: '/courses' },
            { name: 'nav-life', path: '/life-at-lgs' },
            { name: 'nav-connect', path: '/connect' },
        ].map((item) => (
            <Link
                key={item.name}
                href={item.path}
                className="block text-lg font-medium text-slate-600 hover:text-sky-700 hover:bg-sky-50 px-4 py-3 rounded-xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
            >
                {t(item.name)}
            </Link>
        ))}
    </div>
            </div >
        </nav >
    );
};

export default Navbar;
